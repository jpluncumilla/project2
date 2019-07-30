//Initialize
var myPushNotifications = new PushNotificationsApiKey(
  PushNotifications.Region.US_SOUTH,
  "your-bluemix-app-guid",
  "your-bluemix-push-apikey"
);

// Get authtoken
myPushNotifications.getAuthToken(function(hastoken, token) {
  console.log(hastoken, token);
});
