/* eslint-disable camelcase */
var multer = require("multer");
var cloudinary = require("cloudinary");
var db = require("../models");
var fuzzybit = {};
var path = require('path');
    console.log(__dirname + "/../ar-nav/a-frame-webcam-primitive.html");

cloudinary.config({
  cloud_name: "self5656",
  api_key: "311159841643578",
  api_secret: "jh_BK_qs8aj9mEdf5Za8CwGtW_g"
});

const storage = multer.diskStorage({
  destination: "./files",
  filename(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load index page
  app.get("/form", function(req, res) {
    db.House.findOne({
      order: [["id", "DESC"]],
      include: [db.People]
    }).then(function(dbHouse) {
      res.render("form", {
        msg: "Welcome!",
        house: dbHouse
      });
    });
  });

  // Load House page and pass in a House by id
  app.get("/houses/:id", function(req, res) {
    db.House.findOne({
      where: { id: req.params.id },
      include: [db.People]
    }).then(function(dbHouse) {
      res.render("house", {
        houses: dbHouse
      });
    });
  });

  app.get("/houses/:id/people", function(req, res) {
    db.House.findOne({
      where: { id: req.params.id },
      include: [db.People]
    }).then(function(dbHouse) {
      res.render("example", {
        houses: dbHouse,
        id: req.params.id
      });
    });
  });

  app.post("/houses/:id/people", upload.single("file"), function(req, res) {
    var { name, age, pets, disability } = req.body;
    if (req.file) {
      cloudinary.v2.uploader.upload(
        `./files/${req.file.originalname}`,
        function(error, result) {
          console.log("====result", result);
          db.People.create({
            HouseId: req.params.id,
            name,
            disability,
            age,
            pets: pets === "true",
            picture: result.url
          }).then(function() {
            var link = `/houses/${req.params.id}/people`;
            return res.redirect(link);
          });
        }
      );
    } else {
      db.People.create({
        HouseId: req.params.id,
        name,
        disability,
        age,
        pets: pets === "true"
      }).then(function() {
        var link = `/houses/${req.params.id}/people`;
        return res.redirect(link);
      });
    }
  });

  app.get("/auth", function(req, res) {
    // if(req.get('Referrer') == 'https://iamjpyo.github.io'){
    fuzzybit[req.sessionID] = Math.random()
      .toString(32)
      .substring(2);
    res.redirect(302, "/marker/" + fuzzybit[req.sessionID]);
    // }
  });

  app.get("/marker/:fuzzybit", function(req, res) {
    console.log("user is abour to logged in with sessionID: " + req.sessionID);
    console.log("sessionid is: " + Object.keys(fuzzybit));
    // eslint-disable-next-line eqeqeq
    if (req.params.fuzzybit == fuzzybit[req.sessionID]) {
      console.log("user is abour to logged in with sessionID: " + req.sessionID);
      res.sendFile(path.join(__dirname + "/../ar-nav/a-frame-webcam-primitive.html"));
      delete fuzzybit[req.sessionID];
      console.log("user has logged in");
    } 
    else {
      res.redirect(302, "https://iamjpyo.github.io/QRcode/");
    }
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
