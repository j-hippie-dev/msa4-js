// 변수 (variable): 변하는 데이터(값)를 저장하는 공간 (비유: 물컵/ 담겨 있는 값: 물)
// var: 중복 선언 가능, 재할당 가능, 함수레벨 스코프
var num1; // 변수 선언  => 물은 안 담았지만 물컵은 준비했다.
var num1; // 중복 선언 가능
var age = 1; // 변수 선언 및 초기화 (최초의 값을 할당할 때 = '초기화했다'라고 함.)
age = 20; // 재할당
num1 = 90; // num1 변수의 초기화
str1 = 'sadsd'; // str1 변수 var로 선언 및 초기화 // var(default값) 생략 가능

// let: 중복 선언이 불가능, 재할당 가능, 블록레벨 스코프
let name = '홍길동';
// let name; // 중복 선언 불가능
name = '둘리'; // 재할당 가능 // -> string = 문자열 (" 사용 가능) -> if: html에서 이미 사용하고 있음 -> 겹치면 에러남 -> 에러 방지를 위해 (')사용
console.log(name);

// 상수 (constance) : 중복 선언 불가능, 재할당 불가능, 블록레벨 스코프
const gender = 'M'
// const gender; // 중복 선언 불가능
// gender = 'F'; // 재할당 불가능 // TypeError: Assignment to constant variable. (함수를 재할당 할 수 없다.) -> 실행해야 에러난 거 알 수 있음.


// 호이스팅 (hoisting): 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당 하는 것
// 자바스크립트 안에 있는 인터프리터가 기계어로 변환 // 함수 선언식 호이스팅도 있음.
console.log(hoho); // undefined 출력 (에러가 왜 안 나지?)
var hoho = '호호';
console.log(hoho); // '호호' 출력

console.log(haha); // 참조에러 ReferenceError: Cannot access 'haha' before initialization (초기화하기 전에는 접근할 수 없다.)
let haha = '하하';
console.log(haha);