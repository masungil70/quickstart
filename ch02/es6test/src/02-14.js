var obj = { result:0 };
obj.add = function(x,y) {
  //함수 선언 
  function inner() {
     this.result = x+y;
  }
  
  inner = inner.bind(this);
  inner()
}
obj.add(3,4)

console.log(obj)        // { result: 7 }