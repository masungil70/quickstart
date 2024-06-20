"use strict";

var obj = {
  result: 0
};
obj.add = function (x, y) {
  //함수 선언 
  function inner() {
    this.result = x + y;
  }
  //함수 호출 
  inner();
};
obj.add(3, 4);
console.log(obj); // { result: 0 }
console.log(result); // 7