export function getNextReviewSlideshowState(state, action) {
  if (action.type === 'selectPage') {
    return {
      activeIndex: action.index,
      skipNextAutoAdvance: true,
    };
  }

  if (action.type === 'autoAdvance') {
    if (state.skipNextAutoAdvance) {
      return {
        activeIndex: state.activeIndex,
        skipNextAutoAdvance: false,
      };
    }

    return {
      activeIndex: (state.activeIndex + 1) % action.reviewCount,
      skipNextAutoAdvance: false,
    };
  }

  return state;
}
