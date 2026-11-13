import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { loadLocale } from './load-locale.mjs';

// Usage: node scripts/build-pages.mjs [outDir]. Reads <outDir>/index.html as the template.
const outDir = process.argv[2] || 'dist';
const site = 'https://portfolio-oiagocunha.vercel.app';
const escape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const template = readFileSync(join(outDir, 'index.html'), 'utf8');
const urls = [];
for (const locale of ['pt', 'en']) {
  const content = await loadLocale(locale);
  const pages = {
    '/': content.seo.pages.home,
    '/perfil': content.seo.pages.profile,
    '/servicos': content.seo.pages.services,
    '/case-study/chat-platform': content.seo.pages.chatCaseStudy,
    '/case-study/public-data-monitor': content.seo.pages.publicDataCaseStudy,
  };
  for (const [path, meta] of Object.entries(pages)) {
    const route = (locale === 'en' ? '/en' : '') + (path === '/' ? '' : path);
    const canonical = site + (route || '/');
    let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(meta.title)}</title>`)
      .replace(/<html\s+lang="[^"]*"/, `<html lang="${locale === 'pt' ? 'pt-BR' : 'en'}"`);
    for (const [key,value] of Object.entries({description:meta.description,'og:title':meta.title,'og:description':meta.description,'og:url':canonical,'twitter:title':meta.title,'twitter:description':meta.description,'og:locale':locale === 'pt' ? 'pt_BR' : 'en_US'})) {
      html=html.replace(new RegExp(`(<meta (?:name|property)="${key}"\\s+content=")[^"]*(")`), (_,a,b)=>a+escape(value)+b);
    }
    html=html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`);
    for(const [language,prefix] of [['pt-BR',''],['en','/en'],['x-default','']]) {
      const href=site+prefix+(path==='/'?(prefix?'':'/'):path);
      html=html.replace(new RegExp(`(<link rel="alternate" hreflang="${language}" href=")[^"]*(")`),`$1${href}$2`);
    }
    html=html.replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript><h1>${escape(meta.title)}</h1><p>${escape(meta.description)}</p><a href="mailto:dev.iagocunha@gmail.com">dev.iagocunha@gmail.com</a></noscript>`);
    const directory=join(outDir, route);
    mkdirSync(directory,{recursive:true});
    writeFileSync(join(directory, 'index.html'),html);
    urls.push(canonical);
  }
}
writeFileSync(join(outDir, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.map(url=>`<url><loc>${url}</loc></url>`).join('')+'</urlset>');
console.log(`Generated metadata and sitemap for ${urls.length} localized pages.`);
