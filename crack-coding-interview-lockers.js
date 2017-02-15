'use strict';
// PART 1
// for (var i = 0; i < 100; i++) {
//   lockers.push("O");
// }
//
// for (var j = 2; j < 100; j++) {
//   for (var i = 0; i < lockers.length; i++) {
//     if (i%j === 0) {
//       if (lockers[i] === "O") {
//         lockers[i] = "C";
//       } else {
//         lockers[i] = "O";
//       }
//     }
//   }
// }
//
// var oCounter = 0;
// for (var i = 0; i < lockers.length; i++) {
//   if(lockers[i] === "O") {
//     oCounter++;
//   }
// }
// console.log(oCounter);
// PART 2
var lockers = [];
for (var i = 0; i < 100; i++) {
  lockers.push({number:i, status:"o"});
}
for (var j = 2; j < 100; j++) {
  for (var i = 0; i < lockers.length; i++) {
    if(i%j === 0) {
      if(lockers[i].status === "o") {
        lockers[i].status = "c";
      } else {
        lockers[i].status = "o";
      }
    }
  }
}
var openLockers = [];
for (var i = 0; i < lockers.length; i++) {
  if (lockers[i].status === "o") {
    openLockers.push(lockers[i]);
  }
}
console.log(openLockers);
