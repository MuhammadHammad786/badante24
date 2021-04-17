const mongoose = require('mongoose');
const Ad = require('../model/');
const cors = require('cors');
const multer = require('multer');

mongoose.connect("mongodb+srv://admin:admin@cluster0.taguo.mongodb.net/badenti_service?retryWrites=true&w=majority", { useNewUrlParser: true });
// mongoose.connect('mongodb://admin:admin123@ds119652.mlab.com:19652/demo-uit-class')

mongoose.connection
.once('open', () => {
	console.log('Yahooo! Connection is Established.');
})
.on('error', (err) => {
	console.log('Err: ', err);
})

const express = require('express');
const bodyParser = require('body-parser');


var app = express();
app.use(cors({
	origin: "*"
}))
app.set('port', process.env.PORT || 4000);

// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// POST
app.post('/create_ad', (req, res) => {
	const newAd = new Ad({ 
		name: req.body.name,
        price: req.body.price,
        caregiver_type : req.body.caregiver_type,
        country : req.body.country,
        age_range : req.body.age_range,
        gender : req.body.gender,
        service_desc : req.body.service_desc,
        zip_code : req.body.zip_code,
        phone_no : req.body.phone_no,
        email: req.body.email,
        city: req.body.city,
        user_id: req.body.user_id,
        user_pic: req.body.user_pic
		
	});
    newAd.save()
    .then(() => console.log('saved Ad'))
    .catch((err) => console.log('Err ', err));
});


// GET
app.get('/', function (req, res) {
	Ad.find({ })
		.then((ad) => {
			// Return Array
			res.json(ad);
		})
		.catch((err) => console.log('Err ', err));
});

// view Ad
app.get("/view_ad/:id", (req, res) => {
	const id = req.params.id;
	console.log(id);
		Ad.findById( id )
		.then((ad) => {
			// Return Array
			res.json(ad);
		})
		.catch((err) => console.log('Err ', err));
});

// view Ad
app.get("/profile/:user_id", (req, res) => {
	const user_id = req.params.user_id;
	console.log(user_id);
		Ad.find( { "user_id" : user_id } )
		.then((proAd) => {
			// Return Array
			res.json(proAd);
		})
		.catch((err) => console.log('Err ', err));
});

if(process.env.NODE_ENV=="production")
{
	app.use(express.static('../cleint/build'))
	const path = require('path')
	app.get("*",(req,res) => {
		res.sendFile(path.resolve(__dirname,'cleint','build','index.html'))
	})
}


app.listen(app.get('port'), function () {
	console.log(`Express Started on: http://localhost:${app.get('port')}`);
});