var Food = require('./food');
var Rat = function(type){
  this.type = type;
  this.peeOn = function(food){
    food.poisoned = true;
  }
}

module.exports = Rat;