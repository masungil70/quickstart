//함수의 인자로 구조분해 할당과 기본 인자값을 사용한 함수 인자선언 
function addContact1({name, phone, email="이메일없음", age=0}) {
    console.log(name,phone,email,age);
}    
addContact1({ name : "이몽룡", phone : "010-3434-8989" })

//함수의 인자로 객체 변수 선언 
function addContact2(contact) {
    if (!contact.email) contact.email = "이메일없음";
    if (!contact.age) contact.age = 0;
    let { name, phone, email, age} = contact;
    console.log(name,phone,email,age);
}    
addContact2({ name : "이몽룡", phone : "010-3434-8989" })

//일반적인 함수의 인자로 기본 인자값 선언 예제 
function addContact3(name,phone,email="이메일없음",age=0) {
    console.log(name,phone,email,age);
}    
addContact3("이몽룡","010-3434-8989")

