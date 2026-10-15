/**
 * Prospecção Comercial V4 — Discovery via Search (não OSM/Maps)
 * node n8n/build-workflow.cjs
 */
const fs = require("fs");
const path = require("path");

const SPREADSHEET_ID = "1Z5FHZeHmnLvsayFMbE8nQkl_7Z0wzErlFm0kyWRqvm0";

const HEADERS = [
  "DATA DA DESCOBERTA","EMPRESA","CATEGORIA","CIDADE","ENDEREÇO","TELEFONE","WHATSAPP",
  "GOOGLE RATING","GOOGLE AVALIAÇÕES","GOOGLE MAPS","WEBSITE","SITE STATUS","SITE REASON",
  "MOBILE STATUS","OPORTUNIDADES","OPORTUNIDADE","SERVIÇO SUGERIDO","CONFIANÇA IA",
  "EVIDÊNCIA","INFERÊNCIA","RESUMO","SCORE","PRIORIDADE","STATUS COMERCIAL",
  "ÚLTIMO CONTATO","PRÓXIMA AÇÃO","OBSERVAÇÕES","PLACE_ID",
  "EMAIL","WHATSAPP URL","INSTAGRAM","ORIGEM","SINAL AUTOMAÇÃO",
  "DATA PRÓXIMA AÇÃO","RESPOSTA","REUNIÃO","PROPOSTA","MOTIVO PERDA",
];

const CODE = {};

CODE.montarBuscas = `const cfg = $('Configuração').first().json;
const nicho = String(cfg.NICHO || '').trim();
const cidade = String(cfg.CIDADE || '').trim();
const q1 = '"' + nicho + '" "' + cidade + '"';
const q2 = '"' + nicho + '" "' + cidade + '" -facebook -instagram -youtube';
const provider = String(cfg.SEARCH_PROVIDER || 'duckduckgo').toLowerCase();

return [{
  pairedItem: { item: 0 },
  json: {
    ...cfg,
    queries: [q1, q2],
    search_provider: provider,
  },
}];`;

CODE.buscarDuckDuckGo = `const cfg = $('Montar Buscas').first().json;
const queries = cfg.queries || [];
const all = [];

async function searchOne(q) {
  const html = await this.helpers.httpRequest({
    method: 'POST',
    url: 'https://html.duckduckgo.com/html/',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Mozilla/5.0 (compatible; ProspectingN8n/4.0)',
    },
    body: 'q=' + encodeURIComponent(q),
    timeout: 30000,
    json: false,
  });
  const text = typeof html === 'string' ? html : String(html);
  const results = [];
  const re = /<a[^>]*class="result__a"[^>]*href="([^"]+)"[^>]*>([\\s\\S]*?)<\\/a>/gi;
  let m;
  while ((m = re.exec(text)) !== null) {
    let url = m[1];
    // duckduckgo redirect
    const uddg = url.match(/uddg=([^&]+)/);
    if (uddg) {
      try { url = decodeURIComponent(uddg[1]); } catch (e) {}
    }
    const title = m[2].replace(/<[^>]+>/g, '').replace(/\\s+/g, ' ').trim();
    if (!url || !title) continue;
    if (!/^https?:\\/\\//i.test(url)) continue;
    results.push({ title, url, query: q });
  }
  return results;
}

for (const q of queries) {
  try {
    const chunk = await searchOne.call(this, q);
    all.push(...chunk);
  } catch (e) {
    // continua com as outras queries
  }
  await new Promise((r) => setTimeout(r, 600));
}

if (all.length === 0) {
  throw new Error('Busca não retornou resultados. Tente outro NICHO/CIDADE ou SEARCH_PROVIDER=csv.');
}

return [{
  pairedItem: { item: 0 },
  json: {
    ...cfg,
    raw_results: all,
    raw_count: all.length,
  },
}];`;

