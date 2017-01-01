

//Write a Js program to get the integers in range(x,y)
//example: range(2,9) // [2,3,4,5,6,7,8]

function range(start, stop) {
 var rangeArr = [];

 if(stop<start || typeof start !== 'number' || typeof stop !== 'number') {
   return 'invalid input';
 }

for (var i = Math.ceil(start); i < stop; i++) {
   rangeArr.push(Math.floor(i));
 }
return rangeArr;
}
range(2, 9);

//tests:
//What if stop is less than start?
//What if stop or start are not a number?
//What if stop or start are floats and not integers?
//What if start is a negative number?
