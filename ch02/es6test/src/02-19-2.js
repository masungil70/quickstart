let base = 100;
const add = x => base + x ;
const multiply = x => base * x;
const getBase = () => base;
//외부에서 add(), multiply() 함수를 사용 할 수 있게 노출한다
//아래의 코드는 npm run build로 트랜스파일 한 후 사용해야 함 
export {add, multiply}
export default getBase;
