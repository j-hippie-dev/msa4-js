// 1.`버튼` 클릭시 아래 문구 알러트로 출력
// 	안녕하세요.
// 	숨어있는 div를 찾아주세요.

// 2. 숨어있는 div에 마우스가 진입하면 아래 문구 알러트 출력
// 	- 두근두근

// 3. 숨어있는 div를 마우스로 클릭하면 아래 문구 알러트 출력 및 나타나기
// 	- 들켰다

// 4. 들킨 div에는 마우스가 진입해도 두근두근이 뜨지 않습니다.

// 5. 나타난 div를 다시 클릭하면 아래 문구 알러트 출력 및 사라지기
// 	- 숨는다

// 6. 다시 숨은 div에 마우스가 진입하면 아래 문구 알러트 출력
// 	- 두근두근

// -- 보너스 문제 --
// 다시 숨을 때 랜덤한 위치로 이동

const btnGuide = document.querySelector('#btnGuide');
btnGuide.addEventListener('click', () => {
  alert('안녕하세요. \n숨어있는 div를 찾아주세요.');
});


const divBox = document.querySelector('.box');
divBox.addEventListener('mouseover', overAlert);


let bool = false; // false: 숨겨진 상태, true: 보여지는 상태

// divBox.addEventListener('click', () => {
//   if( bool === false ) {
//     alert('들켰다');
//     divBox.style.opacity = '1';

//     divBox.removeEventListener('mouseover', overAlert);

//     bool = true;
//   } else {
//     alert('숨는다');
//     divBox.style.opacity = '0';

//     divBox.addEventListener('mouseover', overAlert);

//     bool = false;
//   }
// });

divBox.addEventListener('click', () => {
  if( !bool ) {
    // 들켰다
    clickShow();
  } else {
    // 숨는다
    clickHidden();
  }
});

function overAlert(e) {
  alert('두근두근');
}
function clickShow(e) {
  alert('들켰다');
  divBox.classList.remove('hidden');
  divBox.classList.add('show');

  moveReset();

  divBox.removeEventListener('mouseover', overAlert);
  bool = true;
}
function clickHidden(e) {
  alert('숨는다');
  divBox.classList.add('hidden');
  divBox.classList.remove('show');

  moveRandomly();

  divBox.addEventListener('mouseover', overAlert);
  bool = false;
}


function moveRandomly() {
  const maxX = window.innerWidth - 100; 
  const maxY = window.innerHeight - 100;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  divBox.style.top = randomY + 'px';
  divBox.style.left = randomX + 'px';
}

function moveReset() {
  divBox.style.top = '0px';
  divBox.style.left = '0px';
}