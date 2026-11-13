import { test } from 'node:test';
import assert from 'node:assert/strict';
import { webpSrcSet } from '../src/lib/images.ts';

test('builds a WebP srcset from the widths generated for an image', () => {
  assert.equal(
    webpSrcSet('/images/fv-croche.png', [480, 960]),
    '/images/fv-croche-480.webp 480w, /images/fv-croche-960.webp 960w',
  );
  assert.equal(webpSrcSet('/images/Perfil.jpg', [192]), '/images/Perfil-192.webp 192w');
});

test('images without variants get no srcset', () => {
  assert.equal(webpSrcSet('/images/logo.svg', []), undefined);
  assert.equal(webpSrcSet('/images/logo.svg', undefined), undefined);
});
