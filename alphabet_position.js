'use strict';

function alphabetPosition(text) {
 var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 var replaced = "";
 for (var i = 0; i < text.length; i++) {
   if (alphabet.includes(text[i].toLowerCase())) {
     replaced += (alphabet.indexOf(text[i].toLowerCase()) + 1) + " ";
   } else {
     continue;
   }
 }
 return replaced.trim();
}

console.log(alphabetPosition('a'));
