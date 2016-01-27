var Rat = require('./rat');
var Food = require('./food');
var assert = require('assert');

describe('Rat', function(){
// we need to confirm a rat object can be created.
  it('should create a rat with a type', function(){
  var rat1 = new Rat('weeHairy');
  assert.equal('weeHairy', rat1.type);
  });
});