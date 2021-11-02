export const getElement = (parent, selector) => parent.querySelector(`.${selector}`);
export const getElements = (parent, selector) => parent.querySelectorAll(`.${selector}`);
export const increaseNumberInList = (current, total) => (current + 1) >= total ? 0 : current + 1;
