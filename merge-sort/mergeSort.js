import isSorted from "../helper-functions/isSorted.js";

export default function mergeSort(arr) {

  // If the array is not sorted - merge and sort
  if (!isSorted(arr)) {
    const halfWayPoint = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, halfWayPoint);
    // console.log(arr1);
    let arr2 = arr.slice(halfWayPoint, arr.length);
    // console.log(arr2);

    // If the unsorted array is longer than 1 element - use merge sort
    if (arr1 !== 1) {
      arr1 = mergeSort(arr1);
    }
    if (arr2 !== 2) {
      arr2 = mergeSort(arr2);
    }

    let a = 0;
    let b = 0;
    let loopArrLength = Number(arr1.length + arr2.length);

    const mergedArray = [];
    for (let n = 0; n < loopArrLength; n++) {
      if (a > arr1.length - 1) {
        const rest = arr2[b];
        mergedArray.push(rest);
        b++;
      } else if (b > arr2.length - 1) {
        const rest = arr1[a];
        console.log("rest: " + rest);
        mergedArray.push(rest);
        a++;
      } else {
        if (arr1[a] > arr2[b]) {
          mergedArray.push(arr2[b]);
          b++;
        } else if (arr1[a] < arr2[b]) {
          mergedArray.push(arr1[a]);
          a++;
        } else if (arr1[a] == arr2[b]) {

          mergedArray.push(arr2[b]);
          b++;
        }
      }
    }

    return mergedArray;
  } else {
    return arr;
  }
}
