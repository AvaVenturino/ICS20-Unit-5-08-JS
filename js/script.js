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
  const number1 = parseInt(document.getElementById("number1").value);
  const number2 = parseInt(document.getElementById("number2").value);
  var addedNumber = 0;
  var answer = number1;
  var remainder = 0;

  if (number1 > 0 && number2 > 0) {
    while (answer >= number2) {
      addedNumber = addedNumber + 1;
      answer = answer - number2;
    }
  }

  if (answer == 0) {
    remainder = 0;
  } else if (answer != 0) {
    remainder = answer + number2;
  }

  document.getElementById("answer").innerHTML =
    number1 + 
    " ÷ " + 
    number2 + 
    " = " + 
    addedNumber + 
    " The remainder is " + 
    remainder;
}
