const chai = require('chai');
const spies = require('chai-spies');
const app = require('./app');
const rewire = require('rewire');

//rewire loads the object through require but loads 2 additional methods
//app.__set__
//app.__get__
var app = rewire('./app');

chai.use(spies);
const expect = chai.expect;

describe('App', () => {
    var db = {
        saveUser: chai.spy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = chai.spy(app.handleSignup);
        spy('dummy@hotmail.com', 'asdfasdf');
        expect(spy).to.have.been.called.with('dummy@hotmail.com', 'asdfasdf');
    });

    it('should call saveUser with user object', () => {
        var email = 'dummy@hotmail.com';
        var pw = 'asdfasdf';
        app.handleSignup(email, password);
        expect(db.saveUser).to.have.been.called.with('dummy@hotmail.com', 'asdfasdf');
    });
});