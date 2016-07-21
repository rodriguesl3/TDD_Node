'use strict';

const assert = require('assert');

describe('Array',()=>{
    describe('#indexOf()',()=>{
        it('should return -1 when the valus is not present in array',()=>{
            assert.equal(-1,[1,2,3,5].indexOf(5));
            assert.equal(-1,[1,3,5,6,2].indexOf(8))
        })
    })
})