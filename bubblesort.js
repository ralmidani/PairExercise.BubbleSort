function bubbleSort(arr, func) {
  let didSwap = true;
  let unsortedEnd = arr.length - 1;
  while (unsortedEnd !== 0 && didSwap === true) {
    didSwap = false;
    for (let i = 0; i < unsortedEnd; i++) {
      if (func) {
        if(func(arr[i], arr[i+1]) === 1) {
          swap(arr, i, i + 1);
          didSwap = true;
        }  
      }
      else if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        didSwap = true;
      }
    }
    unsortedEnd--;
  }
  return arr;
}
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
function comparator (a, b) {
  if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
  if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
  return 0; // returning 0 means "a and b are equivalent"
}

