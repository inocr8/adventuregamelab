var Hero = require('./hero');
var Food = require('./food');
var assert = require('assert');

describe('Hero', function(){
// we need to confirm a hero object can be created.
  it('should create a hero with a name', function(){
  var hero1 = new Hero('Bob', 99, 'Cheese');
  assert.equal('Bob', hero1.name);
  });
  it('should create a hero with a healthy nature', function(){
  var hero1 = new Hero('Bob', 99, 'Cheese');
  assert.equal(99, hero1.health);
  });
  it('should create a hero with a favourite food', function(){
  var hero1 = new Hero('Bob', 99, 'Cheese');
  assert.equal('Cheese', hero1.favouriteFood);
  });
  it('should create a hero who can say his name', function(){
  var hero1 = new Hero('Bob', 99, 'Cheese');
  assert.equal('I am a hero, my name is ' + hero1.name, hero1.talk());
  });
});