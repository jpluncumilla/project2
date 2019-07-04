var db = require("../models");
var NodeGeocoder = require("node-geocoder");
var sequelize = require("sequelize");

var geoCode = function(address){
  // Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "y0R1dFvQ1GY6Gkd9FmGAOeMDSJtTXAZq"
};

var geocoder = NodeGeocoder(options);

// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address

// Then use the Google Geocoder to geocode the address
return new Promise((resolve, reject) =>  geocoder.geocode(address, function(err, data) {

  if(err){
    reject(err)
  }

  // Then console log the result and stringify it.
  // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript

  resolve(data)
}))
};
module.exports = function(app) {
  // Get all houses
  app.get("/api/houses", function(req, res) {
    db.House.findAll({
      include: [db.People]
    }).then(function(dbHouse) {
      res.json(dbHouse);
    });
  });


  app.get("/api/houses/points", function(req, res) {
    db.House.findAll({
      include: [db.People]
    }).then(function(dbHouse) {

      res.json(dbHouse.map((house) => ({  id: house.id, point: house.point})));
    });
  });
  

  app.get("/api/houses/:id", function(req, res) {
    // 2; Add a join to include all of the House's People here
    db.House.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.People]
    }).then(function(dbHouse) {
      res.json(dbHouse);
    });
  });
  // Create a new House
  app.post("/api/houses", async function(req, res) {
    var { address } = req.body;
    var code = await geoCode(address);

    req.body.point = sequelize.fn('ST_GeomFromText', `POINT(${code[0].latitude} ${code[0].longitude})`)
 
    console.log(req.body)
    db.House.create(req.body).then(function(dbHouse) {
      res.json(dbHouse);
    });
  });


  // Delete an House by id
  app.delete("/api/houses/:id", function(req, res) {
    db.House.destroy({ where: { id: req.params.id } }).then(function(dbHouse) {
      res.json(dbHouse);
    });
  });
};

