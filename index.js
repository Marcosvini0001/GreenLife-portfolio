//window.alert("Página em desenvolvimento. >TOTALMENTE ILUSTRATIVO<");

var modal = document.getElementById("modalContato");
var btn = document.getElementById("contatoBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
