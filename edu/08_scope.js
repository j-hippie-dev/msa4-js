// 스코프
// 변수나 함수의 유효범위
// 어디에 선언되었는지에 따라서 접근 가능 여부가 달라짐

// 전역 스코프 (Global Scope)
// 전역 스코프로 선언된 변수와 함수는 코드 어디에서나 접근 가능
// 프로그램이 실행되는 동안 계속 유지
// 보통 const로 많이 선언.
// 읽기 전용으로 쓰는 경우가 많음. 오염되면 안되니까. 위험
let test = '전역 스코프'; // <- Global Scope (블록으로 묶인게 없어서 최상위)

function output() {
  // 지역 스코프 (Local Scope) = 함수 레벨 스코프
  // 함수 내에서 선언 된 변수와 함수는 해당 함수 내부에서 유효
  // 함수가 실행될 때마다 새로운 지역 스코프가 생성
  let test = '지역 스코프';
  if( true ) {
    // 블록레벨 스코프 (Block Level Scope)
    // `{}`로 둘러 싸인 범위를 의미
    let test = '블록레벨 스코프';
    console.log(test);
  }
  console.log(test); // <- 로컬 (여러개)
}
output();
console.log(test);