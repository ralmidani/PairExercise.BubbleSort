function bubbleSort(arr) {
  let didSwap = true;
  let unsortedEnd = arr.length - 1;
  while (unsortedEnd !== 0 && didSwap === true) {
    didSwap = false;
    for (let i = 0; i < unsortedEnd; i++) {
      if (arr[i] > arr[i + 1]) {
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