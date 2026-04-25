import test from 'node:test';
import assert from 'node:assert/strict';

import { toRgba } from './color-utils.mjs';

test('toRgba converts six-digit hex colors into stable rgba strings', () => {
  assert.equal(toRgba('#F7DF1E', 0.125), 'rgba(247, 223, 30, 0.125)');
  assert.equal(toRgba('#4FC08D', 0.125), 'rgba(79, 192, 141, 0.125)');
});

test('toRgba accepts hex values without a leading hash', () => {
  assert.equal(toRgba('000000', 0.125), 'rgba(0, 0, 0, 0.125)');
});
