// Destructuring (구조분해) 문법
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1, 2, 3, 4, 5];
// let arrVal1 = arr[0];
// let arrVal2 = arr[1];

// const [val1, val2, val3, val4, val5] = arr;
// const [val1, ... val5] = arr; // 중간에 비우고 받고 싶다.
// const [val1, val2] = arr; // 받고 싶은 수 만큼만 인덱스 적기
const [, val2, , val4] = arr;


// -------------------------
const user = {
  name: '홍길동'
  , age: 20
  , gender: 'M'
  , addr: '서울시'
  , info: {
    board: 1
  }
}

// const {name} = user;
const age = 0; // -> 선언만 불가능. 선언할 때 값도 초기화 해줘야 함.
      // 이름 재설정 가능      //default값 설정 가능
const { age: userAge, gender, addr = '없음', info } = user;
console.log(addr);