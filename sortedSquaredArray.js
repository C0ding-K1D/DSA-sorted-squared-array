function sortedSquaredArray(array) {
  let squaredArr = [];

  for (let item of array) {
    let squaredItem = Math.pow(item, 2);
    squaredArr.push(squaredItem);
  }
  return squaredArr.sort((a, b) => a - b);
}

module.exports = sortedSquaredArray;
