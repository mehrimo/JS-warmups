'use strict';

var car = {
  color: 'blue',
  gasTankFull: true,
  drive: function(){
      car.gasTankFull = false;
    },
    fillTank: function(){
      car.gasTankFull = true;
    }
};
console.log(car)
car.drive();

var car2 = {
  color: 'red',
  gasTankFull: true,
  drive: function(){
      car.gasTankFull = false;
    },
    fillTank: function(){
      car.gasTankFull = true;
    }
};


//
// function fillUp(car) {
//   if (car.driving = true) {
//   car.gasFull = false; }
// };
//
// function drive(car) {
//   car.gasFull = false;
// };
//
// drive(car)

console.log(car);
