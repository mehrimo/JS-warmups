// Check that all items in an array are strings
// and that they all only contain the same vowels.
var goodInput = [ 'amalgam', 'zoom' ]; //using this array would return true
var badInput = [ 'zoom', 'oligopoly' ]; //using this array would return false

// if it's not a string, return false
//
// function check(arr) {
//   return arr.every(fuction(i)
//   {return typeof i === "string"});
// }

// arr.every (str => typeof str ===
// 'string' && onlyVowel(str))


console.log(check(goodInput));
console.log(check(badInput));
