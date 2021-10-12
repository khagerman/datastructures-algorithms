// findFloor
// Write a function called findFloor which accepts a sorted array and a value x,
// and returns the floor of x in the array.
//  The floor of x in an array is the largest element in the array which
//   is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// Constraints

// Time Complexity: O(log N)
// l      m         r
//[1,2,8,10,10,12,19]

function findFloor(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === val || (mid - 1 === left && arr[mid] < val)) {
      return arr[mid];
    } else if (arr[mid] > val) {
      right = mid - 1;
    } else if (arr[right] === val - 1) {
      return arr[right];
    } else if (arr[mid] < val) {
      left = mid + 1;
    }
  }
  return -1;
}
module.exports = findFloor;
