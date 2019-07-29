AFRAME.registerComponent("istouched", {
  init: function() {
    this.el.addEventListener("click", function(evt) {
      console.log("I was clicked at: ", evt.detail.intersection.point);
      console.log($(this).attr("mtl", "#marker-selected-mtl"));
      let dataID = $(this).attr("houseid");
      loadHouseFunc(dataID);
    });
  }
});



famOverlay.click(function() {
  famModal.hide();
  famOverlay.hide();
  openned = false;
});