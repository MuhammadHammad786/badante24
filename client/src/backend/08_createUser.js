const Ad = require('./07_userModel');


function addUser() {

    console.log('adding user');

    const joe = new Ad({ name: 'Doe', age : '18' , gender : 'male' });
    joe.save()
    .then(() => console.log('saved user'))
    .catch((err) => console.log('Err ', err));

}

module.exports = addUser;