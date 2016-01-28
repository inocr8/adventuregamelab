var Food = require('./food');
var Rat = function(type){
  this.type = type;
  this.squashedFlat = false;
  this.peeOn = function(food){
    if(this.squashedFlat === false){
    food.poisoned = true;
    }
  }
}

module.exports = Rat;