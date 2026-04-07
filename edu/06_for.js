// for 문
// 기본문법
// for( 초기값, 조건식; 1회 루프당 증감값 ) {
//    // 반복하고 싶은 처리
// }

// for( let i = 0; i < 3; i++ ) {
//   if( i === 1 ) {
//     // break: 처리 중 break를 만나면 그 즉시 루프 종료
//     break; // 주의! 위치 조절 잘 하기.
//   }
//   console.log(`${i}번째 루프문`);
// }

// for( let i = 0; i < 5; i++ ) {
//   // continue: 만나는 즉시 그 다음 루프로 진행
//   if( i % 2 === 0 ) {
//     continue;
//   }
//   console.log(`${i}번째 루프문`)
// }

// for( let i = 0; i < 3; i++ ) {
//   console.log(`부모: ${i}번째`);

//   for( let z = 0; z < 3; z++ ) {
//     console.log(`자식: ${z}번째`);
//   }
// } // 다중 for문 쓸 때 주의할 점 -> 변수 이름 중복 주의!

// 구구단 2단
// let dan = 6;
// let multi = 19;
// for( let i = 1; i <= multi; i++ ) {
//   // let j = 0;
//   // j = i * 2;
//   console.log(`${dan} X ${i} = ${i * dan}`)
// }
// let startDan = 2;
// for( startDan; startDan <= 9; startDan++ ) {
//   console.log(`** ${i}단 **`);

//   for( let j = 1; j <= 19; j++ ) {
//     console.log(`${startDan} X ${j} = ${startDan * j}`);
//   }
// }

let month = 4;
let day = 7;
let week = '';
if( day < 1 || day > 31 ) {
  console.log('날짜를 잘못 입력하셨습니다.');
} else {
  if( day % 7 === 0 ) {
  week = '화';
  } else if( day % 7 === 1 ) {
    week = '수'
  } else if( day % 7 === 2 ) {
    week = '목'
  } else if( day % 7 === 3 ) {
    week = '금'
  } else if( day % 7 === 4 ) {
    week = '토'
  } else if( day % 7 === 5 ) {
    week = '일'
  } else if( day % 7 === 6 ) {
    week = '월'
  } 
  
  console.log(`${month}월 ${day}일 ${week}요일`);
}