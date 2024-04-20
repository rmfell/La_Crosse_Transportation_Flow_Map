function toggleDescription() {
    var descriptionBox = document.getElementById("description");
    if (descriptionBox.style.right === "-275px") {
        descriptionBox.style.right = "0";
    } else {
        descriptionBox.style.right = "-275px"; 
    }
}
