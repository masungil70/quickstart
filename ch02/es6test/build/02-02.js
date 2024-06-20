"use strict";

//let 블럭 수준의 유효범위를 지원하는 예제

var msg = "GLOBAL";
function outer() {
  var msg = "OUTER";
  console.log("step0", msg);
  if (true) {
    var _msg = "BLOCK";
    console.log("step2", _msg);
  }
}
outer();
console.log("step1", msg);