const utils = require('./utils.js');
const expect = require('chai').expect;

//A top level describe block is good for organizing module tests into easily identifyable sections
describe('Utils', () => {

    //When a particular method requires more than one test, it is a good idea to
    //nest a second describe block inside the first, using the hashtag to denote the function
    //being tested, in this case #add
    describe('#add', () => {
        it('should return a number', () => {
            var res = utils.add(3,11);
            expect(res).to.be.a('number');
        });

        it('should return the proper sum', () => {
            var res = utils.add(3,11);
            expect(res).to.equal(14);
        })
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

    it('should aync add two numbers', (done) => {
        var res = utils.asyncAdd(4, 5, (sum) => {
            expect(sum).to.be.a('number');
            expect(sum).to.equal(9);
            done();
        });
    });
});

