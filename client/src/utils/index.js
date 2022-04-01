export const compare = (a, b) => {
  if (a < b || b === null) {
    return -1;
  }
  if (a > b || a === null) {
    return 1;
  }
  return 0;
};
