// Using Map

var array = ["this", "is", "practice", "for", "map"];
var arrayNums = [1,2,3,4,5];

function multiplyBy10(array) {
var result = array.map(function(num) {
  return num * 10;
});
  //return an array with each num multiplied by 10
  return result;
}
console.log(multiplyBy10(arrayNums));



function add5(array){
  var result = array.map(function(num) {
  return num + 5;
});
  return result;
  //return an array with each num increased by 5
}
console.log(add5(arrayNums));




function countString(array){
  var result = array.map(function(word) {
  return word.length;
});
  return result;
  //return an array with the length of each word in the array
}

function capitalize(array){
  return array.map(word=>{
    let wordArray = word.split('');
    // capitalize the first index
    wordArray[0] = word[0].toUpperCase();
    return wordArray.join('');
  })
  //return an array where each word has the first letter capitalized
}
console.log(capitalize(array));
