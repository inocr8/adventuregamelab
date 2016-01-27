var Hero = require('./hero');
var Food = require('./food');
var Rat = require('./rat')
var assert = require('assert');

describe('Rat', function(){
// we need to confirm a rat object can be created and check the rat name.
  it('should create a rat with a name that is Jinky', function(){
  var rat1 = new Rat('Jinky', 'axe', 5);
  assert.equal('Jinky', rat1.name);
  });
// we need to confirm a rat object can be created and check the rat weapon.
  it('should create a rat with a weapon which is an axe', function(){
  var rat1 = new Rat('Jinky', 'axe', 5);
  assert.equal('axe', rat1.weapon);
  });
// we need to confirm a rat object can be created and check the rat poison value.
  it('should create a rat with a poison value of 5', function(){
  var rat1 = new Rat('Jinky', 'axe', 5);
  assert.equal(5, rat1.poisonValue);
  });
// we need to check that the rat has a touched food array created that starts empty
  it('should be the case that the rat has a foodLicked array the starts empty', function(){
  var rat1 = new Rat('Jinky', 'axe', 5);
  assert.equal(undefined, rat1.foodLicked[0]);
  });
// we need to confirm a rat object can be created and check that the rat can talk.
  it('should create a rat who can say his name which is Jinky and his weapon which is an axe', function(){
  var rat1 = new Rat('Jinky', 'axe', 5);
  assert.equal('I am a naughty little rat, my name is Jinky, would you like to see my axe?', rat1.talk());
  });
// we need to confirm a rat object can be created with a food object and check the rat can lick the food to poison it.
  it('should make the rat get his licking on to poison the food to his poisonValue', function(){
    var rat1 = new Rat('Jinky', 'axe', 5);
    var food1 = new Food('Ham', 10);
    rat1.lickWithTongue(food1);
    assert.equal('Ham', rat1.foodLicked[0].name);
    assert.equal(5, food1.poisonLevel);
  });
});