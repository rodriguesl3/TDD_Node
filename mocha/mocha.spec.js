'use strict';

var calc = require('./../Calc');
var assert = require('assert');

describe('Calculate',()=>{
    it('Function sum return sum of two numbers', ()=>{
            const sum = calc.sum(5,5);
            assert.equal(10, sum, "test will is equal 10");
            assert.deepEqual(10,sum);
            assert.deepStrictEqual(10,sum);
        });
        it('Function sub return sub of two numbers and return 3', ()=>{
            const sub = calc.sub(2,5);
            assert.equal(-3, sub, "test will is equal 10");
            assert.deepEqual(-3,sub);
            assert.deepStrictEqual(-3,sub);
        });
})

