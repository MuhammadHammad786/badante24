const mongoose = require('mongoose');
const Ad = require('./07_userModel');

	
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

const app = express();

app.set('port', process.env.PORT || 3000);

// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', function (req, res) {
    res.send("hi");
	console.log("home");
});

// GET
app.get('/getAd', function (req, res) {
	Ad.find({ })
		.then((ad) => {
			// Return Array
			console.log('ad ', ad);
			res.json(ad);
		})
		.catch((err) => console.log('Err ', err));
	// res.json(req.query); // try: localhost:3000/?email=abc@example.com&pwd=12345
});

// POST
app.post('/post_ad', (req, res) => {
	console.log('req.body', req.body)
	res.end(JSON.stringify(req.body));
});


app.listen(app.get('port'), function () {
	console.log(`Express Started on: http://localhost:${app.get('port')}`);
});