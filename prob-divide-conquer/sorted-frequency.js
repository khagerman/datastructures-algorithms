function sortedFrequency(arr, val) {
  // Given a sorted array and a number,
  // write a function called sortedFrequency that counts the occurrences
  // of the number in the array

  //    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4)
  let leftIDX = 0;
  let rightIDX = arr.length - 1;

  //   get start of number
  while (leftIDX <= rightIDX) {
    let midIDX = Math.floor((rightIDX + leftIDX) / 2);
    let midVal = arr[midIDX];
    if (midVal >= val) rightIDX = midIDX - 1;
    else leftIDX = midIDX + 1;
  }
  //   if not found at all return -1
  if (arr[leftIDX] !== val) return -1;
  // save start value
  const start = leftIDX;
  //   reset left index so we can find end index
  leftIDX = 0;

  while (leftIDX <= rightIDX) {
    let midIDX = Math.floor((rightIDX + leftIDX) / 2);
    let midVal = arr[midIDX];
    if (midVal <= val) leftIDX = midIDX + 1;
    else rightIDX = midIDX - 1;
  }
  return rightIDX - start + 1;
}
module.exports = sortedFrequency;
