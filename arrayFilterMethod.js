'use strict';


//Print an array that has only numbers larger than 10
//expect [12,90]

var numbers = [12, 2, 3, 90, 0].filter(isBigEnough);

function isBigEnough(value) {
  return value >= 10;
}
// console.log(numbers)


//What if I want the numbers that are less than 10?
//expect [2,3,0]

var numbers = [12, 2, 3, 90, 0].filter(isBigEnough);

function isBigEnough(value) {
  return value <= 10;
}
// console.log(numbers)


// using a for loop write code that will show the info for people in 3rd grade
// YOUR CODE HERE

var students =
[
  {name: "Lori", grade:"3"},
  {name: "Finn", grade:"5"},
  {name: "Sally", grade:"3"},
  {name: "Cory", grade:"1"}
];


var thirdGraders = [];

function filterByGrade(obj) {
  if (obj.grade === 3) {
    return true;
  } else {
    thirdGraders++;
    return false;
  }
}

var arrByID = students.filter(filterByGrade);

console.log('Filtered Array\n', arrByID);

// console.log(thirdGraders); // Lori and Sally objects

// use the filter method to produce the same results
// YOUR CODE HERE
