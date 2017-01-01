// Write a function that takes 2 inputs. One input is an array and the second input is a callback function.

// The callback function will expect three inputs:
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// array: The array map was called upon.

// Your myMap function should return an array.

function myMap(array, callbackFnc){


  var callbackFnc = function myInputs(currentValue, index, array) {
    currentValue =
    index =   
  };
  // return array.map(callbackFnc); // this solution is off limits :)
}
callbackFnc(5,0,[]);
console.log([1,2,3], callbackFnc);
var numArray = [1,2,3,4];

//Write a callback function that is passed to myMap that will return the given input plus 4.
var addedArray = myMap(numArray,function(){

  var newNumbers = numbers.map(function(number){
    return number * 2;

});

// Write a callback function that is passed to myMap that will return a string like "The Person at index 0 owes $1"
var dollarArray = myMap(numArray, function(){
  //WRITE CODE HERE

})

console.log(addedArray); // [5,6,7,8]
console.log(dollarArray);
// [ 'The Person at index 0 owes $1',
//   'The Person at index 1 owes $2',
//   'The Person at index 2 owes $3',
//   'The Person at index 3 owes $4' ]
