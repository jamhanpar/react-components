// Replace “.the-sticky-child” for a CSS selector
// that matches the sticky-position element:
const selector = '.the-sticky-child';

function findCulprits(elem) {
  if (!elem) {
    throw new Error('Could not find element with that selector');
  }

  let parent = elem.parentElement;

  while (parent) {
    const { overflow } = getComputedStyle(parent);

    if (['auto', 'scroll', 'hidden'].includes(overflow)) {
      console.log(overflow, parent);
    }

    parent = parent.parentElement;
  }
}

findCulprits(document.querySelector(selector));
