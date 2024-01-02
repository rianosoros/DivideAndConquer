function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // If already sorted
      if (arr[left] <= arr[right]) {
        return left;
      }
  
      const mid = Math.floor((left + right) / 2);
      const next = (mid + 1) % arr.length; // Calculate the next index
      const prev = (mid + arr.length - 1) % arr.length; // Calculate the previous index
  
      if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        return mid;
      }
  
      if (arr[mid] <= arr[right]) {
        // If right half is sorted
        right = mid - 1;
      } else if (arr[mid] >= arr[left]) {
        // If left half is sorted
        left = mid + 1;
      }
    }
  
    return -1; // If not found
  }
  
module.exports = findRotationCount