var buttonBox = document.getElementById("button-container");
var popup = document.getElementById('popup');

buttonBox.addEventListener('mouseover', function() {
  popup.classList.add('show');
});

buttonBox.addEventListener('mouseout', function() {
  popup.classList.remove('show');
});

function toggleDescription() {
    var descriptionBox = document.getElementById("description");
    var buttonBox = document.getElementById("button-container");
    if (descriptionBox.style.right === "-275px") {
        buttonBox.style.right = "5px";
        descriptionBox.style.right = "5px";
    } else {
        buttonBox.style.right = "5px";
        descriptionBox.style.right = "-275px";
    }
}