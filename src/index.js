module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  return matrix.map((row, index) => {
    return index % 2 === 0 ? row : row.reverse();
  }).reduce((acc, curr) => acc.concat(curr), []);
}