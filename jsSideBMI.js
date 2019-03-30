function call2() {
  let lengte = document.getElementById('lengte');
  let gewicht = document.getElementById('gewicht');
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

  let lengteCm = lengteDone / 100;
  let BMInumber = gewichtDone / (lengteCm * lengteCm);
  let RoundBMInumber = BMInumber.toFixed(1);

  if (RoundBMInumber <= 18.5) {
    textColor = "#FFC966";
    marginleft = "3em";
  } else if (RoundBMInumber >= 18.5 && RoundBMInumber < 25) {
    textColor = "green";
    marginleft = "8em";
  } else if (RoundBMInumber >= 25 && RoundBMInumber < 27) {
    textColor = "#FFC966";
    marginleft = "13em";
  } else if (RoundBMInumber >= 27 && RoundBMInumber < 30) {
    textColor = "orange";
    marginleft = "15em";
  } else if (RoundBMInumber >= 30 && RoundBMInumber < 40) {
    textColor = "red";
    marginleft = "18em";
  } else if (RoundBMInumber >= 40) {
    textColor = "red";
    marginleft = "22em";
  }
  document.getElementById("resultaat").style.color = textColor;
  document.getElementById("arrowSpace").style.marginLeft = marginleft;
}