CODE.filtrarENormalizar = `const cfg = $('Configuração').first().json;
const input = items[0].json;
const raw = Array.isArray(input.raw_results) ? input.raw_results : [];
const quantity = Math.min(Number(cfg.QUANTIDADE) || 20, 40);

const BLOCK_HOST = [
  'facebook.com','instagram.com','youtube.com','tiktok.com','twitter.com','x.com',
  'linkedin.com','wikipedia.org','google.com','goo.gl','maps.app.goo.gl',
  'apple.com','play.google.com','booking.com','tripadvisor.','reclameaqui.',
  'olx.com','mercadolivre.','amazon.','gov.br','datasus.gov','cnes','saude.gov',
  'jus.br','mp.br','edu.br','org.br/portal',
];

const BLOCK_TITLE = [
  /prefeitura/i, /secretaria de saúde/i, /ministério/i, /hospital universit/i,
  /sus\\b/i, /cnes/i, /wikipedia/i, /vagas\\b/i, /currículo/i, /curriculo/i,
  /glassdoor/i, /indeed/i, /doctoralia/i, /boaconsulta/i,
];

const FRANCHISE = [
  /sorridents/i, /odontocompany/i, /odontoclinic/i, /uniodonto/i,
  /oraldents/i, /neodent/i, /odontoprev/i, /dentaluni/i,
];

function hostOf(u) {
  try { return new URL(u).hostname.toLowerCase().replace(/^www\\./,''); } catch (e) { return ''; }
}

function isBlocked(url, title) {
  const h = hostOf(url);
  if (!h) return 'url_invalida';
  if (BLOCK_HOST.some((b) => h.includes(b))) return 'host_bloqueado:' + h;
  if (BLOCK_TITLE.some((re) => re.test(title))) return 'titulo_bloqueado';
  if (/\\/maps\\//i.test(url)) return 'maps_link';
  return null;
}

function companyName(title, host) {
  let t = title
    .replace(/\\s*[\\|\\-–—:].*$/, '')
    .replace(/\\s+/g, ' ')
    .trim();
  if (t.length < 3) t = host.split('.')[0] || title;
  return t.slice(0, 120);
}

function asTextPhone(p) {
  if (!p) return null;
  const s = String(p).trim();
  if (!s || s === 'não encontrado') return null;
  // evita #ERROR! no Excel
  if (/^[+=]/.test(s)) return "'" + s;
  return s;
}

const seenHost = new Set();
const out = [];

for (const r of raw) {
  const block = isBlocked(r.url, r.title || '');
  if (block) continue;
  const host = hostOf(r.url);
  if (seenHost.has(host)) continue;
  seenHost.add(host);

  const nome = companyName(r.title || host, host);
  const franchise = FRANCHISE.some((re) => re.test(nome) || re.test(host) || re.test(r.title || ''));
  const isGoogleSites = host.endsWith('sites.google.com') || host.includes('googleusercontent');

  out.push({
    pairedItem: { item: 0 },
    json: {
      place_id: 'web/' + host,
      nome,
      categoria: cfg.NICHO,
      endereco: null,
      cidade: cfg.CIDADE,
      telefone: null,
      telefone_normalizado: null,
      website: r.url.split('#')[0],
      dominio: host,
      rating: null,
      avaliacoes: null,
      google_maps: null,
      business_status: 'OPERATIONAL',
      whatsapp_google: 'não encontrado',
      nicho: cfg.NICHO,
      sheet_name: cfg.SHEET_NAME,
      data_descoberta: new Date().toISOString().slice(0, 10),
      fonte: 'search',
      search_title: r.title,
      search_query: r.query,
      flags: {
        franchise: !!franchise,
        google_sites: !!isGoogleSites,
        apparently_private: !franchise && !isGoogleSites,
      },
    },
  });
  if (out.length >= quantity) break;
}

if (out.length === 0) {
  throw new Error('Nenhuma empresa passou no filtro. Ajuste NICHO/CIDADE ou use DISCOVERY_MODE=csv.');
}
return out;`;

CODE.normalizeCsv = `const cfg = $('Configuração').first().json;
const rows = items.map((i) => i.json).filter((r) => r && (r.EMPRESA || r.Empresa || r.nome || r.name || r.WEBSITE || r.website));
const quantity = Math.min(Number(cfg.QUANTIDADE) || 20, 40);

function hostOf(u) {
  try {
    const withProto = /^https?:\\/\\//i.test(u) ? u : ('https://' + u);
    return new URL(withProto).hostname.toLowerCase().replace(/^www\\./,'');
  } catch (e) { return ''; }
}

const out = [];
for (const r of rows.slice(0, quantity)) {
  const rawWebsite = String(r.WEBSITE || r.website || r.site || '').trim();
  const website = rawWebsite ? (/^https?:/.test(rawWebsite) ? rawWebsite : 'https://' + rawWebsite) : null;
  const nome = String(r.EMPRESA || r.Empresa || r.nome || r.name || hostOf(website) || '').trim();
  if (!nome && !website) continue;
  const host = (website ? hostOf(website) : '') || ('csv-' + nome.toLowerCase().replace(/\\s+/g,'-').slice(0,40));
  out.push({
    pairedItem: { item: 0 },
    json: {
      place_id: r.PLACE_ID || ('csv/' + host),
      nome,
      categoria: r.CATEGORIA || r.categoria || cfg.NICHO,
      endereco: r.ENDEREÇO || r.endereco || null,
      cidade: r.CIDADE || r.cidade || cfg.CIDADE,
      telefone: r.TELEFONE || r.telefone || null,
      telefone_normalizado: null,
      email: r.EMAIL || null,
      whatsapp_url: r['WHATSAPP URL'] || null,
      instagram: r.INSTAGRAM || null,
      website,
      dominio: host,
      rating: null,
      avaliacoes: null,
      google_maps: null,
      business_status: 'OPERATIONAL',
      whatsapp_google: 'não encontrado',
      nicho: cfg.NICHO,
      sheet_name: cfg.SHEET_NAME,
      data_descoberta: new Date().toISOString().slice(0, 10),
      fonte: 'csv',
      flags: { franchise: false, google_sites: false, apparently_private: true },
    },
  });
}
if (!out.length) throw new Error('Aba Entrada vazia.');
return out;`;

CODE.dedupe = `let companies = [];
try {
  companies = $('Filtrar e Normalizar').all().map((i) => i.json).filter((j) => j && j.place_id);
} catch (e) {}
if (!companies.length) {
  try {
    companies = $('Normalizar CSV').all().map((i) => i.json).filter((j) => j && j.place_id);
  } catch (e) {}
}

let existingRows = [];
try {
  existingRows = $('Ler Planilha Existente').all().map((i) => i.json)
    .filter((r) => r && (r.PLACE_ID || r.place_id || r.EMPRESA));
} catch (e) {}

const existing = new Set();
for (const row of existingRows) {
  const pid = String(row.PLACE_ID || row.place_id || '');
  if (pid) existing.add(pid);
  const w = String(row.WEBSITE || '');
  try {
    if (w && w !== 'não encontrado') existing.add(new URL(w).hostname.replace(/^www\\./,''));
  } catch (e) {}
}

const seen = new Set();
const unique = [];
for (const c of companies) {
  const keys = [c.place_id, c.dominio].filter(Boolean);
  if (keys.some((k) => seen.has(k) || existing.has(k))) continue;
  keys.forEach((k) => seen.add(k));
  unique.push(c);
}

if (!unique.length) {
  return [{ pairedItem: { item: 0 }, json: { _empty: true, message: 'Nenhuma empresa nova.' } }];
}
return unique.map((c) => ({ pairedItem: { item: 0 }, json: { ...c, dedupe_ok: true } }));`;

