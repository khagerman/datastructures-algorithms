/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (nums.length === i) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, out = 0) {
  if (words.length === i) return out;
  if (words[i].length > out) {
    out = words[i].length;
  }
  return longest(words, i + 1, out);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, out = "") {
  if (str.length === i) return out;
  if (i % 2 === 0) {
    out += str[i];
  }
  return everyOther(str, i + 1, out);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, right = 0, left = str.length - 1) {
  if (left >= right) {
    if (str[left] === str[right]) return isPalindrome(str, right + 1, left - 1);
    else return false;
  }
  return true;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i <= arr.length) {
    if (arr[i] !== val) return findIndex(arr, val, i + 1);
    else return i;
  }
  return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, reverse = "") {
  if (str.length !== reverse.length) {
    reverse += str[i];
    return revString(str, i - 1, reverse);
  }

  return reverse;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (o in obj) {
    if (typeof obj[o] === "object") {
      gatherStrings(obj[o], arr);
    } else {
      if (typeof obj[o] === "string") arr.push(obj[o]);
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (val === arr[mid]) return mid;
    if (val < arr[mid]) {
      right = mid - 1;
    } else if (val > arr[mid]) {
      left = mid + 1;
    }
    return binarySearch(arr, val, left, right);
  }
  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
