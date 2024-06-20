var obj = { result: 0 };
obj.add = function(x,y) {  
   //this는 해당 함수를 소유한 객체를 의미함, 객체가 생략된 경우 브라우저애서는 window객체가 됨 
   this.result = x+y;
}
var add2 = obj.add;
console.log(add2 === obj.add)      //true, 동일한 함수
add2(3,4)       //전역변수 result에 7이 할당됨.
console.log(obj);       //{ result: 0 }
console.log(result);    //7
console.log(window.result);    // 브라우저의 개발자 도구에서 확인 할 것 
