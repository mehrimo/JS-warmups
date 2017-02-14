//Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each. Write tests instead of console.logs :slightly_smiling_face:.

function arrSum(arr) {
  var sum = 0;
    //iterate over array
  for (var i = 0; i < arr.length; i++) {
    //checking if it's an array
    if (typeof arr[i] == 'object')
    //getting the sum
      sum += arrSum(arr[i]);
    else
    //else adding the value plus 1 with sum
      sum += arr[i] + 1;
  }
  return sum;
}

// console.log(arrSum([1, 2, 3, 4]));
