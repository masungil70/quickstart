var add = function(x,y) {  
    this.result = x+y;
}

var obj = {};
//1. apply() 사용, appy() 함수 호출시 전달되는 인자는 1번째는 객체 자신되는 2번째는 함수의 인자로 배열로 전달해야함 
//add.apply(obj, [3,4])
//2. call() 사용, call() 함수는 함수 호출시 인자는 1번째는 객체가 되고 나머지는 호출에 각각 대응 됨 
//add.call(obj,3,4)
//3. bind() 사용, bind() 함수는 객체(obj)의 멤버 함수로 함수(add)로 연결 할 수 있음, 측 add() 내부에서 사용는 this는 obj가 됨   
const add2 = add.bind(obj);
add2(3,4)
console.log(obj);      // { result : 7 }
console.log(add);      // [Function: add]
console.log(add2);      // [Function: bound add]

add = add.bind(obj);
add(3,4)
console.log(obj);      // { result : 7 }

