'use strict';

function bubbleSort(arr) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i-1] > arr[i]) {
        done = false;
        [arr[i-1], arr[i]] = [arr[i], arr[i-1]]
      }
    }
  }
  return arr;
}
