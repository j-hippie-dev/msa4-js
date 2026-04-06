// 산술 연산자
// +, -, *, /, %
let num1 = 5;
let num2 = 10;

let sum = num1 + num2;
console.log(sum); // 15 출력
let minus = num1 - num2;
console.log(minus); // -5 출력
let multi = num1 * num2;
console.log(multi); // 50 출력
let division = num1 / num2;
console.log(division); // 0.5 출력
let remainder = num1 % num2; // 나머지
console.log(remainder); // 5 출력

// 문자열 연결
let str1 = 'a' + 'b'; // 문자열 연결할 때 '+' 사용 지양
let str2 = `test${str1}`; // 템플릿 리터럴 문법 <- 보통 문자열 연결할 때 이거 사용
console.log(str1, str2);

// 산술 대입 연산자
let num = 1; // '=': 대입 연산자
num = num + 1;
num += 1; // 👆🏻 줄여서 생략 버전 // 변수가 초기화가 되어 있어야 함. 아니면 오류.
num -= 1;
num *= 2;
num /= 3;
num %= 2;
console.log(num);

// 증감 연산 (++, --)
num = 0; // 우리가 설정한 값으로 재할당하는 것도 -> 초기화라고 함.
console.log(`전위 증감 연산자1: ${++num}`);
console.log(`전위 증감 연산자2: ${num}`);
num = 0;
console.log(`후위 증감 연산자1: ${num++}`);
console.log(`후위 증감 연산자2: ${num}`);

// 비교 연산자
// 두 값을 비교해서 true 또는 false를 반환하는 연산자
console.log(1 > 0); // true, 크다 or 초과
console.log(1 < 0); // false, 작다 or 미만
console.log(1 >= 0); // true, 크거나 같다 or 이상
console.log(1 <= 0); // false, 작거나 같다 or 이하
console.log(1 == '1'); // true, 불완전 비교: 데이터 타입은 체크하지 않고, 형태만 비교
console.log(1 === '1'); // false, 완전 비교: 데이터 타입까지 깐깐하게 체크
console.log(1 != '1'); // false, 불완전 비교
console.log(1 !== '1'); // true, 완전 비교

// 논리 연산자
// and 연산자: `&&`
//    연결한 모든 조건이 true여야 true
//    하나라도 false이면 false반환
console.log(1 === 1 && 1 >= 3); // false

// or 연산자: `||`
//    연결한 조건 중 하나라도 true면 true를 반환,
//    모든 조건이 false면 false를 반환
console.log(1 === 1 || 1 >= 3); // true

num = 1;
console.log((num === 1 || num >= 0) && typeof num === 'string');

// not 연산자: `!`, 연산의 결과를 역전시켜서 반환
console.log(!(1 === 1));
let bool = true;
console.log(!bool);