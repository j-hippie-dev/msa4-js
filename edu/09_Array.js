// 배열 (Array) 객체
// 하나의 변수에 여러 개의 값을 순차적으로 저장할 수 있는 데이터 구조
// 데이터 타입 Object
// 배열의 크기가 동적으로 변화 가능
// 인덱스(index) 번호가 각 요소에 부여되고 이를 이용해서 순서를 정함.
// 반복문을 통해서 배열의 각 요소에 쉽게 접근 가능
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1[4]);

// length: 배열의 길이를 반환
console.log(arr1.length);
const obj = {
  length: 1, // 속성(Property): 객체 안에 선언한 변수 
  fnc: () => { // 메소드(Method): 객체 안에 선언한 함수
    console.log('함수임');
  }
}


// Array.isArray(arg): boolean // 복수의 경우 (args) // 특정 객체 .프로퍼티명 `:` -> 리턴 타입이 boolen이다.  void -> 리턴이 없다.
//   배열인지 아닌지 체크
console.log(Array.isArray(arr1)); // true
console.log(Array.isArray('어레이')); // false 

// Array.includes(searchElement): boolean
//   배열의 특정 요소의 존재 여부를 확인하고 true/false 반환
console.log(arr1.includes(5));
console.log(arr1.includes(100));

// 실습
const myArr = [2, 4, 5, 6, 9];

// function myIncludes(search, arr) {
//   for( let i = 0; i < arr.length; i++ ) {
//     if( arr[i] === search ) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(myIncludes(5, myArr));


// ★ 강사님 ★
let target = 10;

let result = false;
for( let idx = 0; idx < myArr.length; idx++ ) {
  if( target === myArr[idx]) {
    result = true;
    break;
  }
}
console.log(result);

function myIncludes(arr, search) {
  let result = false;
  for( let idx = 0; idx < arr.length; idx++ ) {
    if( search === arr[idx]) {
      result = true;
    }
  }
  return result;
}
// Array.includes: boolean
// 열에 특정 요소의 존재 여부를 확인하고 true/false를 반환
// 배열의
// 존재 여부 확인하고 싶을 때 사용
console.log(`마이어레이: ${myIncludes(myArr, 100)}`);
console.log(`리터럴어레이: ${myIncludes([5, 4, 3], 5)}`);

// Array.indexOf(searchElement): number
//    배열에서 특정 요소를 검색하고, 해당 인덱스를 반환
//    없으면 `-1`을 반환
// 인덱스 번호를 알고 싶을 때 사용
let arr = ['홍길동', '둘리', '도우너'];
console.log(arr.indexOf('둘리')); // 1 반환
console.log(arr.indexOf('도우너')); // 2 반환
console.log(arr.indexOf('또치')); // -1 반환

// ★★ Array.push(...args): number ** 원본 변경 **
//    원본 배열에 마지막 요소를 추가, 변경된 length를 반환
arr = [1, 2, {key1: 'val1'}];
let arr2 = [...arr]; // 스프레드 오퍼레이트
let resultArr = arr2.push(5, 100, 200);
console.log(resultArr, arr, arr2);

// Array.concat(...args): T[] -> 합쳐진 형태를 반환
//    배열의 마지막 요소를 추가한 새로운 배열을 반환
arr = [1, 2, 3];
resultArr = arr.concat(4, 5, 6);
console.log(arr, resultArr);

// Array.pop() : T | undefined  ** 원본 변경 **
//    원본 배열의 마지막 요소를 제거하고, 제거된 요소를 반환
arr = [1, 2, 3];
resultArr = arr.pop();
console.log(arr, resultArr);

// Array.unshift(...args): number ** 원본 변경 **
//    원본 배열의 첫 번째 요소를 추가하고, 변경된 length를 반환
arr = [1, 2, 3];
resultArr = arr.unshift(100, 200, 300);
console.log(arr, resultArr);

// Array.shift() : T | undefined  ** 원본 변경 **
//    원본 배열의 첫 번째 요소를 제거하고, 해당 요소를 반환
arr = [1, 2, 3];
resultArr = arr.shift();
console.log(arr, resultArr);

// Array.splice(start, count, ...args) : T[] ** 원본 변경 ** // ...args 생략가능
//    1. start만 전달했을 경우
//        - start가 양수일 경우
//          > 해당 인덱스 요소부터 모두 제거하고, 제거한 요소들을 배열로 반환
//        - start가 음수일 경우
//          > 끝 요소부터 start 수 만큼의 해당 인덱스 요소부터 모두 제거하고, 제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(-2);
console.log(arr, resultArr);

//    2. start와 count를 전달했을 경우
//        - 해당 인덱스 요소부터 count 수 만큼의 요소를 제거하고, 제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(-2, 1);
console.log(arr, resultArr);

