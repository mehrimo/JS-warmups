//Filters out if it's True or False

var numArr = [-5,-2,0,1,4];
function onlyPositive (array) {
  return array.filter(function(num){
    //same as if num is > 0, return true, else return false
    return num > 0;
  });
  //return an array containing only positive nums
}
console.log(onlyPositive(numArr));


function onlyEven (array) {
  return array.filter(function(num) {
    return num % 2 === 0
  })
  //return an array containing only even nums
}
console.log(onlyEven(numArr));


var array = ["Angelica", "Eliza", "and Peggy"];
function onlyOneWord (array) {
  return array.filter(function(string){
    //if the strig does not include a space
    return !string.includes(' ');
  });
 //return an array with phrases containing 1 word
}
console.log(onlyOneWord(array));


var users = [{ character: 'Superman', hero: true },
             { character: 'Sinestro', hero: false },
             { character: 'Wonder Woman', hero: true },
             { character: 'Lex Luthor', hero: false },
             { character: 'Ares', hero: false },
             { character: 'Green Lantern', hero: true }];

function findHeroes(array){
  return array.filter(user=>{
    return user.hero
  });
  //return an array with only heroes
}
console.log(findHeroes(users));

function findHeroNames(array){
  //filter the objects first
  return array.filter(function(user) {
    return user.hero;
  })
  //then map through those
  .map(function(obj) {
    return obj.character;
  })
  //return an array with only heroes
}
console.log(findHeroNames(users));
