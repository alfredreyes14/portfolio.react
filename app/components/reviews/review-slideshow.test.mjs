import test from 'node:test';
import assert from 'node:assert/strict';

import { getNextReviewSlideshowState } from './review-slideshow.mjs';

test('auto advance skips the tick immediately after a dot-selected page', () => {
  const selectedState = getNextReviewSlideshowState(
    { activeIndex: 0, skipNextAutoAdvance: false },
    { type: 'selectPage', index: 3 }
  );

  assert.deepEqual(selectedState, {
    activeIndex: 3,
    skipNextAutoAdvance: true,
  });

  const skippedAutoAdvance = getNextReviewSlideshowState(
    selectedState,
    { type: 'autoAdvance', reviewCount: 5 }
  );

  assert.deepEqual(skippedAutoAdvance, {
    activeIndex: 3,
    skipNextAutoAdvance: false,
  });

  assert.deepEqual(
    getNextReviewSlideshowState(skippedAutoAdvance, {
      type: 'autoAdvance',
      reviewCount: 5,
    }),
    {
      activeIndex: 4,
      skipNextAutoAdvance: false,
    }
  );
});

test('auto advance continues normally when no page was selected through dots', () => {
  assert.deepEqual(
    getNextReviewSlideshowState(
      { activeIndex: 4, skipNextAutoAdvance: false },
      { type: 'autoAdvance', reviewCount: 5 }
    ),
    {
      activeIndex: 0,
      skipNextAutoAdvance: false,
    }
  );
});
