import { describe, expect, it } from "vitest";
import { dedupeBatch } from "../src/modules/normalization/dedupe.js";
import { scoreCompany } from "../src/modules/scoring/index.js";
import { parseAiJson, shouldCallAi } from "../src/modules/ai/prompt.js";
import { baseCompany, baseWebsite } from "./helpers.js";

describe("score", () => {
  it("empresa sem site e boa reputação tem score alto", () => {
    const company = baseCompany();
    const website = baseWebsite();
    const lead = scoreCompany(company, website, null);

    expect(lead.score).toBeGreaterThanOrEqual(70);
    expect(lead.suggestedService).toBe("SITE");
    expect(lead.opportunities).toContain("NO_WEBSITE");
    expect(lead.priority).toMatch(/ALTA|MUITO ALTA/);
  });

  it("site UNAVAILABLE não recebe presença de site ruim (POOR)", () => {
    const company = baseCompany({ website: "https://x.com" });
    const website = baseWebsite({
      siteExists: true,
      siteStatus: "UNAVAILABLE",
      siteReason: "inacessível",
      mobileStatus: "UNKNOWN",
      siteMobile: "desconhecido",
      opportunities: ["UNKNOWN"],
      fetchError: "timeout",
    });
    const lead = scoreCompany(company, website, null);
    expect(lead.breakdown.presence).toBeLessThan(25);
    expect(lead.suggestedService).toBe("DIAGNOSTICO");
  });

  it("nunca gera score negativo", () => {
    const company = baseCompany({
      businessStatus: "CLOSED_PERMANENTLY",
      rating: 2,
      reviewCount: 1,
      website: null,
      phone: null,
      apparentlyActive: false,
    });
    const lead = scoreCompany(company, baseWebsite(), null);
    expect(lead.score).toBeGreaterThanOrEqual(0);
  });
});

describe("duplicidade", () => {
  it("remove duplicatas por placeId e domínio", () => {
    const a = baseCompany({ placeId: "1", website: "https://a.com", domain: "a.com" });
    const b = baseCompany({
      placeId: "1",
      name: "Outro nome",
      website: "https://a.com",
      domain: "a.com",
    });
    const c = baseCompany({
      placeId: "2",
      name: "Outra",
      website: "https://b.com",
      domain: "b.com",
      phone: "(85) 98888-0000",
      phoneNormalized: "85988880000",
    });

    const unique = dedupeBatch([a, b, c]);
    expect(unique).toHaveLength(2);
  });
});

describe("IA prompt helpers", () => {
  it("parseAiJson valida serviço e confidence", () => {
    const parsed = parseAiJson(
      JSON.stringify({
        opportunity: "Possível oportunidade de site",
        recommended_service: "SITE",
        confidence: 88,
        evidence: ["Sem website"],
        inference: ["Pode haver oportunidade de presença digital"],
        summary: "Resumo",
      }),
    );
    expect(parsed).not.toBeNull();
    expect(parsed!.recommendedService).toBe("SITE");
    expect(parsed!.confidence).toBe(88);
    expect(parsed!.skipped).toBe(false);
  });

  it("shouldCallAi evita empresas sem dados", () => {
    const company = baseCompany({
      website: null,
      rating: null,
      reviewCount: null,
      phone: null,
    });
    // Ainda assim INEXISTENT deve chamar
    const gate = shouldCallAi(company, baseWebsite());
    expect(gate.yes).toBe(true);
  });
});
