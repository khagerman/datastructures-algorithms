// Given an array of 1s and 0s which has all 1s first
// followed by all 0s, write a function called countZeroes,
// which returns the number of zeroes in the array.
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// O(n)
// function countZeroes(arr) {
//   let count = 0;
//   for (num of arr) {
//     if (num === 0) {
//       count++;
//     }
//   }
//   return count;
// }
function countZeroes(arr) {
  let newArr = arr.sort();
  let count = 0;
  for (num of newArr) {
    if (num === 0) {
      count++;
    } else {
      return count;
    }
  }
  return count;
}
module.exports = countZeroes;
