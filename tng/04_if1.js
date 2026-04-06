let score = 101;
let grade ='F'; // 값이 없으면 undefined-> 페이탈 에러 날 수도 있음. -> 초기값 없으면 연산에 썼을 때 에러남.

// if( score < 60 ) {
//   grade = 'F';
// } else if( score >= 60 && score < 70 ) {
//   grade = 'D';
// } else if( score >= 70 && score < 80 ) {
//   grade = 'C';
// } else if( score >= 80 && score < 90 ) {
//   grade = 'B';
// } else if( score >= 90 && score < 100 ) {
//   grade = 'A';
// } else if( score === 100 ) {
//   grade = 'A+';
// }

// if( score === 100 ) {
//   grade = 'A+';
// } else if( score >= 90 && score < 100 ) {
//   grade = 'A';
// } else if( score >= 80 && score < 90 ) {
//   grade = 'B';
// } else if( score >= 70 && score < 80 ) {
//   grade = 'C';
// } else if( score >= 60 && score < 70 ) {
//   grade = 'D';
// } else if( score < 60 ) {
//   grade = 'F';
// }

if( score > 100 || score < 0 || typeof score !== 'number') {
  console.log('입력값 오류');
  // throw new Error();
} else {
  if( score === 100 ) {
    grade = 'A+';
  } else if( score >= 90 ) {
    grade = 'A';
  } else if( score >= 80 ) {
    grade = 'B';
  } else if( score >= 70 ) {
    grade = 'C';
  } else if( score >= 60 ) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  console.log(`당신의 점수는 ${score}점 입니다. <${grade}>`);
}