<?php
  $gewicht = $_GET["gewicht"];
  $lengte = $_GET["lengte_cm"];
  $lengte = $lengte / 100;
  BMIcalc($gewicht,$lengte);

  function BMIcalc($gewicht,$lengte) {
    $som = $gewicht / ($lengte * $lengte);
    if (round($som,1) < 60) {
      echo "<br>", round($som,1);
    } else {
      echo "<br>Incorrect input!";
    }

    if ($som <= 18.5) {
      echo "<br>Ondergewicht";
    }
    if ($som >= 18.5 && $som < 25) {
      echo "<br>Normaal/gezond";
    }
    if ($som >= 25 && $som < 27) {
      echo "<br>Licht overgewicht";
    }
    if ($som >= 27 && $som < 30) {
      echo "<br>Matig overgewicht";
    }
    if ($som >= 30 && $som <= 40) {
      echo "<br>Obesitas";
    }
    if ($som > 40 && $som <= 60) {
      echo "<br>Morbide obesitas";
    }
    if ($som > 60) {
      echo "<br>Please use a realistic number.";
    }
  }
 ?>
