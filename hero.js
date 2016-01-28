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
  this.flowersToWomans = function(womans){
    womans.hasFlower = true;
  },
  this.talkToMonster = function(monster){
    monster.hasHadANiceChat = true;
  },
  this.stompOn = function(rat){
    rat.squashedFlat = true;
  },
  this.eat = function(food){
    this.belly.push(food);
    if(food.poisoned === true){
      this.health -= food.replenishmentValue;
    }
    else if(this.favouriteFood === food.name){
    this.health += (food.replenishmentValue*1.5);
    }
    else{
      this.health += food.replenishmentValue;
    }
  }
  this.poop = function(){
    this.belly.shift();
  }
}

// var hero1 = new Hero('Bob', 99, 'Cheese')

// hero1.talk();

module.exports = Hero;