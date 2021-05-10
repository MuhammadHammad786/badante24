const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema({
    name: String,
    caregiver_type : String,
    price: String,
    country : String,
    age_range : String,
    gender : String,
    service_desc : String,
    zip_code : String,
    phone_no : String,
    email: String,
    city: String,
    ad_img : String,
    user_id : String,
    user_pic : String,
    status : String,
    postDate : {type :Date, default : Date.now },
});

const Ad = mongoose.model('Ad', AdSchema);

module.exports = Ad;