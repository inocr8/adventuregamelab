var Hero = require('./hero');
var Food = require('./food');
var Rat = require('./rat');
var Womans = require('./womans');
var Monster = require('./monster');
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
  it('should create a hero who can say his/her name', function(){
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
  it('should be the case that when hero eats food that is his/her favourite health should go up by replenishment value multiplied by 1.5', function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    var food1 = new Food('Cheese', 10);
    hero1.eat(food1);
    assert.equal(114, hero1.health);
  });
  it("should be the case that a hero should be able to empty his/her belly", function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    var food1 = new Food('Cheese', 10);
    hero1.eat(food1);
    hero1.poop();
    assert.equal(undefined,hero1.belly[0]);
  });
  it("should be the case that is a hero eats poisoned food their health should go down", function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    var food1 = new Food('Ham', 10);
    var rat1 = new Rat('weeHairy');
    rat1.peeOn(food1);
    hero1.eat(food1);
    assert.equal(89, hero1.health);
  });
  it('should be possible to create a womans with a name', function(){
    var womans1 = new Womans('Uthgerd');
    assert.equal('Uthgerd', womans1.name);
  });
  it('should be possible for a hero to give flowers to womans', function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    var womans1 = new Womans('Uthgerd');
    hero1.flowersToWomans(womans1);
    assert.equal(true, womans1.hasFlower);
  });
  it('should be possible for there to be  a monster with a name and type', function(){
    var monster1 = new Monster('Jeff', 'gelatinous cube');
    assert.equal('Jeff', monster1.name);
    assert.equal('gelatinous cube', monster1.type);
  });
  it('If only you could talk to the monsters', function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    var monster1 = new Monster('Jeff', 'gelatinous cube');
    hero1.talkToMonster(monster1);
    assert.equal(true, monster1.hasHadANiceChat);
  });
  it('should be possible for a hero to stomp on a rat', function(){
    var hero1 = new Hero('Bob', 99, 'Cheese');
    var rat1 = new Rat('weeHairy');
    hero1.stompOn(rat1);
    assert.equal(true, rat1.squashedFlat);
  });
});















