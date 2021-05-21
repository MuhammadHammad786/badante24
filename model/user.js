const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    registerDate : {type :Date, default : Date.now },
});

const user = mongoose.model('user', userSchema);

module.exports = user;