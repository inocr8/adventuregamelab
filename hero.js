var Food = require('./food');

var Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.belly = [];
  this.talk = function(){
    // console.log("I am a hero, my name is " + this.name);
    return("I am a hero, my name is " + this.name);
  }
  this.eat = function(food){
    this.belly.push(food);
  }
}

// var hero1 = new Hero('Bob', 99, 'Cheese')

// hero1.talk();

module.exports = Hero;