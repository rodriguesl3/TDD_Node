var assert = require('chai').assert
,   foo = 'bar'
,   beverages = {tea:['chai', 'matcha', 'oolong']};

assert.typeOf(foo,'string');
assert.typeOf(foo, 'string', 'foo is a string');
assert.equal(foo, 'bar', 'foo equal ´bar´');
assert.lengthOf(foo,3,'foo has 3 chars.');
assert.lengthOf(beverages.tea,3,'beverages has 3 types of tea');