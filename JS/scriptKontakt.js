
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

const tabItems= document.querySelectorAll('.tab-item');
const tabContentItems= document.querySelectorAll('.tab-content-item');
function selectItem(e){
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}
function removeBorder(){
  tabItems.forEach(item=> item.classList.remove('tab-border'));
}
function removeShow(){
  tabContentItems.forEach(item=> item.classList.remove('show'));
}
tabItems.forEach(item => item.addEventListener('click',selectItem));

var myWindow;

function openWin() {
  myWindow = window.open("../docs/mapa.html", "myWindow", "width=500,height=500");
  myWindow.document.write("<p>This is 'myWindow'</p>");
}

function closeWin() {
  myWindow.close();
}
