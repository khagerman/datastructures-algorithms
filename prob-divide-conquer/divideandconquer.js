function binarySearch(arr, val) {
  let leftIDX = 0;
  let rightIDX = arr.length - 1;
  while (leftIDX <= rightIDX) {
    let middleIDX = Math.floor((leftIDX + rightIDX) / 2);
    let middleVal = arr[middleIDX];
    if (middleVal < val) {
      leftIDX = middleIDX + 1;
    } else if (middleVal > val) {
      rightIDX = middleIDX - 1;
    } else {
      return middleIDX;
    }
  }
  return -1;
}
