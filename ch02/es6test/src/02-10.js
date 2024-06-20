//객체 변수 선언
var obj = { result: 0 };
//객체 속성의 함수를 대입하는 예제 
obj.add = function(x,y) {  
   this.result = x+y;
}
obj.add(3,4)
console.log(obj)        // 출력 : { result: 7, add : [Function (anonymous)]}