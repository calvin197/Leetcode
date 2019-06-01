var bubbleSort = function(arr) {
  let result = arr.slice();
  for (let i = 0; i < result.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        let storage = result[j + 1];
        swapped = true;
        result[j + 1] = result[j];
        result[j] = storage;
      }
    }
    if (!swapped) {
      return result;
    }
  }
  return result;
};

var selectionSort = function(arr) {
  var result = arr.slice(0);
  for (let i = 0; i < arr.length; i++) {
    let max = -Infinity;
    let maxIndex;
    let oldLast = result[result.length - 1 - i];
    for (let j = 0; j < arr.length - i; j++) {
      if (result[j] > max) {
        max = result[j];
        maxIndex = j;
      }
    }
    result[maxIndex] = oldLast;
    result[result.length - 1 - i] = max;
  }
  return result;
};

var insertionSort = function(arr) {
  var result = arr.slice(0);
  for (let i = 1; i < result.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (result[j] < result[j - 1]) {
        let storage = result[j];
        result[j] = result[j - 1];
        result[j - 1] = storage;
      }
    }
  }
  return result;
};


//https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060
var mergeSort = function(arr) {
  var result = arr.map(x => [x]);
  var conquer = function(arr1, arr2 = [], result = []) {
    if (arr1.length === 0 || arr2.length === 0)
      return [...result, ...arr1, ...arr2];
    let left = arr1[0];
    let right = arr2[0];
    if (left < right) return conquer(arr1.slice(1), arr2, [...result, left]);
    else return conquer(arr1, arr2.slice(1), [...result, right]);
  };
  var merge = function(arr) {
    let newArr = [];
    if (arr.length === 1) return arr[0];
    for (let i = 0; i < arr.length; i += 2) {
      newArr.push(conquer(arr[i], arr[i + 1]));
    }
    return merge(newArr);
  };
  return merge(result);
};
