function ajax(gewichtDone, lengteDone) {
  let debug = false;
  let controlScript = "BMIcal.php";
  let xmlhttp = new XMLHttpRequest();
  let httpString = controlScript + "?gewicht=" + gewichtDone + "&lengte_cm=" + lengteDone;
  let httpRespone = "";
  if (debug) console.log(httpString);
  xmlhttp.open("GET", httpString, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      if (debug) console.log("http response = " + xmlhttp.responseText);
      httpRespone = xmlhttp.responseText;
      resultaat.innerHTML = httpRespone;
    }}
}
