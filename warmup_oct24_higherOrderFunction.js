// Define a JavaScript function add that can be used like so:
//



function add(x){
  return function(y){
    return x + y;
  };
}


// add(1)(1);   // returns 2
// add(20)(20); // returns 40
