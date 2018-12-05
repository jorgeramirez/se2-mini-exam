exports.stringSquare = s => {
  if (typeof s === 'string') {
    return s.length ** 2;
  }
  return -1;
};
