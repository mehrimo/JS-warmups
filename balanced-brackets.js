// Write a function that accepts a string consisting entirely of brackets ([](){}) and returns whether it is balanced. Every "opening" bracket must be followed by a closing bracket of the same type. There can also be nested brackets, which adhere to the same rule.

//use switch/case. If you have an opening bracket, push a closed bracket to an empty array. If the 

function brackets(){
  for (var i = 0; i < brackets.length; i++) {
    if (brackets[i] === brackets[i] +1)
  }
    return true;
}

if (string[i] === '{' && string[i]) {
  return true;
}

// for (var i = 0; i < string.length; i++) {
//     if (brackets[stack[stack.length - 1]] === string[i]) {
//       stack.pop();
//     } else {
//       stack.push(string[i]);
//     }
//   }



f('()[]{}(([])){[()][]}') // true
f('())[]{}') // false
f('[(])') // false
