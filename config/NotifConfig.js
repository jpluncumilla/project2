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
