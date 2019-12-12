
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
function validateForm() {
  var name = document.myForm.fname.value;
  var num= document.myForm.number.value;
  var cbox=document.forms["myForm"]["usluga"];
  if (name == ""  || name==null) {
    alert("Molimo unesite Vaše ime");
    return false;
  }
  if (num == ""  || num==null) {
    alert("Molimo unesite Vaš broj telefona");
    return false;
  }
  if(
    cbox[0].checked==false &&
    cbox[1].checked==false &&
    cbox[2].checked==false &&
    cbox[3].checked==false &&
    cbox[4].checked==false &&
    cbox[5].checked==false &&
    cbox[6].checked==false &&
    cbox[7].checked==false &&
    cbox[8].checked==false &&
    cbox[9].checked==false
  ){
alert("Izaberite uslugu");
return false;
  }else{
    alert("Uspesno ste zakazali termin! Vidimo se!");
  }

  }
  function validateNum(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  
