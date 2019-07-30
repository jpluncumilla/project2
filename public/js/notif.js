var bmsPush = new BMSPush();
function callback(response) {
  alert(response.response);
}
var initParams = {
  appGuid: "afd13273-f2b0-435e-a9dc-846816051e73",
  clientSecret: "085a3ef7-f9ba-4391-8f0b-046b8a8a213c",
  appRegion: ".ng.bluemix.net"
};
bmsPush.initialize(initParams, callback);

bmsPush.register(function(response) {
  alert(response.response);
});
