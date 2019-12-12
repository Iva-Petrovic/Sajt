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
function otvoriBlog() {
  location.replace("blog.html")
}
function otvoriKontakt() {
  location.replace("kontakt.html")
}

document.getElementById("twitter").onclick = function() {otvoriTwitter()};
document.getElementById("instagram").onclick = function() {otvoriInstagram()};
document.getElementById("youtube").onclick = function() {otvoriYouTube()};
document.getElementById("facebook").onclick = function() {otvoriFacebook()};

function otvoriTwitter() {
  window.open("https://twitter.com/", '_blank')
}
function otvoriInstagram() {
  window.open("https://www.instagram.com/", '_blank')
}
function otvoriYouTube() {
  window.open("https://www.youtube.com/", '_blank')
}
function otvoriFacebook() {
  window.open("https://www.facebook.com/", '_blank')
}

$(document).ready(function(){

  $nav= $('.nav');
  $toggleCollapse= $('.toggle-collapse');
  $toggleCollapse.click(function(){
    $nav.toggleClass('collapse');
  })

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout: 3000,
  dots:false,
  nav:true,
  navText: [$('owl-nav .owl-nav-prev'), $('owl-nav .owl-nav-next')]
});
});
