'use strict';

// class Stark {
//   constructor(a) {
//     console.log("Constructing", a);
//     this.name = `${a} Stark`;
//   }
// }
//
// var Eddard = new Stark("Eddard");
// console.log(Eddard);

class Phone {
  constructor(n) {
    this.number = n;
  }
  call() {
  console.log("Phone is making a call!", this.number);
  }
}

var c = new Phone("683-7944");
console.log(c);
c.call();
