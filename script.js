let bereken = document.getElementById('bereken');
let lengte = document.getElementById('lengte');
let gewicht = document.getElementById('gewicht');
let resultaat = document.getElementById('resultaat');
let input = document.getElementById('input');
gewicht.addEventListener('focus', function() {

})

lengte.addEventListener('focus', function() {

})

bereken.addEventListener('click', function() {
  let keuzeLengte = document.getElementById('keuzeLengte');
  let keuzeGewicht = document.getElementById('keuzeGewicht');
  if (keuzeLengte.value == "in") {
    lengteDone = lengte.value * 2.54;
  }
  if (keuzeGewicht.value == "lb") {
    gewichtDone = gewicht.value / 2.205;
  }
  if (keuzeLengte.value == "cm") {
    lengteDone = lengte.value;
  }
  if (keuzeGewicht.value == "kg") {
    gewichtDone = gewicht.value;
  }
 ajax(gewichtDone, lengteDone);
})

function clearResult() {

}
