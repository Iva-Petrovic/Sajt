

document.getElementById("pocetna").onclick = function() {otvoriPocetnu()};
document.getElementById("galerija").onclick = function() {otvoriGaleriju()};
document.getElementById("rezervacije").onclick = function() {otvoriRezervacije()};
document.getElementById("blog").onclick = function() {otvoriBlog()};
document.getElementById("kontakt").onclick = function() {otvoriKontakt()};

function otvoriPocetnu() {
  location.replace("index.html")
}
function otvoriGaleriju() {
  location.replace("docs/galerija.html")
}
function otvoriRezervacije() {
  location.replace("docs/rezervacije.html")
}
function otvoriKontakt() {
  location.replace("docs/kontakt.html")
}
function otvoriBlog() {
  location.replace("docs/blog.html")
}

var brSlajda = 0;
prikazSlajda();

function prikazSlajda() {
  var i;
  var slajdovi = document.getElementsByClassName("slajdovi");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slajdovi.length; i++) {
    slajdovi[i].style.display = "none";  
  }
  brSlajda++;
  if (brSlajda > slajdovi.length) {brSlajda = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slajdovi[brSlajda-1].style.display = "block";  
  dots[brSlajda-1].className += " active";
  setTimeout(prikazSlajda, 2000);
}
