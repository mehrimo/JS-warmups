// Rotate an array arr in place arr to the right by k steps.

// For example, with n = [1,2,3,4,5,6,7] and k = 3, the array is rotated to [5,6,7,1,2,3,4].
//Make sure not to return a copy of the array.

function rotate(arr, num) {
  for (var i = 0; i < num; i++) {
    let poppedNum = arr.pop();
    arr.unshift(poppedNum);
  }
  return arr;
}

console.log(rotate([1,2,3,4,5,6,7],3));
