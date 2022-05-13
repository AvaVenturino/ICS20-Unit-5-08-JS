// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-08-JS/sw.js", {
    scope: "/ICS20-Unit-5-08-JS/",
  });
}

/**
 * Input
 */
function myButtonClicked() {
  const dividend = parseInt(document.getElementById("dividend").value);
  const divisor = parseInt(document.getElementById("divisor").value);
  var result = 0;
  
    while(dividend >= divisor){
        dividend - divisor
        result++;
    }
  document.getElementById("answer").innerHTML =
     " The answer would be " + result;
}
