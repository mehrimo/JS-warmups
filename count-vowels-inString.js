'use strict';

//count the vowels in a string
function countVowels(str){
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if(/[aeiou]/.test(str.charAt(i))) count++;
  }
  return count;
}

// countVowels('tree')
