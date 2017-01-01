Car.prototype.paint = function protoPaint(){
  console.log("new coat of paint");
};

var redCar = newCar("red")



function Person(name){
  this.name = name;
}
// put the methods on the prototye
Person.prorotype.sayHello = function sayHello(){
console.log(“hello”)

var person1 = new Person(‘person1);

///

'use strict';

const Cup = function(beverageName, bevType, temp) {
  this.beverageName = beverageName;
  this.bevType = bevType;
  this.temp = temp;
  this.cupIsFull = true;
};

Cup.prototype.drinkUp = function() {
  console.log("You just drank " + this.bevType);
  return this.cupIsFull = false;
};

Cup.prototype.fillUp = function() {
  console.log("You just filled your cup up with " + this.bevType);
  return this.cupIsFull = true;
};

Cup.prototype.cupType = function() {
  if (this.temp === 'hot') {
    return this.cupType = 'hot';
  } else if (this.temp === 'cold') {
    return this.cupType = 'cold';
  } else if (this.temp !== 'hot' || this.temp !== 'cold') {
    return this.cupType = 'hot or cold';
  }
};

var coors = new Cup("coors", "beer", "cold");
var blackCoffee = new Cup("blackCoffee", "coffee", "hot");
var englishBreakfast = new Cup("englishBreakfast", "tea", "hot");
var rootbeerFloat = new Cup("rootbeerFloat", "pop/ice cream", "cold");
var water = new Cup("water", "water", "room temp");

console.log(coors);
coors.drinkUp();
console.log(coors);
coors.fillUp();
coors.drinkUp();
coors.fillUp();
coors.drinkUp();
console.log("Maybe you have had enough beer and need to move onto something non alcoholic!");
blackCoffee.drinkUp();
englishBreakfast.drinkUp();
water.drinkUp();
rootbeerFloat.drinkUp();
console.log("You have had plenty to drink, and all of your cups are empty.
