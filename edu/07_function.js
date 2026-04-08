// 함수 (function)
// 입력을 받아서 출력을 하는 일련의 과정을 정의한 것
// 특정 처리를 모듈화해서, 코드의 중복 최소화

// 함수 선언식
// parameter : 함수 정의에서 전달 받은 argument를 저장하는 변수인(소괄호 안) a와 b
function fnc1(a, b) {
  let sum = a + b;

  //반환
  return sum; // return: 함수의 연산 결과를 반환
}

// argument(인수) : 함수 호출에서 전달되는 값인(소괄호 안) 1과 2
let result = fnc1(1, 2);
console.log(result);

function fnc2(a, b) {
  return a + b; // 바로 쓸 수도 있음
}
console.log(fnc2(3, 5));

// 함수 표현식 : 호이스팅 영향 X (호이스팅 불가능)
// 함수의 이름을 생략한 익명함수를 변수에 할당해서 사용하는 방식
// fnc3(1, 1); // 참조 에러 발생

const fnc3 = function(a, b) {
  return a + b;
}

// 화살표 함수
// const fnc4 = (a, b) => {
//   return a + b;
// }
const fnc4 = (a, b) => a + b; // 처리가 한 줄일 때 {}, return 생략 가능
const fnc5 = a => `ttt${a}`; // 파라미터가 한 개 일때는 () 생략 가능
const fnc6 = () => `test` // 파라미터가 없을 때는 () 생략 불가능

// 콜백 함수
function callBackTest(bool, cb) {
  if( bool ) {
    cb();
  } else {
    console.log('콜백 실행 안함');
  }
}

function test() {
  console.log('테스트 함수 실행');
}

callBackTest(true, test);