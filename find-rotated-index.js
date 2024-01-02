function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      return mid;
    }

    if (arr[left] <= arr[mid]) {
      // Left half is sorted
      if (arr[left] <= num && num < arr[mid]) {
        // If num is in the left-sorted half
        right = mid - 1;
      } else {
        // If num is in the right-UNsorted half
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (arr[mid] < num && num <= arr[right]) {
        // If num is in the right-sorted half
        left = mid + 1;
      } else {
        // If num is in the left-UNsorted half
        right = mid - 1;
      }
    }
  }

  return -1;
}

module.exports = findRotatedIndex