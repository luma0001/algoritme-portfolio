"use strict";
window.addEventListener("load", start);

function start() {
  let index = binarySearch(
    4,
    [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35, 99, 1002]
  );
  console.log("Fundet 28 på " + index);
}

// Test if the binary search returns !-1 if the value is in the array
function testBinarysearchSuccessCase(expectedValue, values) {
  if (binarySearch(expectedValue, values) != -1) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
}

// Tests if the binary search returns -1 if the value is not in the array
function testBinarysearchFailCase(unexpectedValue, values) {
  if (binarySearch(unexpectedValue, values) != -1) {
    console.log("Test failed");
  } else {
    console.log("Test passed");
  }
}
