const request = require('supertest');
const expect = require('chai').expect;

var app = require('./server.js').app;

it('should return 404 error response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect( (res) => {
            console.log('INSIDE EXPECT CALLBACK')
            expect(res.body).to.have.property('error', 'Page not found');
        })
        .end(done);
});

it('should return my user object', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect ( (res) => {

        console.log(res.body[1]);
        expect(res.body).to.deep.include( 
            //res.body[1]
            { name: 'Andrew', age: 27 }
        )
    })
    .end(done);
})