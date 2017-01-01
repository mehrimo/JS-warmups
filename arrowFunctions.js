'use strict';

//regular function
var square = (x) => {
  var result = x * x;
  return result;
};
console.log(square(9));

//arrow function (remove brackets)
var square = (x) => x * x;
console.log(square(9));