//    3. start와 count를 전달했을 경우
//        - 해당 인덱스 요소부터 count 수 만큼의 요소를 제거하고, 해당 위치에 args를 삽입하고, 제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2, 1, 100, 200, 300);
console.log(arr, resultArr);

// Array.join(separator): String
//    배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
//    배열의 요소가 없으면 빈문자열을 반환
//    separator를 생략하면 기본 구분자 ','로 연결
arr = [1, 2, 3, 4, 5];
resultArr = arr.join('a');
// function test(separator = ',') {
//   console.log(separator);
// }
// test();
// test('아아아아');
arr = [1, 2, 3, 4, 5];
resultArr = arr.join(', ');
console.log(arr, resultArr);

// Array.sort(): T[] ** 원본 변경 **
//    배열의 요소를 !문자열로 변환 후!, 오름차순 정렬을 하고 정렬한 배열을 반환 -> 숫자: 콜백함수 필수!
//    -> 느림. 대량의 데이터를 다룰 때 사용 지양
arr = [6, 4, 7, 1, 11];
// (a - b)가 양수일 경우, a가 큰수, b가 작은수로 인식하여 정렬
// (a - b)가 음수일 경우, a가 작은수, b가 큰수로 인식하여 정렬
// (a - b)가 0일 경우, 같은 값으로 인식하여 정렬하지 않음
resultArr = arr.sort((a, b) => a - b); // b - a: 내림차순
console.log(arr, resultArr);

// 변수의 스와핑
let num1 = 1;
let num2 = 2;
let tmp = 0;
tmp = num1;
num1 = num2;
num2 = tmp;

// 버블정렬
[(5, 4), 3, 2, 1, 10];
[4, (5, 3), 2, 1, 10];
[4, 3, (5, 2), 1, 10];
[4, 3, 2, (5, 1), 10];
[4, 3, 2, 1, (5, 10)];

[(4, 3), 2, 1, 5, 10];
[3, (4, 2), 1, 5, 10];
[3, 2, (4, 1), 5, 10];
[3, 2, 1, (4, 5), 10];

[(3, 2), 1, 4, 5, 10];
[2, (3, 1), 4, 5, 10];
[2, 1, (3, 4), 5, 10];

[(1, 2), 3, 4, 5, 10];
[1, (2, 3), 4, 5, 10];

// ★★ Array.map(callback): T[] ★★
//    배열의 모든 요소에 대해 콜백 함수를 반복 실행한 후,
//    콜백 함수의 리턴 값들을 모아서 새로운 배열을 반환
arr = [1, 2, 3, 4, 5, 6];
// [1, 2, '짝', 4, 5, '짝'];
resultArr = arr.map(val => {
  if( val % 3 === 0 ) {
    return '짝';
  } else {
    return val;
  }
});
console.log(arr, resultArr);
class MyArr {
  arr = [1, 2, 3, 4, 5, 6];

  map(cb) {
  // 새로운 배열
  const newArr = [];

    for( let i = 0; i < this.arr.length; i++ ) {
      // let resultMap = cb(this.arr[i]);
      newArr.push(cb(this.arr[i]));
    }

    return newArr;
  }
}
// const test = new MyArr();
// resultArr = test.map(val => {
//   if( val % 3 === 0 ) {
//     return '짝';
//   } else {
//     return val;
//   }
// });
console.log(`test: ${resultArr}`);

// Array.some(callback): boolean
//    배열의 모든 요소에 대해 콜백함수를 실행 한 후,
//    조건에 맞는 결과가 하나라도 있으면 true, 없으면 false를 반환
arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 50 },
  { name: '또치', age: 45 },
];
// resultArr = arr.some(item => item.name === '도우너');
resultArr = arr.some(item => item.age >= 50);
console.log(arr, resultArr);

// Array.every(callback): boolean
//    배열의 모든 요소에 대해 콜백함수를 실행 한 후,
//    모두 조건에 맞으면 true, 아니면 false를 반환
arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 50 },
  { name: '또치', age: 45 },
];
resultArr = arr.every(item => item.age >= 20);
console.log(resultArr);

// Array.filter(callback): T[]
//    배열의 모든 요소에 대해 콜백함수를 실행 한 후,
//    조건에 만족한 요소만 모아서 새로운 배열로 반환
arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 50 },
  { name: '또치', age: 45 },
];
resultArr = arr.filter(item => item.age < 50);
console.log(resultArr);

// Array.forEach(callback): void
//    배열의 모든 요소에 대해 콜백 함수를 반복 실행하고 싶을 때 사용
arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 50 },
  { name: '또치', age: 45 },
];
arr.forEach((val, idx) => {
  // 내가 하고 싶은 처리
  console.log(val, idx);
});
// for( let i = 0; i < arr.length; i++ ) {
  // 내가 하고 싶은 처리
  // arr[i];
// }