const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminLoginSchema = new Schema({
    adminEmail: String,
    adminPassword: String,
});

const adminLogin = mongoose.model('adminLogin', adminLoginSchema);

module.exports = adminLogin;