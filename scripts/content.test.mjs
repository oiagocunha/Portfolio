import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadLocale } from './load-locale.mjs';
import { projectTag } from '../src/lib/projects.ts';

/** Every key path and array length, so a missing translation shows up by name. */
function shape(value, path = '') {
  if (Array.isArray(value)) {
    return [`${path}[${value.length}]`, ...value.flatMap((item, i) => shape(item, `${path}[${i}]`))];
  }
  if (value && typeof value === 'object') {
    return Object.keys(value).sort().flatMap(key => shape(value[key], path ? `${path}.${key}` : key));
  }
  return [path];
}

test('PT and EN locales have the same keys and list sizes', async () => {
  const [pt, en] = await Promise.all([loadLocale('pt'), loadLocale('en')]);
  const ptShape = new Set(shape(pt));
  const enShape = new Set(shape(en));
  assert.deepEqual([...ptShape].filter(path => !enShape.has(path)), [], 'only in PT');
  assert.deepEqual([...enShape].filter(path => !ptShape.has(path)), [], 'only in EN');
});

test('every project gets a visible type label (internal, client, open source or demo)', async () => {
  for (const locale of ['pt', 'en']) {
    const { projects } = await loadLocale(locale);
    const unlabeled = [...projects.featured, ...projects.earlyWork]
      .filter(project => projectTag(project) === undefined)
      .map(project => `${locale}: ${project.title}`);
    assert.deepEqual(unlabeled, []);
  }
});
