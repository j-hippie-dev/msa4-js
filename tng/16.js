// === 함수 모음 === //
const randomPosition = () => {
  // -- 보너스 문제 --
  // 다시 숨을 때 랜덤한 위치로 이동
  const container = document.querySelector('.container');

  const randomX = Math.floor(Math.random() * (window.innerWidth - container.offsetWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - container.offsetHeight));

  container.style.top = `${randomY}px`;
  container.style.left = `${randomX}px`;
};

const setRandomBackgroundColor = (element) => {
  // 리얼 보너스: 박스에 랜덤 색상 부여하기
  const randomRgbRed = Math.round(Math.random() * 255);
  const randomRgbGreen = Math.round(Math.random() * 255);
  const randomRgbBlue = Math.round(Math.random() * 255);

  element.style.backgroundColor = `rgb(${randomRgbRed}, ${randomRgbGreen}, ${randomRgbBlue})`;
}

const dokidoki = () => {
  alert('두근두근');
};

const hide = () => {
  const box = document.querySelector('.box');
  const container = document.querySelector('.container');

  alert('숨는다');
  box.classList.remove('busted');
  randomPosition(); // 랜덤 위치 설정

  // 숨는다 클릭 이벤트 제거
  box.removeEventListener('click', hide);

  // 들켰다 이벤트 추가
  container.addEventListener('mouseenter', dokidoki);

  // 박스 색상 제거
  box.style = '';

  // 6. 다시 숨은 div에 마우스가 진입하면 아래 문구 알러트 출력
  // 	- 두근두근
  box.addEventListener('click', busted);
};

const busted = () => {
  const box = document.querySelector('.box');
  const container = document.querySelector('.container');
  
  box.classList.add('busted');
  // 4. 들킨 div에는 마우스가 진입해도 두근두근이 뜨지 않습니다.
  container.removeEventListener('mouseenter', dokidoki);
  
  // 5. 나타난 div를 다시 클릭하면 아래 문구 알러트 출력 및 사라지기
  // 	- 숨는다
  box.addEventListener('click', hide);

  // 들켰다 클릭이벤트 제거
  box.removeEventListener('click', busted);

  // 보너스: 랜덤 배경색 지정
  setRandomBackgroundColor(box);

  alert('들켰다.');
}
// === 로직 모음 === //
(() => {
  randomPosition(); // 랜덤 위치 설정
  // 1.`버튼` 클릭시 아래 문구 알러트로 출력
  // 	안녕하세요.
  // 	숨어있는 div를 찾아주세요.
  const btnInfo = document.querySelector('button');
  btnInfo.addEventListener('click', () => {
    alert('안녕하세요. \n숨어있는 div를 찾아주세요.');
  });
  
  // 2. 숨어있는 div에 마우스가 진입하면 아래 문구 알러트 출력
  // 	- 두근두근
  const container = document.querySelector('.container');
  container.addEventListener('mouseenter', dokidoki);
  
  // 3. 숨어있는 div를 마우스로 클릭하면 아래 문구 알러트 출력 및 나타나기
  // 	- 들켰다
  const box = document.querySelector('.box');
  box.addEventListener('click', busted);

})(); // 최초 딱 한 번만 실행하는 함수 => 즉시 실행 함수

// 문제점
// 1. 두근두근의 영역이 실제로는 박스가 아니었다.
// - 박스의 일정 근처(외곽)에 오면 두근두근이었다.

// 2. 우리의 모든 이벤트는 박스에 들어가 있다.


// ======================================= 실습 ==========
// const btnGuide = document.querySelector('#btnGuide');
// btnGuide.addEventListener('click', () => {
//   alert('안녕하세요. \n숨어있는 div를 찾아주세요.');
// });


// const divBox = document.querySelector('.box');
// divBox.addEventListener('mouseover', overAlert);


// let bool = false; // false: 숨겨진 상태, true: 보여지는 상태

// // divBox.addEventListener('click', () => {
// //   if( bool === false ) {
// //     alert('들켰다');
// //     divBox.style.opacity = '1';

// //     divBox.removeEventListener('mouseover', overAlert);

// //     bool = true;
// //   } else {
// //     alert('숨는다');
// //     divBox.style.opacity = '0';

// //     divBox.addEventListener('mouseover', overAlert);

// //     bool = false;
// //   }
// // });

// divBox.addEventListener('click', () => {
//   if( !bool ) {
//     // 들켰다
//     clickShow();
//   } else {
//     // 숨는다
//     clickHidden();
//   }
// });

// function overAlert(e) {
//   alert('두근두근');
// }
// function clickShow(e) {
//   alert('들켰다');
//   divBox.classList.remove('hidden');
//   divBox.classList.add('show');

//   moveReset();

//   divBox.removeEventListener('mouseover', overAlert);
//   bool = true;
// }
// function clickHidden(e) {
//   alert('숨는다');
//   divBox.classList.add('hidden');
//   divBox.classList.remove('show');

//   moveRandomly();

//   divBox.addEventListener('mouseover', overAlert);
//   bool = false;
// }


// function moveRandomly() {
//   const maxX = window.innerWidth - 100; 
//   const maxY = window.innerHeight - 100;
  
//   const randomX = Math.floor(Math.random() * maxX);
//   const randomY = Math.floor(Math.random() * maxY);
  
//   divBox.style.top = randomY + 'px';
//   divBox.style.left = randomX + 'px';
// }

// function moveReset() {
//   divBox.style.top = '0px';
//   divBox.style.left = '0px';
// }