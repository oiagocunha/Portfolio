import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { google, sheets_v4 } from "googleapis";
import { getConfig } from "../../config.js";
import { logger } from "../../logger.js";
import type { ScoredLead } from "../../types.js";
import { displayOrNotFound, extractDomain } from "../../utils/normalize.js";
import {
  buildExistingIndex,
  findExistingRow,
} from "../normalization/dedupe.js";
import { COL, HEADER_COUNT, SHEET_HEADERS } from "./columns.js";

function loadServiceAccount(): {
  client_email: string;
  private_key: string;
} {
  const config = getConfig();

  if (config.GOOGLE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(config.GOOGLE_SERVICE_ACCOUNT_JSON) as {
      client_email: string;
      private_key: string;
    };
  }

  const path = resolve(process.cwd(), config.GOOGLE_SERVICE_ACCOUNT_PATH!);
  const raw = readFileSync(path, "utf-8");
  return JSON.parse(raw) as { client_email: string; private_key: string };
}

async function getSheetsClient(): Promise<sheets_v4.Sheets> {
  const credentials = loadServiceAccount();
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

function leadToRow(lead: ScoredLead, preserveStatus?: string): unknown[] {
  const c = lead.company;
  const w = lead.website;
  const status = preserveStatus ?? lead.commercialStatus;
  const siteStatus =
    w.siteStatus === "NONE" ? "INEXISTENT" : w.siteStatus;

  return [
    lead.discoveredAt,
    c.name,
    c.category,
    c.city,
    displayOrNotFound(c.address),
    displayOrNotFound(c.phone),
    c.whatsapp,
    c.rating ?? "não encontrado",
    c.reviewCount ?? "não encontrado",
    displayOrNotFound(c.googleMapsUrl),
    displayOrNotFound(c.website),
    siteStatus,
    w.siteReason || "não encontrado",
    w.https === null ? "não encontrado" : w.https ? "sim" : "não",
    w.mobileStatus,
    w.whatsappFound,
    displayOrNotFound(w.instagram ?? c.instagram),
    displayOrNotFound(w.facebook ?? c.facebook),
    displayOrNotFound(w.email ?? c.email),
    displayOrNotFound(w.sitePhone),
    lead.opportunities.join(", ") || "não encontrado",
    lead.opportunity,
    lead.suggestedService,
    lead.aiConfidence ?? "não encontrado",
    lead.evidence.join(" | ") || "não encontrado",
    lead.inference.join(" | ") || "não encontrado",
    lead.summary || "não encontrado",
    lead.justification,
    lead.score,
    lead.priority,
    status,
    "", // último contato
    "", // próxima ação
    "", // observações
    c.placeId,
  ];
}

async function ensureSheet(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetName: string,
): Promise<number> {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const existing = meta.data.sheets?.find(
    (s) => s.properties?.title === sheetName,
  );

  if (existing?.properties?.sheetId != null) {
    return existing.properties.sheetId;
  }

  logger.info("Criando aba", { sheetName });
  const res = await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: {
              title: sheetName,
              gridProperties: {
                frozenRowCount: 1,
              },
            },
          },
        },
      ],
    },
  });

  const sheetId =
    res.data.replies?.[0]?.addSheet?.properties?.sheetId ?? null;
  if (sheetId == null) {
    throw new Error("Falha ao criar aba no Google Sheets");
  }
  return sheetId;
}

async function ensureHeader(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetName: string,
): Promise<void> {
  const range = `${sheetName}!A1:${columnLetter(HEADER_COUNT)}1`;
  const current = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const row = current.data.values?.[0] ?? [];
  const expected = [...SHEET_HEADERS];
  const matches =
    row.length === expected.length &&
    expected.every((h, i) => String(row[i] ?? "") === h);

  if (matches) return;

  if (row.length > 0) {
    logger.warn(
      "Cabeçalhos da planilha diferem da Fase 2 — atualizando linha 1. Se houver dados da Fase 1, prefira uma aba nova (GOOGLE_SHEETS_SHEET_NAME).",
    );
  }

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: "RAW",
    requestBody: { values: [expected] },
  });
  logger.info("Cabeçalhos Fase 2 gravados");
}

