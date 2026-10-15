import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { isContactAccepted } from '../src/lib/contact-response.ts';
import { localizedPath, withoutLocale } from '../src/lib/paths.ts';

test('contact clears only for explicit boolean/string success', () => {
  for (const response of [null, {}, {success:false}, {success:'false'}, {success:1}, 'ok']) assert.equal(isContactAccepted(response), false);
  for (const response of [{success:true}, {success:'true'}]) assert.equal(isContactAccepted(response), true);
});
test('language paths preserve destination without doubling prefixes', () => {
  assert.equal(localizedPath('/perfil', 'en'), '/en/perfil');
  assert.equal(localizedPath('/en/perfil', 'pt'), '/perfil');
  assert.equal(localizedPath('/en', 'en'), '/en');
  assert.equal(withoutLocale('/enterprise'), '/enterprise');
});
const workflow = JSON.parse(readFileSync(new URL('../n8n/workflows/prospeccao-comercial.json', import.meta.url)));
const code = name => workflow.nodes.find(n => n.name === name).parameters.jsCode;
const score = new Function('$input', '$itemIndex', '$', code('Score Final'));
const config = values => () => ({first:()=>({json:{AI_ENABLED:true,AI_MIN_SCORE:45,...values}})});
const prospect = {nome:'Example',flags:{apparently_private:true},site_status:'POOR',opportunities:['OUTDATED_WEBSITE','NO_CLEAR_CTA','NO_WHATSAPP','POOR_MOBILE'],email:'business@example.com'};
test('qualified prospect reaches AI; absent credentials switch and contact gate work', () => {
  assert.equal(score({item:{json:prospect}},0,config()).json._needs_ai,true);
  assert.equal(score({item:{json:prospect}},0,config({AI_ENABLED:false})).json._needs_ai,false);
  assert.equal(score({item:{json:{...prospect,email:null}}},0,config()).json._needs_ai,false);
  assert.equal(score({item:{json:prospect}},0,config({AI_MIN_SCORE:90})).json._needs_ai,false);
});
test('CSV businesses without a website retain distinct identities and contact channels', () => {
  const normalize = new Function('items','$',code('Normalizar CSV'));
  const getConfig = () => ({first:()=>({json:{QUANTIDADE:20}})});
  const rows=normalize([{json:{EMPRESA:'Alpha',EMAIL:'alpha@example.com',INSTAGRAM:'https://instagram.com/alpha'}},{json:{EMPRESA:'Beta','WHATSAPP URL':'https://wa.me/558500000000'}}],getConfig);
  assert.notEqual(rows[0].json.place_id,rows[1].json.place_id);
  const noSite = new Function('$input','$itemIndex',code('Sem Website'));
  const result=noSite({item:rows[0]},0);
  assert.equal(result.json.email,'alpha@example.com');
  assert.equal(result.json.instagram,'https://instagram.com/alpha');
  assert.equal(score({item:result},0,config()).json._needs_ai,true);
});
test('workflow connections reference actual nodes and headers do not run with discovery', () => {
  const names = new Set(workflow.nodes.map(n=>n.name));
  for(const [name,ports] of Object.entries(workflow.connections)) {
    assert.ok(names.has(name));
    for(const port of ports.main) for(const edge of port) assert.ok(names.has(edge.node));
  }
  assert.ok(!workflow.connections['Configuração'].main.flat().some(edge=>edge.node==='Escrever Cabeçalhos'));
});
