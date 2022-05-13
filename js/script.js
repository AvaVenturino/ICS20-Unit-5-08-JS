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
  const counter1 = parseInt(document.getElementById("counter1").value);
  const counter2 = parseInt(document.getElementById("counter2").value);
  var addedNumber = 0;
  var answer = counter1;

  if (counter1 > 0 && counter2 > 0) {
    while (answer >= counter2) {
      addedNumber = addedNumber + 1;
      answer = answer - counter2;
    }
  }
  document.getElementById("answer").innerHTML =
    counter1 + " ÷ " + counter2 + " = " + addedNumber;
}
