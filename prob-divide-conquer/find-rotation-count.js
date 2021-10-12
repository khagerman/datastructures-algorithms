// findRotationCount
// Write a function called findRotationCount which accepts an array of
// distinct numbers sorted in increasing order.
// The array has been rotated counter-clockwise n number of times.
// Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[right] > arr[left]) return 0;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    // find smallest value
    if (arr[right] < arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
  //   left is where smallest value is now, thus the number of times array has been shifted
}

module.exports = findRotationCount;
