import { describe, expect, it } from "vitest";
import { buildWebsiteAnalysis } from "../src/modules/website/classify.js";
import { parseHtmlForTest } from "../src/modules/website/parse.js";
import { baseCompany } from "./helpers.js";

describe("empresa sem site", () => {
  it("retorna INEXISTENT sem inventar URL", () => {
    const company = baseCompany({ website: null });
    const analysis = buildWebsiteAnalysis({
      company,
      fetchResult: null,
      signals: null,
    });

    expect(analysis.siteExists).toBe(false);
    expect(analysis.siteStatus).toBe("INEXISTENT");
    expect(analysis.opportunities).toContain("NO_WEBSITE");
    expect(analysis.https).toBeNull();
  });
});

describe("parse HTML", () => {
  it("detecta WhatsApp, Instagram e formulário em site válido", () => {
    const html = `
      <html>
        <head>
          <title>Clínica Teste</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="description" content="Clínica odontológica">
        </head>
        <body>
          <h1>Bem-vindo</h1>
          <a href="https://wa.me/5585999991234">WhatsApp</a>
          <a href="https://instagram.com/clinica">Instagram</a>
          <a href="/contato">Fale conosco</a>
          <form action="/enviar"><input name="nome" /></form>
        </body>
      </html>
    `;

    const signals = parseHtmlForTest(html, "https://clinica.example.com");
    expect(signals.hasViewport).toBe(true);
    expect(signals.whatsappLinks.length).toBeGreaterThan(0);
    expect(signals.instagramLinks.length).toBeGreaterThan(0);
    expect(signals.hasForm).toBe(true);
    expect(signals.hasCta).toBe(true);
  });

  it("site sem WhatsApp marca lista vazia", () => {
    const html = `
      <html><head><title>X</title><meta name="viewport" content="width=device-width"></head>
      <body><h1>Oi</h1><a href="/servicos">Serviços</a></body></html>
    `;
    const signals = parseHtmlForTest(html);
    expect(signals.whatsappLinks).toEqual([]);
  });

  it("HTML inválido/vazio não quebra", () => {
    const signals = parseHtmlForTest("");
    expect(signals.title).toBeNull();
    expect(signals.hasForm).toBe(false);
  });
});

describe("classificação de site", () => {
  it("site válido com sinais bons → não INEXISTENT", () => {
    const company = baseCompany({
      website: "https://clinica.example.com",
    });
    const html = `
      <html>
        <head>
          <title>Clínica</title>
          <meta name="viewport" content="width=device-width">
          <meta name="description" content="desc">
        </head>
        <body>
          <a href="https://wa.me/5585">WhatsApp</a>
          <a href="/agendar">Agendar</a>
          <form></form>
        </body>
      </html>
    `;
    const signals = parseHtmlForTest(html, "https://clinica.example.com");
    const analysis = buildWebsiteAnalysis({
      company,
      fetchResult: {
        ok: true,
        finalUrl: "https://clinica.example.com",
        status: 200,
        https: true,
        html,
        error: null,
        timedOut: false,
      },
      signals: { ...signals, https: true, httpStatus: 200 },
    });

    expect(analysis.siteExists).toBe(true);
    expect(["GOOD", "FAIR", "POOR"]).toContain(analysis.siteStatus);
    expect(analysis.whatsappFound).toBe("true");
    expect(analysis.instagram).toBeNull();
  });

  it("site indisponível → UNAVAILABLE (não POOR)", () => {
    const company = baseCompany({ website: "https://offline.example.com" });
    const analysis = buildWebsiteAnalysis({
      company,
      fetchResult: {
        ok: false,
        finalUrl: "https://offline.example.com",
        status: 503,
        https: true,
        html: null,
        error: "HTTP 503",
        timedOut: false,
      },
      signals: null,
    });

    expect(analysis.siteStatus).toBe("UNAVAILABLE");
    expect(analysis.siteReason.toLowerCase()).toContain("inacessível");
  });

  it("timeout → UNAVAILABLE", () => {
    const company = baseCompany({ website: "https://slow.example.com" });
    const analysis = buildWebsiteAnalysis({
      company,
      fetchResult: {
        ok: false,
        finalUrl: "https://slow.example.com",
        status: null,
        https: true,
        html: null,
        error: "timeout",
        timedOut: true,
      },
      signals: null,
    });

    expect(analysis.siteStatus).toBe("UNAVAILABLE");
    expect(analysis.fetchError).toBe("timeout");
  });
});
