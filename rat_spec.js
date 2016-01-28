var Rat = require('./rat');
var Food = require('./food');
var Hero = require('./hero');
var assert = require('assert');

describe('Rat', function(){
// we need to confirm a rat object can be created.
  it('should create a rat with a type', function(){
  var rat1 = new Rat('weeHairy');
  assert.equal('weeHairy', rat1.type);
  });
  it('should be the case that rats can spoil food', function(){
    var rat1 = new Rat('weeHairy');
    var food1 = new Food('Cheese', 10);
    rat1.peeOn(food1);
    assert.equal(food1.poisoned, true);
  });
  it('should be that when a rat has been squashed it should no longer be capable of peeing on food', function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    var rat1 = new Rat('weeHairy');
    var food1 = new Food('Cheese', 10);
    hero1.stompOn(rat1);
    rat1.peeOn(food1);
    assert.equal(food1.poisoned, false);
  });
});