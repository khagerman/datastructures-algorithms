function bubbleSort(arr) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    // Iterate until we get to the last element
    for (let i = 1; i < arr.length; i++) {
      // If the element to the left is bigger, then swap the element
      // that we're currently looking at with its left neighbor.
      if (arr[i - 1] > arr[i]) {
        isSorted = false;
        // Swap elements by creating a temporary reference.
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