CODE.analyzeWebsite = `const company = $('Tem Website?').item.json;
const resp = $input.item.json;

const statusCode = resp.statusCode || resp.status || null;
let body = '';
if (typeof resp.body === 'string') body = resp.body;
else if (typeof resp.data === 'string') body = resp.data;

const finalUrl = resp.url || company.website || '';
const https = String(finalUrl).startsWith('https://');
const ok = statusCode >= 200 && statusCode < 400 && body && body.length > 50;

if (!ok) {
  return {
    pairedItem: { item: $itemIndex },
    json: {
      ...company,
      site_status: company.website ? 'UNAVAILABLE' : 'INEXISTENT',
      site_reason: company.website
        ? ('URL encontrada na busca, mas inacessível agora (' + (statusCode || 'erro') + ').')
        : 'Website não encontrado.',
      https: null,
      mobile_status: 'UNKNOWN',
      whatsapp_found: 'unknown',
      instagram: null,
      facebook: null,
      email: null,
      site_phone: null,
      opportunities: company.website ? [] : ['NO_WEBSITE'],
      has_cta: null,
      has_form: null,
      has_booking: null,
      evidence: [
        company.website ? ('URL na busca: ' + company.website) : 'Sem URL na busca.',
        company.website ? ('HTTP status: ' + (statusCode || 'desconhecido')) : 'Sem site para analisar.',
      ],
      inference: [
        company.website
          ? 'Possível problema temporário de acesso; não concluir que o site é ruim.'
          : 'Possível oportunidade de presença digital — validar manualmente se já existe site fora da busca.',
      ],
    },
  };
}

const html = body.slice(0, 1500000);
const htmlLower = html.toLowerCase();
const hrefs = [];
const hrefRe = /href=["']([^"']+)["']/gi;
let hm;
while ((hm = hrefRe.exec(html)) !== null) hrefs.push(hm[1]);

const whatsappLinks = hrefs.filter((h) => /wa\\.me\\//i.test(h) || /api\\.whatsapp\\.com/i.test(h) || /whatsapp\\.com\\/send/i.test(h));
const instagramLinks = hrefs.filter((h) => /instagram\\.com\\//i.test(h));
const emails = [...new Set((html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g) || []))].slice(0, 5);
const phones = [...new Set([
  ...hrefs.filter((h) => /^tel:/i.test(h)).map((h) => h.replace(/^tel:/i, '')),
  ...(html.match(/(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?\\s?)?(?:9\\s?\\d{4}|\\d{4})[-\\s]?\\d{4}/g) || []),
])].slice(0, 5);

const viewport = /<meta[^>]*name=["']viewport["']/i.test(html);
const hasForm = /<form[\\s>]/i.test(html);
const text = htmlLower.replace(/<[^>]+>/g, ' ');
const ctaWords = ['agendar','agende','marcar consulta','orçamento','orcamento','fale conosco','whatsapp','solicitar','saiba mais'];
const hasCta = ctaWords.some((w) => text.includes(w)) || whatsappLinks.length > 0;
const hasBooking = ['agendamento','agendar','calendly','doctoralia','trinks'].some((b) => text.includes(b));
const thin = html.length < 5000 && !hasCta && !hasForm;
const oldSignals = !viewport || thin || /frameset|guestbook|under construction/i.test(htmlLower);

let scoreSite = 0;
if (https) scoreSite += 2;
if (viewport) scoreSite += 2;
if (hasCta) scoreSite += 2;
if (hasForm || hasBooking) scoreSite += 1;
if (whatsappLinks.length) scoreSite += 1;
if (emails.length || phones.length) scoreSite += 1;
if (oldSignals) scoreSite -= 2;

const flags = company.flags || {};
const isGoogleSites = !!flags.google_sites || /sites\\.google\\.com/i.test(finalUrl);

// Google Sites / página pessoal ≠ site comercial maduro
if (isGoogleSites) scoreSite = Math.min(scoreSite, 3);

let site_status = 'POOR';
if (scoreSite >= 6) site_status = 'GOOD';
else if (scoreSite >= 3) site_status = 'FAIR';
if (isGoogleSites && site_status === 'GOOD') site_status = 'FAIR';

const opportunities = [];
const evidence = [
  'URL acessível: ' + finalUrl,
  'HTTPS: ' + (https ? 'sim' : 'não'),
  'Viewport: ' + (viewport ? 'sim' : 'não'),
  'WhatsApp no HTML: ' + (whatsappLinks.length ? 'sim' : 'não'),
  'Formulário: ' + (hasForm ? 'sim' : 'não'),
  'CTA textual: ' + (hasCta ? 'sim' : 'não'),
];
if (isGoogleSites) evidence.push('Hospedagem: Google Sites (presença fraca, não site comercial).');

const inference = [];

// Oportunidades só com evidência — NÃO marcar automação só por ausência de form em site GOOD
if (site_status === 'POOR' || oldSignals || isGoogleSites) {
  opportunities.push('OUTDATED_WEBSITE');
  inference.push(isGoogleSites
    ? 'Presença em Google Sites; possível oportunidade de site próprio profissional.'
    : 'Site com sinais de baixa qualidade; possível oportunidade de refazer/melhorar presença digital.');
}
if (!viewport) {
  opportunities.push('POOR_MOBILE');
  evidence.push('Meta viewport ausente.');
}
if (!hasCta && site_status !== 'GOOD') {
  opportunities.push('NO_CLEAR_CTA');
  inference.push('CTA pouco evidente; possível oportunidade de melhorar conversão.');
}
if (whatsappLinks.length === 0 && site_status !== 'GOOD') {
  opportunities.push('NO_WHATSAPP');
}
// Automação: WhatsApp + pouco fluxo — NÃO em Google Sites (sinal fraco demais)
if (!isGoogleSites && whatsappLinks.length > 0 && !hasForm && !hasBooking && /whatsapp/i.test(text) && site_status !== 'GOOD') {
  opportunities.push('AUTOMATION_POTENTIAL');
  inference.push('Há WhatsApp e pouco fluxo estruturado; possível oportunidade de automação — validar volume de mensagens com o cliente.');
}

let site_phone = phones[0] || null;
if (site_phone && /^[+=]/.test(String(site_phone))) site_phone = "'" + site_phone;

return {
  pairedItem: { item: $itemIndex },
  json: {
    ...company,
    site_status,
    site_reason: 'Análise técnica do HTML. Score interno site=' + scoreSite + '.',
    https,
    mobile_status: viewport ? 'UNKNOWN' : 'POOR',
    whatsapp_found: whatsappLinks.length ? 'true' : 'false',
    whatsapp_url: whatsappLinks[0] || company.whatsapp_url || null,
    instagram: instagramLinks[0] || null,
    facebook: null,
    email: emails[0] || null,
    site_phone,
    telefone: company.telefone || site_phone,
    opportunities,
    has_cta: hasCta,
    has_form: hasForm,
    has_booking: hasBooking,
    evidence,
    inference: inference.length ? inference : ['Sem inferência comercial forte além das evidências acima.'],
  },
};`;

CODE.noWebsite = `const company = $input.item.json;
return {
  pairedItem: { item: $itemIndex },
  json: {
    ...company,
    site_status: 'INEXISTENT',
    site_reason: 'Nenhuma URL de site próprio na descoberta.',
    https: null,
    mobile_status: 'INEXISTENT',
    whatsapp_found: company.whatsapp_url ? 'true' : 'unknown',
    instagram: company.instagram || null,
    facebook: null,
    email: company.email || null,
    site_phone: null,
    opportunities: ['NO_WEBSITE'],
    has_cta: null,
    has_form: null,
    has_booking: null,
    evidence: ['Nenhuma URL de site próprio informada na descoberta; existência deve ser validada.'],
    inference: ['Possível oportunidade de criação de presença digital — confirmar se a empresa já tem site com outro domínio.'],
  },
};`;

CODE.scoreFinal = `const d = $input.item.json;
const cfg = $('Configuração').first().json;
const aiThreshold = Number.isFinite(Number(cfg.AI_MIN_SCORE)) ? Number(cfg.AI_MIN_SCORE) : 45;
const aiEnabled = cfg.AI_ENABLED === true || cfg.AI_ENABLED === 'true';
const flags = d.flags || {};
const ops = Array.isArray(d.opportunities) ? d.opportunities : [];
const evidence = Array.isArray(d.evidence) ? d.evidence : [];
const inference = Array.isArray(d.inference) ? d.inference : [];

function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }

let score = 0;

// Empresa claramente privada/comercial
if (flags.apparently_private) score += 20;
if (flags.franchise) score -= 20;
if (flags.google_sites) score += 0; // neutro: não é lixo, não é prêmio

// Site
if (d.site_status === 'INEXISTENT') score += 25;
else if (d.site_status === 'POOR' || ops.includes('OUTDATED_WEBSITE')) score += 20;
else if (d.site_status === 'FAIR') score += 5;
else if (d.site_status === 'GOOD') score -= 25;
else if (d.site_status === 'UNAVAILABLE') score += 0; // não punir nem premiar

if (ops.includes('NO_CLEAR_CTA')) score += 10;
if (ops.includes('NO_WHATSAPP')) score += 5;
if (ops.includes('AUTOMATION_POTENTIAL')) score += 15;
if (ops.includes('POOR_MOBILE')) score += 8;
if (d.instagram) score += 5;

// Dados insuficientes
if (!d.website && !d.telefone && !d.nome) score -= 30;

// Domínios públicos que passaram no filtro por engano
const host = String(d.dominio || '');
if (/gov\\.br|datasus|saude\\.gov/.test(host)) score -= 50;

score = clamp(Math.round(score), 0, 100);

function priority(s) {
  if (s >= 65) return '🟢 MUITO ALTA';
  if (s >= 55) return '🔵 ALTA';
  if (s >= 45) return '🟡 MÉDIA';
  if (s >= 40) return '🟠 BAIXA';
  return '🔴 DESCARTAR';
}

function suggestService() {
  if (ops.includes('NO_WEBSITE') || d.site_status === 'INEXISTENT') return 'SITE';
  if (ops.includes('OUTDATED_WEBSITE') || d.site_status === 'POOR') return 'SITE';
  if (ops.includes('AUTOMATION_POTENTIAL')) return 'AUTOMACAO';
  if (ops.includes('NO_CLEAR_CTA')) return 'LANDING_PAGE';
  if (ops.includes('NO_WHATSAPP')) return 'WHATSAPP';
  if (score < 40) return 'NENHUM';
  return 'DIAGNOSTICO';
}

const opportunity = (() => {
  if (ops.includes('NO_WEBSITE')) {
    return 'EVIDÊNCIA: site próprio não encontrado na busca. INFERÊNCIA: possível oportunidade de presença digital (validar).';
  }
  if (ops.includes('OUTDATED_WEBSITE')) {
    return 'EVIDÊNCIA: site com sinais técnicos fracos. INFERÊNCIA: possível oportunidade de melhoria do site.';
  }
  if (ops.includes('AUTOMATION_POTENTIAL')) {
    return 'EVIDÊNCIA: WhatsApp presente e pouco fluxo estruturado no site. INFERÊNCIA: possível automação de atendimento — confirmar dor real.';
  }
  if (d.site_status === 'GOOD' && score < 50) {
    return 'EVIDÊNCIA: site aparentemente adequado. INFERÊNCIA: baixa prioridade de abordagem só por “melhoria digital”.';
  }
  return 'Sinais mistos; revisar manualmente antes de abordar.';
})();

let telefone = d.telefone || d.site_phone || 'não encontrado';
if (telefone !== 'não encontrado' && /^[+=]/.test(String(telefone))) telefone = "'" + telefone;

const hasContact = Boolean(d.whatsapp_url || d.email || d.telefone || d.site_phone || d.instagram);
const qualified = score >= aiThreshold && hasContact;
const needsAi = aiEnabled && qualified;

return {
  pairedItem: { item: $itemIndex },
  json: {
    'DATA DA DESCOBERTA': String(d.data_descoberta || new Date().toISOString().slice(0, 10)),
    EMPRESA: d.nome,
    CATEGORIA: d.categoria || d.nicho,
    CIDADE: d.cidade,
    'ENDEREÇO': d.endereco || 'não encontrado',
    TELEFONE: telefone,
    WHATSAPP: d.whatsapp_found === 'true' ? 'sim' : (d.whatsapp_found === 'false' ? 'não' : 'não encontrado'),
    'GOOGLE RATING': 'não encontrado',
    'GOOGLE AVALIAÇÕES': 'não encontrado',
    'GOOGLE MAPS': d.google_maps || 'não encontrado',
    WEBSITE: d.website || 'não encontrado',
    'SITE STATUS': d.site_status,
    'SITE REASON': d.site_reason || '',
    'MOBILE STATUS': d.mobile_status || 'UNKNOWN',
    OPORTUNIDADES: ops.join(', '),
    OPORTUNIDADE: opportunity,
    'SERVIÇO SUGERIDO': suggestService(),
    'CONFIANÇA IA': 'pendente',
    'EVIDÊNCIA': evidence.join(' | '),
    'INFERÊNCIA': inference.join(' | '),
    RESUMO: opportunity,
    SCORE: score,
    PRIORIDADE: priority(score),
    'STATUS COMERCIAL': 'NOVO',
    'ÚLTIMO CONTATO': '',
    'PRÓXIMA AÇÃO': qualified ? 'Validar evidência e preparar abordagem individual' : (hasContact ? 'Revisar aderência da oferta' : 'Localizar canal de contato antes de abordar'),
    EMAIL: d.email || '',
    'WHATSAPP URL': d.whatsapp_url || '',
    INSTAGRAM: d.instagram || '',
    ORIGEM: d.fonte || '',
    'SINAL AUTOMAÇÃO': ops.includes('AUTOMATION_POTENTIAL') ? 'Hipótese: confirmar volume e processo com o cliente' : 'Não avaliado; qualidade do site não demonstra eficiência interna',
    'DATA PRÓXIMA AÇÃO': '',
    RESPOSTA: '',
    REUNIÃO: '',
    PROPOSTA: '',
    'MOTIVO PERDA': '',
    OBSERVAÇÕES: flags.franchise ? 'Possível franquia/rede' : '',
    PLACE_ID: d.place_id,
    _needs_ai: needsAi,
    _ai_payload: needsAi ? {
      empresa: d.nome,
      cidade: d.cidade,
      website: d.website,
      site_status: d.site_status,
      opportunities: ops,
      evidence,
      inference,
      score,
    } : null,
  },
};`;

