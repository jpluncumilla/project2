require("dotenv").config();
require("./config/NotifConfig.js");
var express = require("express");
var cookieParser = require("cookie-parser");
var exphbs = require("express-handlebars");

//IBM Notifications
var PushNotifications = require('ibm-push-notifications').PushNotifications;
var Notification = require('ibm-push-notifications').Notification;
var PushMessageBuilder = require('ibm-push-notifications').PushMessageBuilder;
var PushNotificationsApiKey = require('ibm-push-notifications').PushNotificationsWithApiKey;

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
var session = require("express-session");
app.use(cookieParser());
app.use(
  session({
    secret: "project2groupfamstring", // just a long random string
    resave: false,
    saveUninitialized: true
  })
);

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
