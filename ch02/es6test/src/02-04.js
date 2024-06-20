//const 로 선언된 변수에 대른 값을 대입할 수 없음, 구문 오류 발생함(논리오류 발생)
const p1 = { name : "john", age : 20 }
p1 = { name:"susan", age: 20 };

console.log(p1);
