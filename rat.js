var Rat = function(name, weapon, poisonValue){
  this.name = name;
  this.weapon = weapon;
  this.poisonValue = poisonValue;
  this.foodLicked = [];
  this.talk = function(){
    return("I am a naughty little rat, my name is " + this.name + ", would you like to see my " + this.weapon + "?");
  }
  this.lickWithTongue = function(food){
    this.foodLicked.push(food);
    food.poisoned = true;
    food.poisonLevel = this.poisonValue;
    return("Yummy yummy, I'm licking all over this " + food.name);
  }
  this.attack = function(hero, attackLevel){
    hero.health -= attackLevel;
    return("Take some of this swedgin' with my mighty " + this.weapon);
  }
}

// var rat1 = new Rat('Jinky', 'axe', 5);
// console.log(rat1);

module.exports = Rat;