const p = new Promise((resolve, reject) => {
    setTimeout(()=> {
        var num = Math.random();        //0~1사이의 난수 발생
        if (num >= 0.8) {
            //reject() 호출되면 catch() 함수로 결과 받을 수 있음  
            reject("생성된 숫자가 0.8이상임 - " + num);
        }
        //resolve() 호출되면 then() 함수로 결과 받을 수 있음  
        resolve(num);
    }, 2000)
})

p.then((result)=> {
    console.log("처리 결과 : ", result)
})
.catch((error)=>{
    console.log("오류 : ", error)
})

console.log("## Promise 객체 생성!");