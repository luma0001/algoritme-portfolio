import radixSort from "./radixSort.js";

("use strict");
window.addEventListener("load", start);

function start() {
  console.log(radixSort([1234, 987, 1, 97, 50, 7, 881, 72]));
}
