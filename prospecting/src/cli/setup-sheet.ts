import { getConfig } from "../config.js";
import { logger } from "../logger.js";
import { setupSheet } from "../modules/sheets/index.js";

async function main(): Promise<void> {
  getConfig();
  await setupSheet();
  console.log(
    `\n✅ Aba "${getConfig().GOOGLE_SHEETS_SHEET_NAME}" pronta em:\nhttps://docs.google.com/spreadsheets/d/${getConfig().GOOGLE_SHEETS_SPREADSHEET_ID}\n`,
  );
}

main().catch((error) => {
  logger.error("Falha no setup da planilha", {
    message: error instanceof Error ? error.message : String(error),
  });
  process.exit(1);
});
