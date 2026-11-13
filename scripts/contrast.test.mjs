import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8');

/** Reads `--name: H S% L%;` declarations from one selector block of index.css. */
function tokens(selector) {
  const block = css.match(new RegExp(`\\n\\s*${selector.replace('.', '\\.')} \\{([^}]*)\\}`))?.[1];
  assert.ok(block, `block ${selector}`);
  return Object.fromEntries(
    [...block.matchAll(/--([\w-]+):\s*([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/g)].map(([, name, h, s, l]) => [name, [+h, +s, +l]]),
  );
}

// WCAG 2.x relative luminance and contrast ratio.
function luminance([h, s, l]) {
  s /= 100; l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const channel = n => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  const [r, g, b] = [channel(0), channel(8), channel(4)]
    .map(c => Math.round(c * 255) / 255)
    .map(c => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

test('contrast helper agrees with known WCAG values', () => {
  assert.equal(contrast([0, 0, 0], [0, 0, 100]).toFixed(1), '21.0');
  assert.equal(contrast([0, 0, 46.3], [0, 0, 100]).toFixed(2), '4.54'); // #767676 on white
  assert.equal(contrast([0, 0, 46.7], [0, 0, 100]).toFixed(2), '4.48'); // #777777 on white
});

const textPairs = [
  ['foreground', 'background'], ['foreground', 'card'], ['foreground', 'muted'], ['foreground', 'secondary'],
  ['muted-foreground', 'background'], ['muted-foreground', 'card'], ['muted-foreground', 'muted'], ['muted-foreground', 'secondary'],
  ['accent', 'background'], ['accent', 'card'], ['accent-foreground', 'accent'],
  ['primary-foreground', 'primary'], ['warn', 'background'], ['warn', 'card'],
  ['destructive-foreground', 'destructive'],
];

for (const [theme, selector] of [['light', ':root'], ['dark', '.dark']]) {
  test(`${theme} theme text pairs reach WCAG AA (4.5:1)`, () => {
    const t = tokens(selector);
    const failures = textPairs
      .map(([fg, bg]) => [fg, bg, contrast(t[fg], t[bg])])
      .filter(([, , ratio]) => !(ratio >= 4.5))
      .map(([fg, bg, ratio]) => `${fg} on ${bg}: ${ratio.toFixed(2)}`);
    assert.deepEqual(failures, []);
  });
}
