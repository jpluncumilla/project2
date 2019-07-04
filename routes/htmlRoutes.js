var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.House.findAll({
      include: [db.People]
    }).then(function(dbHouse) {
      res.render("index", {
        msg: "Welcome!",
        houses: dbHouse
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

  app.get("/houses/:id/people", function(req, res){
    db.House.findOne({
      where: { id: req.params.id },
      include: [db.People]
    }).then(function(dbHouse) {
      res.render("example", {
        house: dbHouse,
        id: req.params.id
      });
    });
  });

  app.post("/houses/:id/people", function(req, res){
    var { name, age, pets, disability  } = req.body
    db.People.create({
      HouseId: req.params.id,
      name,
      disability,
      age,
      pets: pets === "true"
    }).then(function(){
      var link = `/houses/${req.params.id}/people`
      return res.redirect(link)
    });
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};