import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadLocale } from './load-locale.mjs';

const SITE = 'https://portfolio-oiagocunha.vercel.app';
const script = fileURLToPath(new URL('./build-pages.mjs', import.meta.url));
let out;

before(() => {
  out = mkdtempSync(join(tmpdir(), 'build-pages-'));
  copyFileSync(new URL('../index.html', import.meta.url), join(out, 'index.html'));
  execFileSync(process.execPath, [script, out], { stdio: 'pipe' });
});
after(() => rmSync(out, { recursive: true, force: true }));

const page = route => readFileSync(join(out, route, 'index.html'), 'utf8');
const meta = (html, key) => html.match(new RegExp(`<meta (?:name|property)="${key}"\\s+content="([^"]*)"`))?.[1];
const link = (html, attrs) => html.match(new RegExp(`<link ${attrs} href="([^"]*)"`))?.[1];
const unescape = text => text.replaceAll('&amp;', '&').replaceAll('&quot;', '"');

test('each localized route gets its own canonical, language and alternates', () => {
  const perfilEn = page('en/perfil');
  assert.match(perfilEn, /<html lang="en"/);
  assert.equal(link(perfilEn, 'rel="canonical"'), `${SITE}/en/perfil`);
  assert.equal(link(perfilEn, 'rel="alternate" hreflang="pt-BR"'), `${SITE}/perfil`);
  assert.equal(link(perfilEn, 'rel="alternate" hreflang="en"'), `${SITE}/en/perfil`);

  const casePt = page('case-study/chat-platform');
  assert.match(casePt, /<html lang="pt-BR"/);
  assert.equal(link(casePt, 'rel="canonical"'), `${SITE}/case-study/chat-platform`);
  assert.equal(meta(casePt, 'og:url'), `${SITE}/case-study/chat-platform`);
});

test('profile and services metadata in the static HTML match the locale used at runtime', async () => {
  for (const [locale, route, key] of [
    ['pt', 'perfil', 'profile'], ['en', 'en/perfil', 'profile'],
    ['pt', 'servicos', 'services'], ['en', 'en/servicos', 'services'],
  ]) {
    const { title, description } = (await loadLocale(locale)).seo.pages[key];
    const html = page(route);
    assert.equal(unescape(html.match(/<title>([^<]*)<\/title>/)[1]), title, `${route} title`);
    assert.equal(unescape(meta(html, 'description')), description, `${route} description`);
    assert.equal(unescape(meta(html, 'og:description')), description, `${route} og:description`);
  }
});

test('sitemap lists every localized page once', () => {
  const sitemap = readFileSync(join(out, 'sitemap.xml'), 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]).sort();
  assert.deepEqual(urls, [
    `${SITE}/`,
    `${SITE}/case-study/chat-platform`,
    `${SITE}/case-study/public-data-monitor`,
    `${SITE}/en`,
    `${SITE}/en/case-study/chat-platform`,
    `${SITE}/en/case-study/public-data-monitor`,
    `${SITE}/en/perfil`,
    `${SITE}/en/servicos`,
    `${SITE}/perfil`,
    `${SITE}/servicos`,
  ]);
});

test('services page is canonical on its own URL in both languages', () => {
  const servicesEn = page('en/servicos');
  assert.match(servicesEn, /<html lang="en"/);
  assert.equal(link(servicesEn, 'rel="canonical"'), `${SITE}/en/servicos`);
  assert.equal(link(servicesEn, 'rel="alternate" hreflang="pt-BR"'), `${SITE}/servicos`);
});
