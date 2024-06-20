"use strict";

//함수 선언을 전역 상수 변수로 작성하는 예제
var test1 = function test1(a, b) {
  return a + b;
};

//화살표 함수(람다함수)
var test2 = function test2(a, b) {
  return a + b;
};

//함수의 살행되는 코드가 1줄이고 리턴을 하는 경우는 return 과 {, }를 생략할 수 있음
var test3 = function test3(a, b) {
  return a + b;
};

//인자가 1개인 경우 
var test4 = function test4(a) {
  return a + 10;
};

//인자가 1개인 경우 괄호를 생략하는 예제  
var test5 = function test5(a) {
  return a + 10;
};

//인자가 1개이고 리턴하는 경우 괄호를 생략하는 예제  
var test6 = function test6(a) {
  return a + 10;
};
console.log(test1(3, 4));
console.log(test2(3, 4));
console.log(test3(3, 4));
console.log(test4(3));
console.log(test5(3));