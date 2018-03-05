function mergeSort(arr) {

}

function split(arr) {
  return [arr.slice(0, arr.length / 2), arr.slice(arr.length / 2)];
}

function merge(arr1, arr2) {
  let result = [];
  let i = j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    }
    else {
      result.push(arr2[j]);
      j++;
    }
  }
  if (i === arr1.length) {
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  }
  if (j === arr1.length) {
    while (i < arr2.length) {
      result.push(arr1[i]);
      i++;
    }
  }
  return result;
}