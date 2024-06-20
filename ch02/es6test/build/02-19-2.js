"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = exports["default"] = exports.add = void 0;
var base = 100;
var add = exports.add = function add(x) {
  return base + x;
};
var multiply = exports.multiply = function multiply(x) {
  return base * x;
};
var getBase = function getBase() {
  return base;
};
//외부에서 add(), multiply() 함수를 사용 할 수 있게 노출한다
//아래의 코드는 npm run build로 트랜스파일 한 후 사용해야 함 
var _default = exports["default"] = getBase;