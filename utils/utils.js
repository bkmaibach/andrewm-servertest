var add = function (a,b) {
    return a + b;
}

var square = function (x){
    return x*x;
}

var setName = function (user, fullName){
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}

var asyncAdd = function (a, b, callback) {
    setTimeout( callback(a + b), 2500)
}

module.exports = {
    add,
    square,
    setName,
    asyncAdd
};