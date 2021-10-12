// Write a function called findRotatedIndex which accepts a
//  rotated array of sorted numbers and an integer.
//  The function should return the index of num in the array.
//  If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

// find the point where decreases
// break into two parts

function findRotatedIndex(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // see if end number is greater than middle number to find shift
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let start = left;
  left = 0;
  right = arr.length - 1;
  // Now we can do a regular binary search

  //   first need to find what side to do it on
  if (val >= arr[start] && val <= arr[right]) {
    left = start;
  } else {
    right = start;
  }
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
