var Food = require('./food');
var Rat = require('./rat');

var Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.belly = [];
  this.talk = function(){
    return("I am a hero, my name is " + this.name);
  }
  this.eat = function(food){
    this.belly.push(food);
    if(food.poisoned != true){
      if(this.favouriteFood === food.name){
      this.health += (food.replenishmentValue*1.5);
      }
      else{
        this.health += food.replenishmentValue;
      }
    }
    if(food.poisoned === true){
      this.health -= food.poisonLevel;
    }
  }
  this.plop = function(food){
    this.belly.shift(food);
    return("Oh sweet Jesus, what the hell did I eat that for?");
  }
}

// var hero1 = new Hero('Bob', 99, 'Cheese')

// hero1.talk();

module.exports = Hero;