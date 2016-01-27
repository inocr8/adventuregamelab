var Rat = function(name, weapon, poisonValue){
  this.name = name;
  this.weapon = weapon;
  this.poisonValue = poisonValue;
  this.foodTouched = [];
}

// var rat1 = new Rat('Jinky', 'axe', 5);
// console.log(rat1);

module.exports = Rat;