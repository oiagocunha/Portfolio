import type { NormalizedCompany, ScoredLead } from "../../types.js";
import {
  normalizeAddress,
  normalizeName,
  normalizePhone,
} from "../../utils/normalize.js";
import { logger } from "../../logger.js";

export type DedupeKeyKind = "placeId" | "domain" | "phone" | "nameAddress";

export function buildDedupeKeys(company: NormalizedCompany): {
  placeId: string;
  domain: string | null;
  phone: string | null;
  nameAddress: string;
} {
  return {
    placeId: company.placeId,
    domain: company.domain,
    phone: company.phoneNormalized,
    nameAddress: `${normalizeName(company.name)}|${normalizeAddress(company.address)}`,
  };
}

/** Remove duplicatas dentro do lote atual (prioridade: placeId > domain > phone > nome+endereço). */
export function dedupeBatch(companies: NormalizedCompany[]): NormalizedCompany[] {
  const byPlaceId = new Map<string, NormalizedCompany>();
  const byDomain = new Map<string, string>();
  const byPhone = new Map<string, string>();
  const byNameAddress = new Map<string, string>();
  const unique: NormalizedCompany[] = [];

  for (const company of companies) {
    const keys = buildDedupeKeys(company);

    if (byPlaceId.has(keys.placeId)) {
      logger.debug("Duplicata no lote (placeId)", { name: company.name });
      continue;
    }

    if (keys.domain && byDomain.has(keys.domain)) {
      logger.debug("Duplicata no lote (domain)", {
        name: company.name,
        domain: keys.domain,
      });
      continue;
    }

    if (keys.phone && byPhone.has(keys.phone)) {
      logger.debug("Duplicata no lote (phone)", { name: company.name });
      continue;
    }

    if (keys.nameAddress && byNameAddress.has(keys.nameAddress)) {
      logger.debug("Duplicata no lote (name+address)", { name: company.name });
      continue;
    }

    byPlaceId.set(keys.placeId, company);
    if (keys.domain) byDomain.set(keys.domain, keys.placeId);
    if (keys.phone) byPhone.set(keys.phone, keys.placeId);
    if (keys.nameAddress) byNameAddress.set(keys.nameAddress, keys.placeId);
    unique.push(company);
  }

  logger.info("Deduplicação do lote", {
    antes: companies.length,
    depois: unique.length,
  });

  return unique;
}

export interface ExistingLeadIndex {
  byPlaceId: Map<string, number>;
  byDomain: Map<string, number>;
  byPhone: Map<string, number>;
  byNameAddress: Map<string, number>;
}

/** Índices de linhas existentes na planilha (rowIndex 0-based na aba de dados, excluindo header). */
export function buildExistingIndex(
  rows: Array<{
    placeId: string;
    domain: string | null;
    phone: string | null;
    name: string;
    address: string | null;
    rowIndex: number;
  }>,
): ExistingLeadIndex {
  const index: ExistingLeadIndex = {
    byPlaceId: new Map(),
    byDomain: new Map(),
    byPhone: new Map(),
    byNameAddress: new Map(),
  };

  for (const row of rows) {
    if (row.placeId) index.byPlaceId.set(row.placeId, row.rowIndex);
    if (row.domain) index.byDomain.set(row.domain, row.rowIndex);
    const phone = normalizePhone(row.phone);
    if (phone) index.byPhone.set(phone, row.rowIndex);
    const na = `${normalizeName(row.name)}|${normalizeAddress(row.address)}`;
    if (na !== "|") index.byNameAddress.set(na, row.rowIndex);
  }

  return index;
}

export function findExistingRow(
  lead: ScoredLead,
  index: ExistingLeadIndex,
): number | null {
  const keys = buildDedupeKeys(lead.company);
  if (index.byPlaceId.has(keys.placeId)) {
    return index.byPlaceId.get(keys.placeId)!;
  }
  if (keys.domain && index.byDomain.has(keys.domain)) {
    return index.byDomain.get(keys.domain)!;
  }
  if (keys.phone && index.byPhone.has(keys.phone)) {
    return index.byPhone.get(keys.phone)!;
  }
  if (keys.nameAddress && index.byNameAddress.has(keys.nameAddress)) {
    return index.byNameAddress.get(keys.nameAddress)!;
  }
  return null;
}
