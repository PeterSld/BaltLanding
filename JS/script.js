AOS.init({
    easing: 'ease-in-quad',
})

var modal = document.getElementById("modal");
var button_modal = document.getElementById("button_modal")
button_modal.onclick = function() {
    modal.style.display = "flex";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}