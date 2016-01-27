var Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.talk = function(){
    console.log("I am a hero, my name is " + this.name);
  }
}

// var hero1 = new Hero('Bob', 99, 'Cheese')

// console.log(hero1);

module.exports = Hero;