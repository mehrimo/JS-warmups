// Count It
//
// Write a function that counts the letters in a string.
//
// Input
// A string. e.g. "Hello World"
//
// Output
// The letters and how often they show up. e.g. d:1 e:1 h:1 l:3 o:2 r:1 w:1 NOTE: the function should not call console.log()


function countLetters(str) {
var res = str.toLowerCase();
var charsObj = {};
//search for all non whitespace patterns and replace
res.replace(/\S/g,
  function(i) {
    //the index position is +1
    charsObj[i] = (isNaN(charsObj[i]) ? 1 : charsObj[i] + 1);
  });
return charsObj;
}
countLetters("Hello World")

// => { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
