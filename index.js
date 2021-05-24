const mongoose = require("mongoose");
const Ad = require("./model/");
const user = require("./model/user");
const adminLogin = require("./model/adminLogin");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.taguo.mongodb.net/badenti_service?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
// mongoose.connect('mongodb://admin:admin123@ds119652.mlab.com:19652/demo-uit-class')

mongoose.connection
  .once("open", () => {
    console.log("Yahooo! Connection is Established.");
  })
  .on("error", (err) => {
    console.log("Err: ", err);
  });

const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.set("port", process.env.PORT || 4000);

// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// POST
app.post("/create_ad", (req, res) => {
  const newAd = new Ad({
    name: req.body.name,
    price: req.body.price,
    caregiver_type: req.body.caregiver_type,
    country: req.body.country,
    age_range: req.body.age_range,
    gender: req.body.gender,
    service_desc: req.body.service_desc,
    zip_code: req.body.zip_code,
    phone_no: req.body.phone_no,
    email: req.body.email,
    city: req.body.city,
    user_id: req.body.user_id,
    ad_img: req.body.ad_img,
    user_pic: req.body.user_pic,
    status: "pending",
  });
  newAd
    .save()
    .then(() => console.log("saved Ad"))
    .catch((err) => console.log("Err ", err));
});

// GET
app.get("/all_ads", function (req, res) {
  Ad.find({}).sort({postDate: -1})
    .then((ad) => {
      // Return Array
      res.json(ad);
    })
    .catch((err) => console.log("Err ", err));
});

// top 4 ads
app.get("/top_ads", function (req, res) {
  Ad.find({}).limit(4)
    .then((ad) => {
      // Return Array
      res.json(ad);
      console.log(ad);
    })
    .catch((err) => console.log("Err ", err));
});

// view Ad
app.get("/view_ad/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Ad.findById(id)
    .then((ad) => {
      // Return Array
      res.json(ad);
    })
    .catch((err) => console.log("Err ", err));
});

// profile view Ad
app.get("/filters/", (req, res) => {
  let ageRange = req.query.ageRange;
  let gender = req.query.gender;
  let location = req.query.location;
  console.log(ageRange);
  console.log(location);
  console.log(gender);
  // Ad.find({ "gender" : gender })
  Ad.find({ age_range: ageRange, gender: gender, country: location }).sort({postDate: -1})
    .then((proAd) => {
      // Return Array
      res.json(proAd);
      console.log(proAd);
    })
    .catch((err) => console.log("Err ", err));
});

// profile view Ad
app.get("/profile/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  console.log(user_id);
  Ad.find({ user_id: user_id }).sort({postDate: -1})
    .then((proAd) => {
      // Return Array
      res.json(proAd);
    })
    .catch((err) => console.log("Err ", err));
});

// home view Ad
app.get("/home/", (req, res) => {
  Ad.find({ status: "active" }).sort({postDate: -1})
    .then((proAd) => {
      // Return Array
      res.json(proAd);
    })
    .catch((err) => console.log("Err ", err));
});
// pendingAds view Ad
app.get("/pendingAds/", (req, res) => {
  Ad.find({ status: "pending" })
    .then((proAd) => {
      // Return Array
      res.json(proAd);
    })
    .catch((err) => console.log("Err ", err));
});

// rejectedAds view Ad
app.get("/rejectedAds/", (req, res) => {
  Ad.find({ status: "rejected" })
    .then((proAd) => {
      // Return Array
      res.json(proAd);
    })
    .catch((err) => console.log("Err ", err));
});

// delete ad
app.delete("/deleteAd/:Ad_id", async (req, res) => {
  const Ad_id = req.params.Ad_id;
  console.log(Ad_id);
  await Ad.findByIdAndRemove(Ad_id).exec();
  res.send("item deleted", Ad_id);
});

// Reject ad
app.get("/rejectAd/:Ad_id", async (req, res) => {
  const Ad_id = req.params.Ad_id;
  console.log(Ad_id);

  try {
    await Ad.findById(Ad_id, (error, AdtoReject) => {
      AdtoReject.status = "rejected";
      AdtoReject.save();
      res.send("updated");
    });
  } catch (err) {
    console.log(err);
  }
});

// approve ad
app.get("/approveAd/:Ad_id", async (req, res) => {
  const Ad_id = req.params.Ad_id;
  console.log(Ad_id);

  try {
    await Ad.findById(Ad_id, (error, AdtoApprove) => {
      AdtoApprove.status = "active";
      AdtoApprove.save();
      res.send("updated");
    });
  } catch (err) {
    console.log(err);
  }
});

// registration
app.post("/register", (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  user.find({ email: email })
  .then((regResult) => {
    if(regResult.length > 0){
      res.send({ message: "Email already exist"})
    }else{
      bcrypt.hash(password,saltRounds,(err,hash)=>{
        if(err){
          console.log(err);
        }
        const newUser = new user({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          });
          newUser.save()
          .then(() => {
            console.log("saved user");
            user.find({ email: req.body.email })
            .then((result) => {
              // Return Array
              res.send(result);
            })
            .catch((err) => {
              console.log("Err ", err);
              res.send({err:err});
            });
            
          })
          .catch((err) => console.log("Err ", err));
      })
    }
  })
  .catch((err) => {
    console.log("Err ", err);
    res.send({err:err});
  });

});

// login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  user.find({ email: email })
  .then((result) => {
    // Return Array
    if(result.length > 0){
      bcrypt.compare(password,result[0].password,(error, response) => {
        if(response){
          res.send(result);
        }else{
          res.send({ message: "Incorrect password"})
        }
      })
    }else{
      res.send({ message: "user doesn't exist"})
    }
  })
  .catch((err) => {
    console.log("Err ", err);
    res.send({err:err});
  });
    
});

// GET
app.get("/all_users", function (req, res) {
  user.find({}).sort({registerDate: -1})
    .then((ad) => {
      // Return Array
      res.json(ad);
    })
    .catch((err) => console.log("Err ", err));
});

// adminlogin
app.post("/adminLogin", (req, res) => {
  const adminEmail = req.body.adminEmail;
  const adminPassword = req.body.adminPassword;
  adminLogin.find({ adminEmail: adminEmail })
  .then((adminResult) => {
    console.log(adminResult);
    // Return Array
    if(adminResult.length > 0){
      bcrypt.compare(adminPassword,adminResult[0].adminPassword,(error, response) => {
        if(response){
          res.send(adminResult);
        }else{
          res.send({ message: "Incorrect Password"})
        }
      })
    }else{
      res.send({ message: "Incorrect Email"})
    }
  })
  .catch((err) => {
    console.log("Err ", err);
    res.send({err:err});
  });
    
});

// updateAdminPass
app.post("/updateAdminPass", (req, res) => {

  password = req.body.password;
  bcrypt.hash(password,saltRounds,(err,hash)=>{
    
    adminLogin.findOneAndUpdate({adminEmail: "admin@gmail.com"}, {$set: {adminPassword: hash }}, {new: true}, function(err,doc) {
      if (err) { throw err; res.send({message: "something went wrong"})}
      else { console.log("Updated"); res.send(doc)}
    });  
  })

});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(app.get("port"), function () {
  console.log(`Express Started on: http://localhost:${app.get("port")}`);
});
