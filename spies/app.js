const db = require('./db');

module.exports.handleSignup = (email, password) => {
    //The funciton should:
    //Check if the user already exists
    //Add the user to the database
    //Send a welcome email
    db.saveUser({email, password})

}