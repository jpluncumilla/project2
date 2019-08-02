//IBM Notifications
var PushNotifications = require('ibm-push-notifications').PushNotifications;
var Notification = require('ibm-push-notifications').Notification;
var PushMessageBuilder = require('ibm-push-notifications').PushMessageBuilder;
var PushNotificationsApiKey = require('ibm-push-notifications').PushNotificationsWithApiKey;

//Initialize
var myPushNotifications = new PushNotificationsApiKey(
  PushNotifications.Region.US_SOUTH,
  "afd13273-f2b0-435e-a9dc-846816051e73",
  "E09aU9l0GdAPzxupTlQPMhObkslsRYnl7WqJ_l36_1Cv"
);

// Get authtoken
myPushNotifications.getAuthToken(function(hastoken, token) {
  console.log(hastoken, token);
});

module.exports = function() {
  var message = PushMessageBuilder.Message.alert("Help is on the way")
    .url("www.ibm.com")
    .build();
  var notificationExample = Notification.message(message).build();
};
