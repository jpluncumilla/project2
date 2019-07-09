var img = document.getElementById("img");
var file = document.getElementById("file");
file.addEventListener("change", function(e) {
  var reader = new FileReader();

  reader.onload = function(e) {
    img.src = e.target.result;
  };

  reader.readAsDataURL(e.target.files[0]);
});