CODE.prepareAi = `const d = $input.item.json;
if (!d._needs_ai) {
  return {
    pairedItem: { item: $itemIndex },
    json: {
      ...d,
      'CONFIANÇA IA': 'desativada ou fora dos critérios de score/contato',
      skip_ai: true,
      ai_system: '',
      ai_user: '',
    },
  };
}

const system = 'Você analisa leads B2B. Use SÓ o JSON. Separe EVIDÊNCIA e INFERÊNCIA. Nunca diga que a empresa "precisa" de algo. Pergunta-guia: vale a pena abordar para site/automação/WhatsApp? JSON: {"opportunity":"","recommended_service":"SITE|LANDING_PAGE|AUTOMACAO|WHATSAPP|DIAGNOSTICO|NENHUM","confidence":0,"evidence":[],"inference":[],"summary":""}';

return {
  pairedItem: { item: $itemIndex },
  json: {
    ...d,
    skip_ai: false,
    ai_system: system,
    ai_user: JSON.stringify(d._ai_payload),
  },
};`;

CODE.semAi = `const d = $input.item.json;
const { _needs_ai, _ai_payload, ...rest } = d;
return {
  pairedItem: { item: $itemIndex },
  json: {
    ...rest,
    'CONFIANÇA IA': 'desativada ou fora dos critérios de score/contato',
  },
};`;

CODE.mergeAi = `const prepared = $('Preparar Prompt IA').item.json;
const aiResp = $input.item.json;

let ai = null;
try {
  const content = aiResp.choices && aiResp.choices[0] && aiResp.choices[0].message && aiResp.choices[0].message.content;
  if (content) {
    const cleaned = content.trim().replace(/^\`\`\`json\\s*/i,'').replace(/^\`\`\`\\s*/i,'').replace(/\\s*\`\`\`$/i,'');
    ai = JSON.parse(cleaned);
  }
} catch (e) { ai = null; }

const { _needs_ai, _ai_payload, ai_system, ai_user, skip_ai, ...base } = prepared;

if (!ai) {
  return {
    pairedItem: { item: $itemIndex },
    json: { ...base, 'CONFIANÇA IA': 'falha/fallback' },
  };
}

return {
  pairedItem: { item: $itemIndex },
  json: {
    ...base,
    OPORTUNIDADE: ai.opportunity || base.OPORTUNIDADE,
    'SERVIÇO SUGERIDO': ai.recommended_service || base['SERVIÇO SUGERIDO'],
    'CONFIANÇA IA': ai.confidence != null ? ai.confidence : 'não encontrado',
    'EVIDÊNCIA': Array.isArray(ai.evidence) ? ai.evidence.join(' | ') : base['EVIDÊNCIA'],
    'INFERÊNCIA': Array.isArray(ai.inference) ? ai.inference.join(' | ') : base['INFERÊNCIA'],
    RESUMO: ai.summary || base.RESUMO,
  },
};`;

