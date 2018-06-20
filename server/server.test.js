const request = require('supertest');
const expect = require('chai').expect;

var app = require('./server.js').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return 404 error response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect( (res) => {
                    expect(res.body).to.have.property('error', 'Page not found');
                })
                .end(done);
        });
    });
    
    describe('GET /users', () => {
        it('should return my user object', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect ( (res) => {
                expect(res.body).to.deep.include( 
                    { name: 'Andrew', age: 27 }
                )
            })
            .end(done);
        })
    });    
});

