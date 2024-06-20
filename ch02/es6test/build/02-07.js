"use strict";

var arr = [10, 20, 30, 40];
//구조분해 할당 연산자
var a1 = arr[0],
  a2 = arr[1],
  a3 = arr[2];
console.log(a1, a2, a3);
var p1 = {
  name: "홍길동",
  age: 20,
  gender: "M"
};
var n = p1.name,
  a = p1.age,
  gender = p1.gender;
console.log(n, a, gender);
//객체 선언시 변수를 사용하여 속성 값 설정하는 방법
var user = {
  n: n,
  a: a,
  gender: gender
};
console.log(user);