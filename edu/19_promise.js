// // 콜백 지옥
// setTimeout(() => {
//   console.log('A');
  
//   setTimeout(() => {
//     console.log('B');
    
//     setTimeout(() => {
//       console.log('C');
//     }, 1000);
//   }, 1000);
// }, 1000);

// 위 콜백 지옥을 회피하기 위해 프로미스 기반으로 변경해보자.
const timePromise = (str, ms) => {
  // resolve: 작업이 성공했을 때를 알려주는 객체
  // reject: 작업이 실패했을 때를 알려주는 객체
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof str === 'string' ) {
        console.log(str);
        resolve('성공'); // return 생략 가능 <- 이미 안에 return이 들어가있음
      } else {
        reject('실패');
      }
    }, ms);
  }); // Promise 객체 생성 // 작업의 완료를 반환하는 객체 생성
}

// timePromise('AA', 1000)
// .then(() => timePromise('BB', 1000))
// .then(() => timePromise('CC', 1000))
// .then(() => {
//   timePromise('DD', 1000)
//   .then(() => timePromise('EE', 1000));
// })
// .catch(error => { // 생략 가능 but 예외 처리를 못 잡음
//   console.log(error);
// })
// .finally(() => console.log('파이널리')); // 생략 가능

// console.log('tttt');

// 병렬처리 하는 방법
Promise.all(
  [
    timePromise('A', 1000)
    , timePromise('B', 3000)
    , timePromise('C', 5000)
  ]
)
.then(() => console.log('모든 작업 완료'));