'use strict';
//Convert this to a function constructor
// var store = {
//   name: "Alfalfas",
//   location: "Boulder",
//   apples: 20,
//   sellApple: function(){
//     this.apples = this.apples -1;
//     console.log(`total apples remaining is ${this.apples}`);
//   }
// }

// function constructor
var Store = function(name, location, apples){
  this.name = name;
  this.location = location;
  this.apples = apples;

   return{
     name: this.name,
     location: this.location,
     apples: this.apples,
     sellApple: function(){
       this.apples = this.apples -1;
       console.log(`total apples remaining is ${this.apples}`);
     }

    // changes the state of the object
    //   this.changeStore = function changeStore(newStore) {
    //     this.name = newStore
    //   };

   };
};

Store.prototype.changeStore = function changeStore(newStore) {
  this.name = newStore;
};

var myStore = new Store("Whole Foods", "Boulder", 16);
var myStore2 = new Store("King Soopers", "Denver", 45);

Store.changeStore("Safeway");

console.log(newStore);
console.log(myStore);
myStore.sellApple();
console.log(myStore2);
myStore2.sellApple();
