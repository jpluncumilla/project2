var bmsPush = new BMSPush();
function callback(response) {
  alert(response.response);
}
var initParams = {
  apikey: "E09aU9l0GdAPzxupTlQPMhObkslsRYnl7WqJ_l36_1Cv",
  appGuid: "afd13273-f2b0-435e-a9dc-846816051e73",
  clientSecret: "085a3ef7-f9ba-4391-8f0b-046b8a8a213c",
  // eslint-disable-next-line camelcase
  iam_apikey_description:
    "Auto-generated for key 1d20f5f5-6972-430e-b811-8ffd8ee0fa9f",
  // eslint-disable-next-line camelcase
  iam_apikey_name: "f84f1e29-3df1-4769-9637-090ee0fad7ff",
  // eslint-disable-next-line camelcase
  iam_role_crn: "crn:v1:bluemix:public:iam::::serviceRole:Writer",
  // eslint-disable-next-line camelcase
  iam_serviceid_crn:
    "crn:v1:bluemix:public:iam-identity::a/8b4c2284236e4513a9778885842ddf9d::serviceid:ServiceId-798c7bc4-57aa-44bf-b837-7dbdb75e4614",
  plan: "LITE",
  appRegion: ".ng.bluemix.net",
  url:
    "https://imfpush.ng.bluemix.net/imfpush/v1/apps/afd13273-f2b0-435e-a9dc-846816051e73"
};
bmsPush.initialize(initParams, callback);

bmsPush.register(function(response) {
  alert(response.response);
});
