export default function radixSort(array) {
  let maxIterations = 1;

  //Inital loop to find the number longest number
  console.log(array);
  for (let n = 0; n < array.length; n++) {
    const number = array[n].toString();
    // checks if the number has the most digets and sets the maxIterations if it is.
    if (number.length > maxIterations) {
      maxIterations = number.length;
    }
  }

  const zeroedArray = addZeroes(array, maxIterations);
  // The array that keeps track of the sorted numbers
  let sortingArray = zeroedArray;
  // We are looping from the last index (furthest right digit) and lefts.
  for (let i = maxIterations - 1; i >= 0; i--) {
    // Initiates a new set of "buckets" from 0 to 9
    const bucketArray = [[], [], [], [], [], [], [], [], [], []];
    // Loops the array of numbers - find the relevant digit in the given number
    for (let n = 0; n < sortingArray.length; n++) {
      const stringedZeroAddedNumber = sortingArray[n];
      const digit = stringedZeroAddedNumber[i];
      // Sorts the number by adding it into the nested bucket-array that matches the digit.
      bucketArray[digit].push(stringedZeroAddedNumber);
    }
    // Converts the bucket-array into single array.
    sortingArray = [].concat(...bucketArray);
  }

  sortingArray = removeZeros(sortingArray);
  sortingArray = stringArrayToNumber(sortingArray);

  return sortingArray;
}

// ------- Helper functions ---------------------

// Makes each number a string and add zeros before the first digits til the lenght maches the longest number.
function addZeroes(array, maxIterations) {
  const arryZeroed = [];
  let zeroedNumber;

  for (let n = 0; n < array.length; n++) {
    const number = array[n].toString();
    zeroedNumber = number;
    if (number.length != maxIterations) {
      const differential = maxIterations - number.length;
      for (let x = 0; x < differential; x++) {
        if (number.length !== maxIterations) {
          zeroedNumber = "0" + zeroedNumber;
        } else {
          console.log(number.length, " = ", maxIterations);
          continue;
        }
      }
    }
    arryZeroed.push(zeroedNumber);
  }
  return arryZeroed;
}

// Return the numbers to their original lenght - without added zeroes
function removeZeros(zeroedArray) {
  const unZeroedArray = [];
  let unzeroedNumber;
  for (const number of zeroedArray) {
    unzeroedNumber = number;
    for (let i = 0; i < number.length; i++) {
      if (unzeroedNumber[0] == 0) {
        unzeroedNumber = unzeroedNumber.slice(1, unzeroedNumber.length);
      } else {
        continue;
      }
    }
    unZeroedArray.push(unzeroedNumber);
  }
  return unZeroedArray;
}

// Convert the numbers from type string to number
function stringArrayToNumber(stringArray) {
  const numberArray = [];
  for (const string of stringArray) {
    const number = Number(string);
    numberArray.push(number);
  }
  return numberArray;
}
