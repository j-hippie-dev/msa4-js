// 원본은 보존하면서 오름차순 정렬 해주세요.
const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];
// const copy = JSON.parse(JSON.stringify(ARR1)); // Deep Copy

// let newArr = [...ARR1]; //★★★
// let resultSort = newArr.sort( (a, b) => a - b);
// console.log(ARR1, resultSort);


// const newBubble =
// function myFn( arr ) {
//   for( let i = 0; i < arr.length; i++ ) {
//     for( let j = 0; j < arr.length - i; j++ ) {

//     }
//   }
// }

function bubbleSort(arr) {
  let arrLen = arr.length;
  let newArray = [...arr];
  for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen - i - 1; j++){
      let distance = newArray[j] - newArray[j + 1];
      if(distance > 0) {
        let temp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
      }
    }
  }
  return newArray;
}


// 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
const ARR2 = [5,7,3,4,5,1,2];

// 버그의 잠재성이 매우 높은 코드
// let arrOdd = ARR2.filter( val => {
//   if( val % 2 === 1 ) {
//     return ARR2; // ! true, false 중 하나가 반환되게 해야 함.
//   }
// });
// let arrEven = ARR2.filter( val => {
//   if( val % 2 === 0 ) {
//     return ARR2;
//   }
// });
// console.log(ARR2, arrOdd, arrEven);

let odd = ARR2.filter( val => val % 2 !== 0 );
let even = ARR2.filter( val => val % 2 === 0 );
console.log(odd, even)


// 각 요소에 3으로 나눈 나머지를 구해서, 새로운 배열로 생성해 주세요.
const ARR3 = [5,7,3,4,5,1,2,0];

let arr3 = ARR3.map( val => val % 3 );
let arrResult = [];
ARR3.forEach( val => {
  arrResult.push( val % 3);
});
console.log(arr3, arrResult);

// 주소 참조 조심!!!!
const arr4 = [5,7,3,4,5,1,2,0];
const result = test(arr4);
console.log(arr4, result);

function test(arr) {
  return arr.sort((a, b) => a - b);
}