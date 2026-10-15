import { config as loadDotenv } from "dotenv";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { z } from "zod";

const envPath = resolve(process.cwd(), ".env");
if (existsSync(envPath)) {
  loadDotenv({ path: envPath });
}

const envSchema = z.object({
  GOOGLE_PLACES_API_KEY: z.string().min(1, "GOOGLE_PLACES_API_KEY é obrigatória"),
  GOOGLE_SHEETS_SPREADSHEET_ID: z
    .string()
    .min(1, "GOOGLE_SHEETS_SPREADSHEET_ID é obrigatória"),
  GOOGLE_SHEETS_SHEET_NAME: z.string().default("Leads"),
  GOOGLE_SERVICE_ACCOUNT_PATH: z.string().optional(),
  GOOGLE_SERVICE_ACCOUNT_JSON: z.string().optional(),
  REQUEST_TIMEOUT_MS: z.coerce.number().default(15_000),
  MAX_RETRIES: z.coerce.number().default(3),
  REQUEST_DELAY_MS: z.coerce.number().default(200),

  // Fase 2 — website
  WEBSITE_TIMEOUT_MS: z.coerce.number().default(12_000),
  WEBSITE_CONCURRENCY: z.coerce.number().default(3),
  WEBSITE_MAX_HTML_BYTES: z.coerce.number().default(1_500_000),

  // Fase 2 — IA (opcional)
  AI_ENABLED: z
    .string()
    .optional()
    .transform((v) => {
      if (v === undefined || v === "") return true;
      return !["0", "false", "no", "off"].includes(v.toLowerCase());
    }),
  OPENAI_API_KEY: z.string().optional(),
  AI_MODEL: z.string().default("gpt-4o-mini"),
  AI_TIMEOUT_MS: z.coerce.number().default(30_000),
  AI_MAX_PER_RUN: z.coerce.number().default(40),
});

export type AppConfig = z.infer<typeof envSchema>;

let cached: AppConfig | null = null;

export function getConfig(): AppConfig {
  if (cached) return cached;

  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    const details = parsed.error.issues
      .map((i) => `  - ${i.path.join(".")}: ${i.message}`)
      .join("\n");
    throw new Error(`Configuração inválida (.env):\n${details}`);
  }

  if (
    !parsed.data.GOOGLE_SERVICE_ACCOUNT_PATH &&
    !parsed.data.GOOGLE_SERVICE_ACCOUNT_JSON
  ) {
    throw new Error(
      "Informe GOOGLE_SERVICE_ACCOUNT_PATH ou GOOGLE_SERVICE_ACCOUNT_JSON",
    );
  }

  cached = parsed.data;
  return cached;
}

/** Limpa cache (útil em testes). */
export function resetConfigCache(): void {
  cached = null;
}
