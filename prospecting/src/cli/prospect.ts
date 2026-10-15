import * as readline from "node:readline/promises";
import process from "node:process";
import { getConfig } from "../config.js";
import { logger } from "../logger.js";
import { runProspectingPipeline } from "../pipeline.js";

function parseArgs(argv: string[]): {
  niche?: string;
  city?: string;
  quantity?: number;
} {
  const result: { niche?: string; city?: string; quantity?: number } = {};

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--niche" || arg === "-n") result.niche = argv[++i];
    else if (arg === "--city" || arg === "-c") result.city = argv[++i];
    else if (arg === "--quantity" || arg === "-q") {
      result.quantity = Number(argv[++i]);
    }
  }

  return result;
}

async function promptMissing(args: {
  niche?: string;
  city?: string;
  quantity?: number;
}): Promise<{ niche: string; city: string; quantity: number }> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const niche =
      args.niche?.trim() ||
      (await rl.question("Nicho (ex: clínicas odontológicas): ")).trim();
    const city =
      args.city?.trim() ||
      (await rl.question("Cidade/região (ex: Fortaleza, CE): ")).trim();
    const quantityRaw =
      args.quantity !== undefined
        ? String(args.quantity)
        : (await rl.question("Quantidade (ex: 20): ")).trim();
    const quantity = Number(quantityRaw);

    if (!niche || !city || !Number.isFinite(quantity) || quantity < 1) {
      throw new Error("Informe nicho, cidade e quantidade válida (>= 1).");
    }

    return { niche, city, quantity: Math.min(Math.floor(quantity), 60) };
  } finally {
    rl.close();
  }
}

async function main(): Promise<void> {
  getConfig();

  const args = parseArgs(process.argv.slice(2));
  const prospectInput = await promptMissing(args);

  console.log("\nIniciando prospecção...");
  console.log(`  Nicho:       ${prospectInput.niche}`);
  console.log(`  Localização: ${prospectInput.city}`);
  console.log(`  Quantidade:  ${prospectInput.quantity}\n`);

  const result = await runProspectingPipeline(prospectInput);

  console.log("\nConcluído");
  console.log(`  Leads processados: ${result.leads.length}`);
  console.log(`  Inseridos:         ${result.inserted}`);
  console.log(`  Atualizados:       ${result.updated}`);
  console.log(
    `  Planilha:          https://docs.google.com/spreadsheets/d/${getConfig().GOOGLE_SHEETS_SPREADSHEET_ID}`,
  );

  if (result.leads.length > 0) {
    console.log("\nTop 5 por score:");
    for (const lead of result.leads.slice(0, 5)) {
      console.log(
        `  ${lead.score} ${lead.priority} — ${lead.company.name}`,
      );
    }
  }
}

main().catch((error) => {
  logger.error("Falha na prospecção", {
    message: error instanceof Error ? error.message : String(error),
  });
  process.exit(1);
});
