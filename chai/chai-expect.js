var expect = require('chai').expect
,   foo = 'bar'
,   beverages = {tea:['chai', 'matcha', 'oolong']};

expect(foo).to.be.a('string');
expect(foo).to.be.equal('bar');
expect(foo).to.have.length(3);
expect(beverages).to.have.property('tea').with.length(3);