CODE.resumo = `const rows = items.map((i) => i.json).filter((r) => r.EMPRESA);
rows.sort((a, b) => Number(b.SCORE || 0) - Number(a.SCORE || 0));
return [{
  pairedItem: { item: 0 },
  json: {
    processados: rows.length,
    acima_corte: rows.filter((r) => Number(r.SCORE) >= Number($('Configuração').first().json.AI_MIN_SCORE || 45)).length,
    top5: rows.slice(0, 5).map((r) => ({ empresa: r.EMPRESA, score: r.SCORE, prioridade: r.PRIORIDADE, site: r['SITE STATUS'] })),
    planilha: 'https://docs.google.com/spreadsheets/d/' + $('Configuração').first().json.SPREADSHEET_ID,
  },
}];`;

// syntax check (skip async search)
for (const [name, code] of Object.entries(CODE)) {
  if (name === "buscarDuckDuckGo") continue;
  try { new Function(code); }
  catch (e) { console.error("FAIL", name, e.message); process.exit(1); }
}

function sheetsCred() {
  return { googleSheetsOAuth2Api: { id: "REPLACE_ME_SHEETS", name: "Google Sheets account" } };
}
function openaiCred() {
  return { httpHeaderAuth: { id: "REPLACE_ME_OPENAI", name: "OpenAI API" } };
}

