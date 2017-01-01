'use strict';
//create a constructor for a cup that can be used as various types of cups (hot cups, cold cups)
var Cup = function(temp, contents, color) {
  this.temp = temp;
  this.contents = contents;
  this.color = color;
  this.cupIsFull = true;


Cup.prototype.makeDrink = function() {
  console.log(`I would like a ${this.temp} ${this.contents} in a ${this.color} mug`);
};

Cup.prototype.refillCup = function(){
  console.log(`You just filled your drink with ${this.contents}`);
  return this.cupIsFull = false;

  };

}
    // return{
    //   temp: this.temp,
    //   contents: this.contents,
    //   color: this.color,
    //   makeDrink: function (){
    //     console.log(`I would like a ${this.temp} ${this.contents} in a ${this.color} mug`);
    //   },
    //   refillCup: function(){
    //     this.cupIsEmpty = true;
    //   }
    //
    // };

var myDrink = new Cup("hot", "coffee", "red")
var myDrink2 = new Cup("iced", "tea", "white")

console.log(myDrink);
myDrink.makeDrink();
console.log(myDrink2);
myDrink2.refillCup();
