//Factorial
function factorial(num) {
  if (num <= 1) {
    return 1;
} else {
  //call self with new data
  return num * factorial(num -1);
  }
}
console.log("Final answer is:", factorial(5));


//Recursive function
function bottleResursion(n) {
//base case
if (n === 0) {
  console.log("no more bottles of beer on the wall.");
}
//call self with new data
  else {
    console.log(`${n} bottle of beer on the wall...`);
    return bottleResursion(n-1);
  }
}

bottleResursion(0);
bottleResursion(5);
