'use strict';

var arr = [1,2,2,3,3,5,5,1,6];

var sortedArr = arr.slice().sort();


var results = [];

for (var i = 0; i < arr.length -1; i++) {
  if (sortedArr[i++] == sortedArr[i]) {
      results.push(sortedArr[i]);
  }
}

console.log(results);
