'use strict';

//swap the index of an array with another index
//Inputs: array, 2 indexes
//Outputs: array

//using the temp variable
var swap = function(x, y){
var temp = myArr[x];
myArr[x] = myArr[y];
myArr[y] = temp;
return (myArr);
};

var myArr = [0,1,2,3,4,5];
console.log(swap(1,2));

//swap values with three args
function swapValues(arr, val1, val2) {
  var index1 = arr.indexOf(val1);
  var index2 = arr.indexOf(val2);

  if(index1 === -1 || index2 === -1){
  return "one of the numbers does not exist"
}

arr[index1] = val2;
arr[index2] = val1;

return (arr);
}

//using the array.prototype
// Array.prototype.swapItems = function(a, b){
//     this[a] = this.splice(b, 1, this[a])[0];
//     return this;
// }
//
// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.swapItems(3, 7));


// reverse
// var newArr = [-3,5,1,3,2,10];

function reverse (a) {
var b = [], counter = 0;
for (var i = a.length-1; i >= 0; i -= 1) {
b[counter] = a[i];
counter += 1;
}
return b;
}

console.log(reverse(myArr));

//Correct Way
// 'use strict';
// var array = [1,3,2,4,5,6,7,8];
//
// //CORRECT WAY
//
// // temp = arr[x];
// // arr[x] = arr[y];
// // arr[y] = temp;
//
// function swap(arr, x, y) {
//   let temp = arr[x];
//   arr[x] = arr[y];
//   arr[y] = temp;
//   return arr;
// }
//
// console.log("Swap:", swap(array, 1, 2));
//
// function reverse(arr) {
//   let arrLength = arr.length-1;
//   for (var i = 0; i < arr.length; i++) {
//     if (i < arrLength/2) {
//       swap(arr, i, arrLength-i);
//     }
//   }
//   return arr;
// }
// console.log('Reverse:', reverse(array));
//
//
