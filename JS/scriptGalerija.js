
document.getElementById("pocetna").onclick = function() {otvoriPocetnu()};
document.getElementById("galerija").onclick = function() {otvoriGaleriju()};
document.getElementById("rezervacije").onclick = function() {otvoriRezervacije()};
document.getElementById("blog").onclick = function() {otvoriBlog()};
document.getElementById("kontakt").onclick = function() {otvoriKontakt()};

function otvoriPocetnu() {
  location.replace("../index.html")
}
function otvoriGaleriju() {
  location.replace("galerija.html")
}
function otvoriRezervacije() {
  location.replace("rezervacije.html")
}
function otvoriKontakt() {
  location.replace("kontakt.html")
}
function otvoriBlog() {
  location.replace("blog.html")
}

