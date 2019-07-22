function spawnMarkers() {
  let posX;
  let posY;

  $.getJSON("/api/houses/points", function(json) {
    for (let i = 0; i < json.length; i++) {
      posX = json[i].point.coordinates[0];
      posY = json[i].point.coordinates[1];
      let crossPos = "'longitude: " + posY + ";" + "latitude: " + posX + "'";

      let newEnt = $("<a-obj-model gps-place=" + crossPos + ">");
      newEnt.attr("data-id", i+1);
      newEnt.attr({
        //    "gps-place": crossPos,
        id: "house" + i,
        istouched: "",
        src: "#marker-obj",
        mtl: "#marker-mtl"
      });

      newEnt.appendTo("#a-marker-group");
    }

    console.log("JSON Data: " + json[0].point.coordinates[0]);
  });
}
//$("<a-sphere>")

// <a-sphere gps-place="longitude: -80.2728826; latitude: 26.2393094" radius="1.25" color="#EF2D5E"></a-sphere>
