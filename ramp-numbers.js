'use strict';
// Ramp Numbers
//
// A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//
// **Input**
//
// A positive integer, n.
//
// **Output**
//
// true if the input is a ramp number, false if it is not

function rampNumber(num) {
  var digits = num.toString().split('');
  //set a var for digits[0], then compare every num to that number

  for (var i = 0; i < num.length; i++) {
    num[i]
  }
  return digits;
}

rampNumber(1234);
// console.log(digits);
