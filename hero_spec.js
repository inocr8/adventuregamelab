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
  it('should be the case that the hero has a belly in which to put food into', function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    assert.equal(undefined,hero1.belly[0]);
  });
  it('should make make the hero eat food', function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    var food1 = new Food('Ham', 10);
    hero1.eat(food1);
    assert.equal('Ham', hero1.belly[0].name);
  });
  it('should be when hero eats it makes health go up by the same amount as food replenishment value', function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    var food1 = new Food('Ham', 10);
    hero1.eat(food1);
    assert.equal(109, hero1.health);
  });
  it('should be the case that when hero eats his favourite food, health should go up by replenishment value x1.5', function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    var food1 = new Food('Cheese', 10);
    hero1.eat(food1);
    assert.equal(114, hero1.health);
  });
  it('should be that the hero drop his kegs and lets loose his first belly item', function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    var food1 = new Food('Cheese', 10);
    hero1.eat(food1);
    hero1.plop(food1);
    assert.equal(undefined, hero1.belly[0]);
    assert.equal('Oh sweet Jesus, what the hell did I eat that for?', hero1.plop());
  });
});















