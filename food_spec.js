var Hero = require('./hero');
var Food = require('./food');
var assert = require('assert');

describe('Food', function(){
// we need to confirm a food object can be created.
  it('should create a food with a name', function(){
  var food1 = new Food('Cheese', 10);
  assert.equal('Cheese', food1.name);
  });
  // it('should create a food with a healthy nature', function(){
  // var food1 = new Food('Cheese', 10);
  // assert.equal(99, food1.health);
  // });
  // it('should create a food with a favourite food', function(){
  // var food1 = new Food('Cheese', 10);
  // assert.equal('Cheese', food1.favouriteFood);
  // });
  // it('should create a food who can say his name', function(){
  // var food1 = new Food('Cheese', 10);
  // assert.equal('I am a food, my name is ' + food1.name, hero1.talk());
  // });
});