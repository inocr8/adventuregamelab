var Hero = require('./hero');
var assert = require('assert');

describe('Hero', function(){
// we need to confirm a hero object can be created.
  it('should create a hero with a name', function(){
  var hero1 = new Hero('Bob', 99, 'Cheese')
  assert.equal('Bob', hero1.name);
  });
  it('should create a hero with a healthy nature', function(){
  var hero1 = new Hero('Bob', 99, 'Cheese')
  assert.equal(99, hero1.health);
  });
});