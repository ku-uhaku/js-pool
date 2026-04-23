function indexOf(arr, value, fromIndex = 0) {
  // Handle negative start index
  let start = fromIndex < 0 ? Math.max(arr.length + fromIndex, 0) : fromIndex;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
  // Handle negative start index
  let start = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  
  // Ensure we don't start out of bounds
  start = Math.min(start, arr.length - 1);

  for (let i = start; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}   

function includes(arr, value, fromIndex = 0) {
  let start = fromIndex < 0 ? Math.max(arr.length + fromIndex, 0) : fromIndex;

  for (let i = start; i < arr.length; i++) {
    // Note: The real Array.includes handles NaN, unlike indexOf
    // To be perfectly accurate: if (Object.is(arr[i], value))
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}