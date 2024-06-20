//let 블럭 수준의 유효범위를 지원하는 예제

let msg = "GLOBAL";
function outer() {
    let msg = "OUTER";
    console.log("step0", msg);
    if (true) {
        let msg = "BLOCK";
        console.log("step2", msg);
    }
}
outer();
console.log("step1", msg);


