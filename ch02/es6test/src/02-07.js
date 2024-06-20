let arr = [10,20,30,40];
//구조분해 할당 연산자
let [a1,a2,a3] = arr;
console.log(a1, a2, a3);

let p1 = { name:"홍길동", age:20, gender:"M" };
let { name: n, age:a, gender } = p1;
console.log(n, a, gender);
//객체 선언시 변수를 사용하여 속성 값 설정하는 방법
let user = {n, a, gender};
console.log(user);