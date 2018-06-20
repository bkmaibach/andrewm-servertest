const utils = require('./utils.js');
const expect = require('chai').expect;

it('should add two numbers', () => {
    var res = utils.add(3,11);
    expect(res).to.be.a('number');
    expect(res).to.equal(14);
});

it('should square a number', () => {
    var res = utils.square(3);
    expect(res).to.be.a('number');
    expect(res).to.equal(9);
});

it('should verify first and last names are set', () => {
    var aUser = { age: 26, sex: 'm', loc: 'Orlando'};
    var moddedUser = utils.setName(aUser, "Queef Carbuncle");
    expect(moddedUser).to.have.property('firstName', "Queef");
    expect(moddedUser).to.have.property('lastName', "Carbuncle");
    expect(moddedUser).to.equal(aUser);
});