var Hero = require('./hero');
var Food = require('./food');
var Rat = require('./rat')
var assert = require('assert');

describe('Food', function(){
// we need to confirm a food object can be created and check the food name.
  it('should create a food with a name that is Cheese', function(){
  var food1 = new Food('Cheese', 10);
  assert.equal('Cheese', food1.name);
  });
// we need to confirm a food object can be created and check the food replenishment value.
  it('should create a food with a replenishment value that is 10', function(){
  var food1 = new Food('Cheese', 10);
  assert.equal(10, food1.replenishmentValue);
  });
});