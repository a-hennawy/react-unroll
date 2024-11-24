const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const unroll = (squareArray) => {
  let result = [];
  console.log(squareArray);
  let top = 0;
  let bottom = squareArray.length - 1;
  let left = 0;
  let right = squareArray[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col++) {
      result.push(squareArray[top][col]);
    }
    top++;

    for (let row = top; row <= bottom; row++) {
      result.push(squareArray[row][right]);
    }
    right--;

    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(squareArray[bottom][col]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(squareArray[row][left]);
      }
      left++;
    }
  }

  return result;
};

console.log(unroll(square));

module.exports = unroll;
