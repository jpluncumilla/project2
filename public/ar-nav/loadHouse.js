let famOverlay = $('<div class="form-overlay">');
let famModal = $('<div id="modal-form">');
let famList = $("<ul>");
const genericFamMember = $('<li class="service-list">');

function hasPets(bool) {
  if (bool == false) {
    return "No";
  } else if (bool == true) {
    return "Yes";
  }
}
let openned = false;

function loadHouseFunc(id) {
  if (openned == false) {
    famModal.show();
    famOverlay.show();
    famModal.empty();
    genericFamMember.empty();

    famModal.appendTo("body");
    famOverlay.appendTo("body");

    let person = null;
    $.getJSON("/api/houses/" + id, function(json) {
      for (let i = 0; i < json.People.length; i++) {
        person = genericFamMember;
        let j = json.People[i].id;
        let picture = $(
          '<img id="' +
            j +
            '" src="' +
            json.People[i].picture +
            '" alt="person Image" width="120" height="120">'
        );
        picture.attr("onerror", "this.onerror=null; this.src='avatar.svg'");

        let personStats =
          " Age: " +
          json.People[i].age +
          "<br> Disability: " +
          json.People[i].disability +
          "<br> Has pets? " +
          hasPets(json.People[i].pets);
        let groupedStats = $("<div class='row'>");
        picture.appendTo(person);
        $("<h3>")
          .html(json.People[i].name)
          .appendTo(groupedStats);
        $("<p>")
          .html(personStats)
          .appendTo(groupedStats);
        groupedStats.appendTo(person);
        person.appendTo(famModal);
      }
    });
    openned = true;
  }
}
