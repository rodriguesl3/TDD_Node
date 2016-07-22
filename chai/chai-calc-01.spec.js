'use strict';

const Calc = require('./../Calc')
,     expect = require('chai').expect;

describe('Calc',()=>{
    describe("Calc sum of two number",()=>{
        it("the function sum return sum of two number",()=>{
            const sum = Calc.sum(5,5);
            expect(sum).to.be.a('number');
            expect(sum).to.be.equal(10);
            expect(Calc).to.have.property('sum');
        });
    });

    describe("Calc sub of two number",()=>{
        it("the function sub return sub of two number",()=>{
            const sum = Calc.sub(5,2);
            expect(sum).to.be.a('number');
            expect(sum).to.be.equal(3);
            expect(Calc).to.have.property('sub');
        });
    });

});