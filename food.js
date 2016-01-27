var Food = function(name, replenishmentValue){
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisoned = false;
  this.poisonLevel = 0;
}

// var food1 = new Food('Bob', 99);
// console.log(food1);

module.exports = Food;