function columnLetter(index1Based: number): string {
  let n = index1Based;
  let s = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    s = String.fromCharCode(65 + rem) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

async function readExistingRows(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetName: string,
): Promise<
  Array<{
    placeId: string;
    domain: string | null;
    phone: string | null;
    name: string;
    address: string | null;
    status: string;
    rowIndex: number;
  }>
> {
  const range = `${sheetName}!A2:${columnLetter(HEADER_COUNT)}`;
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const values = res.data.values ?? [];
  return values.map((row, i) => {
    const website = String(row[COL.website] ?? "");
    const domain =
      website && website !== "não encontrado"
        ? extractDomain(website)
        : null;

    return {
      placeId: String(row[COL.placeId] ?? ""),
      domain,
      phone: String(row[COL.phone] ?? "") || null,
      name: String(row[COL.name] ?? ""),
      address: String(row[COL.address] ?? "") || null,
      status: String(row[COL.commercialStatus] ?? "NOVO"),
      rowIndex: i, // 0-based relative to data rows (row 2 = index 0)
    };
  });
}

async function applyFormatting(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetId: number,
): Promise<void> {
  const scoreCol = COL.score;
  const priorityCol = COL.priority;
  const statusCol = COL.commercialStatus;
  const websiteCol = COL.website;
  const lastCol = HEADER_COUNT - 1;

  const requests: sheets_v4.Schema$Request[] = [
    {
      updateSheetProperties: {
        properties: {
          sheetId,
          gridProperties: { frozenRowCount: 1 },
        },
        fields: "gridProperties.frozenRowCount",
      },
    },
    {
      setBasicFilter: {
        filter: {
          range: {
            sheetId,
            startRowIndex: 0,
            startColumnIndex: 0,
            endColumnIndex: HEADER_COUNT,
          },
        },
      },
    },
    // Header style
    {
      repeatCell: {
        range: {
          sheetId,
          startRowIndex: 0,
          endRowIndex: 1,
          startColumnIndex: 0,
          endColumnIndex: HEADER_COUNT,
        },
        cell: {
          userEnteredFormat: {
            textFormat: {
              bold: true,
              foregroundColor: { red: 1, green: 1, blue: 1 },
            },
            backgroundColor: { red: 0.15, green: 0.15, blue: 0.18 },
          },
        },
        fields: "userEnteredFormat(textFormat,backgroundColor)",
      },
    },
    // Hide PLACE_ID
    {
      updateDimensionProperties: {
        range: {
          sheetId,
          dimension: "COLUMNS",
          startIndex: COL.placeId,
          endIndex: COL.placeId + 1,
        },
        properties: { hiddenByUser: true },
        fields: "hiddenByUser",
      },
    },
  ];

  // Remove regras antigas para não acumular a cada execução
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const sheet = meta.data.sheets?.find((s) => s.properties?.sheetId === sheetId);
  const existingRules = sheet?.conditionalFormats?.length ?? 0;
  for (let i = existingRules - 1; i >= 0; i--) {
    requests.push({
      deleteConditionalFormatRule: { sheetId, index: i },
    });
  }

  const bands: Array<{
    min: number;
    max: number;
    color: { red: number; green: number; blue: number };
  }> = [
    { min: 90, max: 100, color: { red: 0.72, green: 0.88, blue: 0.72 } },
    { min: 75, max: 89, color: { red: 0.7, green: 0.82, blue: 0.95 } },
    { min: 60, max: 74, color: { red: 1, green: 0.95, blue: 0.7 } },
    { min: 40, max: 59, color: { red: 1, green: 0.85, blue: 0.65 } },
    { min: 0, max: 39, color: { red: 0.95, green: 0.72, blue: 0.72 } },
  ];

  for (const band of bands) {
    requests.push({
      addConditionalFormatRule: {
        rule: {
          ranges: [
            {
              sheetId,
              startRowIndex: 1,
              startColumnIndex: scoreCol,
              endColumnIndex: scoreCol + 1,
            },
          ],
          booleanRule: {
            condition: {
              type: "NUMBER_BETWEEN",
              values: [
                { userEnteredValue: String(band.min) },
                { userEnteredValue: String(band.max) },
              ],
            },
            format: {
              backgroundColor: band.color,
            },
          },
        },
        index: 0,
      },
    });
  }

  // Prioridade by text (emojis) — backup visual
  const priorityColors: Array<{
    text: string;
    color: { red: number; green: number; blue: number };
  }> = [
    { text: "MUITO ALTA", color: { red: 0.72, green: 0.88, blue: 0.72 } },
    { text: "ALTA", color: { red: 0.7, green: 0.82, blue: 0.95 } },
    { text: "MÉDIA", color: { red: 1, green: 0.95, blue: 0.7 } },
    { text: "BAIXA", color: { red: 1, green: 0.85, blue: 0.65 } },
    { text: "DESCARTAR", color: { red: 0.95, green: 0.72, blue: 0.72 } },
  ];

  for (const p of priorityColors) {
    requests.push({
      addConditionalFormatRule: {
        rule: {
          ranges: [
            {
              sheetId,
              startRowIndex: 1,
              startColumnIndex: priorityCol,
              endColumnIndex: priorityCol + 1,
            },
          ],
          booleanRule: {
            condition: {
              type: "TEXT_CONTAINS",
              values: [{ userEnteredValue: p.text }],
            },
            format: { backgroundColor: p.color },
          },
        },
        index: 0,
      },
    });
  }

  // Sem site
  requests.push({
    addConditionalFormatRule: {
      rule: {
        ranges: [
          {
            sheetId,
            startRowIndex: 1,
            startColumnIndex: websiteCol,
            endColumnIndex: websiteCol + 1,
          },
        ],
        booleanRule: {
          condition: {
            type: "TEXT_EQ",
            values: [{ userEnteredValue: "não encontrado" }],
          },
          format: {
            backgroundColor: { red: 1, green: 0.9, blue: 0.85 },
          },
        },
      },
      index: 0,
    },
  });

  // Já contatado (status != NOVO)
  requests.push({
    addConditionalFormatRule: {
      rule: {
        ranges: [
          {
            sheetId,
            startRowIndex: 1,
            startColumnIndex: statusCol,
            endColumnIndex: statusCol + 1,
          },
        ],
        booleanRule: {
          condition: {
            type: "TEXT_NOT_CONTAINS",
            values: [{ userEnteredValue: "NOVO" }],
          },
          format: {
            backgroundColor: { red: 0.88, green: 0.88, blue: 0.92 },
          },
        },
      },
      index: 0,
    },
  });

  // Auto-resize useful columns
  requests.push({
    autoResizeDimensions: {
      dimensions: {
        sheetId,
        dimension: "COLUMNS",
        startIndex: 0,
        endIndex: lastCol + 1,
      },
    },
  });

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: { requests },
  });

  logger.info("Formatação aplicada (filtros, freeze, cores)");
}

