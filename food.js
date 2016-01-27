var Food = function(name, replenishmentValue){
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisoned = false;
}

// var food1 = new Food('Bob', 99);
// console.log(food1);

module.exports = Food;
