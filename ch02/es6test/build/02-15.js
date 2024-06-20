"use strict";

var obj = {
  result: 0
};
obj.add = function (x, y) {
  var _this = this;
  //함수 선언 
  var inner = function inner() {
    _this.result = x + y;
  };
  //함수 호출
  inner();
};
obj.add(3, 4);
console.log(obj); // { result: 7 }