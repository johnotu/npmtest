const should = require('chai').should(),
    say = require('../index'),
    sayName = say.sayName,
    sayAge = say.sayAge;

describe('#sayName', () => {
    it('Says the input name', () => {
        sayName('name').should.equal('Your name is name');
    });
});

describe('#sayAge', () => {
    it('Says the input age', () => {
        sayAge('age').should.equal('You are age year(s) old');
    });
});
