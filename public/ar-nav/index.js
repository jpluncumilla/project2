// Get references to page elements
var $addressInput = $("#house-address");
// var $housePoint = $("#point");
var $submitBtn = $("#submit");

// The API object contains methods for each kind of request we'll make
var API = {
  saveHouse: function(house) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/houses",
      data: JSON.stringify(house)
    });
  },

  getHouses: function() {
    return $.ajax({
      url: "api/houses",
      type: "GET"
    });
  },
  deleteHouse: function(id) {
    return $.ajax({
      url: "api/houses/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshHouses = function() {
  window.location.reload();
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  // point: $housePoint.val().trim()

  var house = {
    address: $addressInput.val().trim()
  };

  // (!(house.address && house.point))
  if (!house.address) {
    alert("You must enter an address!");
    return;
  }

  API.saveHouse(house).then(function() {
    refreshHouses();
  });

  $addressInput.val("");
  // $housePoint.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteHouse(idToDelete).then(function() {
    refreshHouses();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$(".delete").click(handleDeleteBtnClick);