const workflow = {
  name: "Prospecção Comercial V4 — Search Discovery",
  active: false,
  settings: { executionOrder: "v1" },
  versionId: "4.0.0-search",
  meta: { templateCredsSetupCompleted: false },
  tags: [{ name: "prospeccao" }],
  nodes: [
    {
      id: "note",
      name: "📌 LEIA-ME",
      type: "n8n-nodes-base.stickyNote",
      typeVersion: 1,
      position: [-560, 160],
      parameters: {
        width: 460,
        height: 520,
        color: 5,
        content: `## V4 — Search, não Maps/OSM

Objetivo: **leads que valem abordar**, não volume.

1. Credencial Google Sheets nos nodes Sheets + Escrever Cabeçalhos
2. Aba **Leads**
3. (Opcional) OpenAI Header Auth — IA opcional: AI_ENABLED=true e AI_MIN_SCORE=45
4. DISCOVERY_MODE:
   - \`search\` = DuckDuckGo (grátis, sem cartão)
   - \`csv\` = aba Entrada

Filtro remove: gov, CNES, Facebook, Instagram, Wikipedia, etc.

Score responde: *vale a pena eu abordar?*`,
      },
    },
    {
      id: "trigger",
      name: "Manual Trigger",
      type: "n8n-nodes-base.manualTrigger",
      typeVersion: 1,
      position: [0, 400],
      parameters: {},
    },
    {
      id: "config",
      name: "Configuração",
      type: "n8n-nodes-base.set",
      typeVersion: 3.4,
      position: [220, 400],
      parameters: {
        mode: "manual",
        assignments: {
          assignments: [
            { id: "1", name: "DISCOVERY_MODE", value: "search", type: "string" },
            { id: "2", name: "SEARCH_PROVIDER", value: "duckduckgo", type: "string" },
            { id: "3", name: "NICHO", value: "clínica odontológica", type: "string" },
            { id: "4", name: "CIDADE", value: "Fortaleza", type: "string" },
            { id: "5", name: "QUANTIDADE", value: 20, type: "number" },
            { id: "6", name: "SPREADSHEET_ID", value: SPREADSHEET_ID, type: "string" },
            { id: "7", name: "SHEET_NAME", value: "Leads", type: "string" },
            { id: "8", name: "CSV_SHEET_NAME", value: "Entrada", type: "string" },
            { id: "9", name: "AI_MODEL", value: "gpt-4o-mini", type: "string" },
            { id: "10", name: "AI_MIN_SCORE", value: 45, type: "number" },
            { id: "11", name: "AI_ENABLED", value: false, type: "boolean" },
          ],
        },
        options: {},
      },
    },
    {
      id: "if-mode",
      name: "Modo Discovery?",
      type: "n8n-nodes-base.if",
      typeVersion: 2.2,
      position: [440, 400],
      parameters: {
        conditions: {
          options: { caseSensitive: false, leftValue: "", typeValidation: "loose" },
          conditions: [{
            id: "c1",
            leftValue: "={{ $json.DISCOVERY_MODE }}",
            rightValue: "csv",
            operator: { type: "string", operation: "notEquals" },
          }],
          combinator: "and",
        },
        options: {},
      },
    },
    {
      id: "montar",
      name: "Montar Buscas",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [680, 260],
      parameters: { mode: "runOnceForAllItems", language: "javaScript", jsCode: CODE.montarBuscas },
    },
    {
      id: "search",
      name: "Buscar DuckDuckGo",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [900, 260],
      parameters: { mode: "runOnceForAllItems", language: "javaScript", jsCode: CODE.buscarDuckDuckGo },
    },
    {
      id: "filtrar",
      name: "Filtrar e Normalizar",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [1120, 260],
      parameters: { mode: "runOnceForAllItems", language: "javaScript", jsCode: CODE.filtrarENormalizar },
    },
    {
      id: "read-csv",
      name: "Ler Aba Entrada CSV",
      type: "n8n-nodes-base.googleSheets",
      typeVersion: 4.5,
      position: [680, 560],
      credentials: sheetsCred(),
      continueOnFail: true,
      onError: "continueRegularOutput",
      parameters: {
        authentication: "oAuth2",
        resource: "sheet",
        operation: "read",
        documentId: { __rl: true, mode: "id", value: "={{ $('Configuração').first().json.SPREADSHEET_ID }}" },
        sheetName: { __rl: true, mode: "name", value: "={{ $('Configuração').first().json.CSV_SHEET_NAME }}" },
        options: {},
      },
    },
    {
      id: "norm-csv",
      name: "Normalizar CSV",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [900, 560],
      parameters: { mode: "runOnceForAllItems", language: "javaScript", jsCode: CODE.normalizeCsv },
    },
    {
      id: "headers",
      name: "Escrever Cabeçalhos",
      type: "n8n-nodes-base.httpRequest",
      typeVersion: 4.2,
      position: [440, 700],
      credentials: sheetsCred(),
      onError: "continueRegularOutput",
      parameters: {
        method: "PUT",
        url: "=https://sheets.googleapis.com/v4/spreadsheets/{{ $('Configuração').first().json.SPREADSHEET_ID }}/values/{{ encodeURIComponent($('Configuração').first().json.SHEET_NAME + '!A1') }}?valueInputOption=RAW",
        authentication: "predefinedCredentialType",
        nodeCredentialType: "googleSheetsOAuth2Api",
        sendBody: true,
        specifyBody: "json",
        jsonBody: JSON.stringify({ values: [HEADERS] }),
        options: { timeout: 30000, response: { response: { neverError: true } } },
      },
    },
    {
      id: "read-leads",
      name: "Ler Planilha Existente",
      type: "n8n-nodes-base.googleSheets",
      typeVersion: 4.5,
      position: [1120, 560],
      credentials: sheetsCred(),
      alwaysOutputData: true,
      parameters: {
        authentication: "oAuth2",
        resource: "sheet",
        operation: "read",
        documentId: { __rl: true, mode: "id", value: "={{ $('Configuração').first().json.SPREADSHEET_ID }}" },
        sheetName: { __rl: true, mode: "name", value: "={{ $('Configuração').first().json.SHEET_NAME }}" },
        options: {},
      },
    },
    {
      id: "merge",
      name: "Merge Discovery",
      type: "n8n-nodes-base.merge",
      typeVersion: 3,
      position: [1340, 400],
      parameters: { mode: "append" },
    },
    {
      id: "dedupe",
      name: "Deduplicar",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [1560, 400],
      parameters: { mode: "runOnceForAllItems", language: "javaScript", jsCode: CODE.dedupe },
    },
    {
      id: "filter",
      name: "Filtrar Vazios",
      type: "n8n-nodes-base.filter",
      typeVersion: 2.2,
      position: [1780, 400],
      parameters: {
        conditions: {
          options: { caseSensitive: true, leftValue: "", typeValidation: "loose" },
          conditions: [{
            id: "f1",
            leftValue: "={{ $json._empty }}",
            rightValue: true,
            operator: { type: "boolean", operation: "notEquals" },
          }],
          combinator: "and",
        },
        options: {},
      },
    },
    {
      id: "if-web",
      name: "Tem Website?",
      type: "n8n-nodes-base.if",
      typeVersion: 2.2,
      position: [2000, 400],
      parameters: {
        conditions: {
          options: { caseSensitive: true, leftValue: "", typeValidation: "loose" },
          conditions: [{
            id: "w1",
            leftValue: "={{ $json.website }}",
            rightValue: "",
            operator: { type: "string", operation: "notEmpty" },
          }],
          combinator: "and",
        },
        options: {},
      },
    },
    {
      id: "fetch-web",
      name: "Buscar Website",
      type: "n8n-nodes-base.httpRequest",
      typeVersion: 4.2,
      position: [2220, 280],
      onError: "continueRegularOutput",
      parameters: {
        method: "GET",
        url: "={{ $json.website }}",
        sendHeaders: true,
        headerParameters: {
          parameters: [
            { name: "User-Agent", value: "Mozilla/5.0 (compatible; ProspectingBot/4.0)" },
            { name: "Accept", value: "text/html" },
          ],
        },
        options: {
          timeout: 12000,
          redirect: { redirect: { followRedirects: true, maxRedirects: 5 } },
          response: { response: { fullResponse: true, responseFormat: "text", neverError: true } },
        },
      },
    },
    {
      id: "analyze",
      name: "Analisar Website",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [2440, 280],
      parameters: { mode: "runOnceForEachItem", language: "javaScript", jsCode: CODE.analyzeWebsite },
    },
    {
      id: "no-web",
      name: "Sem Website",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [2220, 540],
      parameters: { mode: "runOnceForEachItem", language: "javaScript", jsCode: CODE.noWebsite },
    },
    {
      id: "score",
      name: "Score Final",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [2660, 400],
      parameters: { mode: "runOnceForEachItem", language: "javaScript", jsCode: CODE.scoreFinal },
    },
    {
      id: "if-ai",
      name: "Qualificado e IA habilitada?",
      type: "n8n-nodes-base.if",
      typeVersion: 2.2,
      position: [2880, 400],
      parameters: {
        conditions: {
          options: { caseSensitive: true, leftValue: "", typeValidation: "loose" },
          conditions: [{
            id: "a1",
            leftValue: "={{ $json._needs_ai }}",
            rightValue: true,
            operator: { type: "boolean", operation: "equals" },
          }],
          combinator: "and",
        },
        options: {},
      },
    },
    {
      id: "prep-ai",
      name: "Preparar Prompt IA",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [3100, 280],
      parameters: { mode: "runOnceForEachItem", language: "javaScript", jsCode: CODE.prepareAi },
    },
    {
      id: "openai",
      name: "IA OpenAI",
      type: "n8n-nodes-base.httpRequest",
      typeVersion: 4.2,
      position: [3320, 280],
      credentials: openaiCred(),
      onError: "continueRegularOutput",
      parameters: {
        method: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        authentication: "genericCredentialType",
        genericAuthType: "httpHeaderAuth",
        sendHeaders: true,
        headerParameters: {
          parameters: [{ name: "Content-Type", value: "application/json" }],
        },
        sendBody: true,
        specifyBody: "json",
        jsonBody: `={
  "model": "{{ $('Configuração').first().json.AI_MODEL }}",
  "temperature": 0.2,
  "response_format": { "type": "json_object" },
  "messages": [
    { "role": "system", "content": {{ JSON.stringify($json.ai_system) }} },
    { "role": "user", "content": {{ JSON.stringify($json.ai_user) }} }
  ]
}`,
        options: {
          timeout: 30000,
          response: { response: { neverError: true } },
        },
      },
    },
    {
      id: "merge-ai",
      name: "Aplicar IA",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [3540, 280],
      parameters: { mode: "runOnceForEachItem", language: "javaScript", jsCode: CODE.mergeAi },
    },
    {
      id: "sem-ai",
      name: "Sem IA",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [3100, 540],
      parameters: { mode: "runOnceForEachItem", language: "javaScript", jsCode: CODE.semAi },
    },
    {
      id: "upsert",
      name: "Google Sheets Append",
      type: "n8n-nodes-base.googleSheets",
      typeVersion: 4.5,
      position: [3760, 400],
      credentials: sheetsCred(),
      parameters: {
        authentication: "oAuth2",
        resource: "sheet",
        operation: "append",
        documentId: { __rl: true, mode: "id", value: "={{ $('Configuração').first().json.SPREADSHEET_ID }}" },
        sheetName: { __rl: true, mode: "name", value: "={{ $('Configuração').first().json.SHEET_NAME }}" },
        columns: {
          mappingMode: "autoMapInputData",
          value: null,
          matchingColumns: [],
          schema: [],
          attemptToConvertTypes: false,
          convertFieldsToString: true,
        },
        options: { cellFormat: "RAW", useAppend: true },
      },
    },
    {
      id: "resumo",
      name: "Resumo",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [3980, 400],
      parameters: { mode: "runOnceForAllItems", language: "javaScript", jsCode: CODE.resumo },
    },
  ],
  connections: {
    "Manual Trigger": { main: [[{ node: "Configuração", type: "main", index: 0 }]] },
    Configuração: {
      main: [[
        { node: "Modo Discovery?", type: "main", index: 0 },
        { node: "Ler Planilha Existente", type: "main", index: 0 },
      ]],
    },
    "Modo Discovery?": {
      main: [
        [{ node: "Montar Buscas", type: "main", index: 0 }],
        [{ node: "Ler Aba Entrada CSV", type: "main", index: 0 }],
      ],
    },
    "Montar Buscas": { main: [[{ node: "Buscar DuckDuckGo", type: "main", index: 0 }]] },
    "Buscar DuckDuckGo": { main: [[{ node: "Filtrar e Normalizar", type: "main", index: 0 }]] },
    "Filtrar e Normalizar": { main: [[{ node: "Merge Discovery", type: "main", index: 0 }]] },
    "Ler Aba Entrada CSV": { main: [[{ node: "Normalizar CSV", type: "main", index: 0 }]] },
    "Normalizar CSV": { main: [[{ node: "Merge Discovery", type: "main", index: 0 }]] },
    "Ler Planilha Existente": { main: [[{ node: "Merge Discovery", type: "main", index: 1 }]] },
    "Merge Discovery": { main: [[{ node: "Deduplicar", type: "main", index: 0 }]] },
    Deduplicar: { main: [[{ node: "Filtrar Vazios", type: "main", index: 0 }]] },
    "Filtrar Vazios": { main: [[{ node: "Tem Website?", type: "main", index: 0 }]] },
    "Tem Website?": {
      main: [
        [{ node: "Buscar Website", type: "main", index: 0 }],
        [{ node: "Sem Website", type: "main", index: 0 }],
      ],
    },
    "Buscar Website": { main: [[{ node: "Analisar Website", type: "main", index: 0 }]] },
    "Analisar Website": { main: [[{ node: "Score Final", type: "main", index: 0 }]] },
    "Sem Website": { main: [[{ node: "Score Final", type: "main", index: 0 }]] },
    "Score Final": { main: [[{ node: "Qualificado e IA habilitada?", type: "main", index: 0 }]] },
    "Qualificado e IA habilitada?": {
      main: [
        [{ node: "Preparar Prompt IA", type: "main", index: 0 }],
        [{ node: "Sem IA", type: "main", index: 0 }],
      ],
    },
    "Preparar Prompt IA": { main: [[{ node: "IA OpenAI", type: "main", index: 0 }]] },
    "IA OpenAI": { main: [[{ node: "Aplicar IA", type: "main", index: 0 }]] },
    "Aplicar IA": { main: [[{ node: "Google Sheets Append", type: "main", index: 0 }]] },
    "Sem IA": { main: [[{ node: "Google Sheets Append", type: "main", index: 0 }]] },
    "Google Sheets Append": { main: [[{ node: "Resumo", type: "main", index: 0 }]] },
  },
};

const out = path.join(__dirname, "workflows", "prospeccao-comercial.json");
fs.writeFileSync(out, JSON.stringify(workflow, null, 2));
fs.writeFileSync(path.join(__dirname, "headers-leads.tsv"), HEADERS.join("\t") + "\n");

const names = new Set(workflow.nodes.map((n) => n.name));
const bad = [];
for (const [src, ports] of Object.entries(workflow.connections)) {
  if (!names.has(src)) bad.push("src:" + src);
  for (const arr of ports.main || []) for (const t of arr || []) if (!names.has(t.node)) bad.push("tgt:" + t.node);
}
console.log(JSON.stringify({ file: out, nodes: workflow.nodes.length, bad, version: workflow.versionId }, null, 2));
