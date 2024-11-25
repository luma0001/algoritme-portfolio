
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

