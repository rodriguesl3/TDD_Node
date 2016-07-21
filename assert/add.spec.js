'use strict';

const assert = require('assert');
const add = require('./add');

assert.equal(3,add(1,2),"deve retornar 3");
assert.equal(12,add(1,2,3,6),"deve retornar 12");
assert.notEqual(20,add([1,2,3,6,4]),"deve ser diferente de 20");