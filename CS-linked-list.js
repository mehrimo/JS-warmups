// Specs:
//  *
//  * pop()
//  * push()
//  * length()
//  * */

// keep a reference of the last index item (tail)
let tail = null;
// let count = 0;

function ANode (value, prev) {
  this.value = value;
  // this.prev = prev;
}

function push(value) {
  let oldTail = tail;
//puts the previous value on it
  prevNode = new ANode(value, oldTail)
  //makes sure the tail is the prev node
  tail = prevNode;
  // count++;
}

push("hello");
push("world");


while (tail !==null) {
  console.log(count, tail.value);
  // count--;
  //pops things off the stack
  tail = tail.prev;
}
