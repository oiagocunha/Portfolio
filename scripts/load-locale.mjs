import { readFileSync } from 'node:fs';
import ts from 'typescript';

/** Loads `src/i18n/locales/<locale>.ts` as plain data, outside Vite. */
export async function loadLocale(locale) {
  const source = readFileSync(new URL(`../src/i18n/locales/${locale}.ts`, import.meta.url), 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
  const module = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
  return module[locale];
}