async function sortByScoreDesc(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetId: number,
): Promise<void> {
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          sortRange: {
            range: {
              sheetId,
              startRowIndex: 1,
              startColumnIndex: 0,
              endColumnIndex: HEADER_COUNT,
            },
            sortSpecs: [
              {
                dimensionIndex: COL.score,
                sortOrder: "DESCENDING",
              },
            ],
          },
        },
      ],
    },
  });
}

export async function upsertLeadsToSheet(leads: ScoredLead[]): Promise<{
  inserted: number;
  updated: number;
}> {
  const config = getConfig();
  const spreadsheetId = config.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = config.GOOGLE_SHEETS_SHEET_NAME;

  const sheets = await getSheetsClient();
  const sheetId = await ensureSheet(sheets, spreadsheetId, sheetName);
  await ensureHeader(sheets, spreadsheetId, sheetName);

  const existing = await readExistingRows(sheets, spreadsheetId, sheetName);
  const index = buildExistingIndex(existing);
  const statusByRow = new Map(
    existing.map((r) => [r.rowIndex, r.status] as const),
  );

  let inserted = 0;
  let updated = 0;
  const toAppend: unknown[][] = [];

  for (const lead of leads) {
    const existingRow = findExistingRow(lead, index);

    if (existingRow !== null) {
      const preserveStatus = statusByRow.get(existingRow);
      const sheetRowNumber = existingRow + 2; // 1-based + header
      const range = `${sheetName}!A${sheetRowNumber}:${columnLetter(HEADER_COUNT)}${sheetRowNumber}`;

      // Preserva STATUS / ÚLTIMO CONTATO / PRÓXIMA AÇÃO / OBSERVAÇÕES se já preenchidos
      const current = existing[existingRow];
      const row = leadToRow(
        lead,
        preserveStatus && preserveStatus !== ""
          ? preserveStatus
          : undefined,
      );

      // Se atualizando, não apagar campos de CRM preenchidos manualmente
      if (current) {
        // lastContact, nextAction, notes já vão vazios no leadToRow —
        // relemos a linha completa para preservar
        const full = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range,
        });
        const old = full.data.values?.[0] ?? [];
        if (old[COL.lastContact]) row[COL.lastContact] = old[COL.lastContact];
        if (old[COL.nextAction]) row[COL.nextAction] = old[COL.nextAction];
        if (old[COL.notes]) row[COL.notes] = old[COL.notes];
        if (old[COL.commercialStatus] && old[COL.commercialStatus] !== "NOVO") {
          row[COL.commercialStatus] = old[COL.commercialStatus];
        }
        // Mantém data da descoberta original
        if (old[COL.discoveredAt]) row[COL.discoveredAt] = old[COL.discoveredAt];
      }

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [row] },
      });
      updated += 1;
      logger.debug("Lead atualizado", { name: lead.company.name, sheetRowNumber });
    } else {
      toAppend.push(leadToRow(lead));
      inserted += 1;
    }
  }

  if (toAppend.length > 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:A`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: toAppend },
    });
  }

  await applyFormatting(sheets, spreadsheetId, sheetId);
  await sortByScoreDesc(sheets, spreadsheetId, sheetId);

  logger.info("Sheets sync concluído", { inserted, updated });
  return { inserted, updated };
}

/** Configura aba vazia com cabeçalhos e formatação (sem leads). */
export async function setupSheet(): Promise<void> {
  const config = getConfig();
  const sheets = await getSheetsClient();
  const sheetId = await ensureSheet(
    sheets,
    config.GOOGLE_SHEETS_SPREADSHEET_ID,
    config.GOOGLE_SHEETS_SHEET_NAME,
  );
  await ensureHeader(
    sheets,
    config.GOOGLE_SHEETS_SPREADSHEET_ID,
    config.GOOGLE_SHEETS_SHEET_NAME,
  );
  await applyFormatting(
    sheets,
    config.GOOGLE_SHEETS_SPREADSHEET_ID,
    sheetId,
  );
  logger.info("Planilha pronta para uso");
}
