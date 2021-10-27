function merge(arr1, arr2) {
  // create empty out array
  // start pointers at beginnings od arrays a and b
  // if a value <= b value, push a value to out and increse a pointer
  // else push b value to out and increase b pointer
  //   once we exaust one array we push all other values to the
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  //   get rest of array that has values left over
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
function mergeSort(arr) {
  // split the array into halves until we have arrays that havea length of 0 or 1
  // merge split arrays and return the merged and sorted array
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort };
