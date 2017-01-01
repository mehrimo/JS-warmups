'use strict';
// function constructor

var Car = function(color){
  this.color = color;

  return {
    color: this.color,
    gasTankFull: true,
    drive: function(){
      this.gasTankFull = false;
    },
    fillTank: function(){
      this.gasTankFull = true;
    }
  }
}

var redCar = new Car("red");
var blueCar = new Car("blue");

console.log(redCar);
console.log(blueCar);
redCar.drive();
console.log(redCar);
