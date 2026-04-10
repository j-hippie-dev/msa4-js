// - 사과 게임 위에 장기 삽입
// - 어메이징브릭에 베이지 배경색 추가
// - 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

const parentContainer = document.querySelector('#ul');
const apple = document.querySelector('#apple');
const newLi = document.createElement('li');
newLi.textContent = '장기';
parentContainer.insertBefore(newLi, apple);
// ---------------------------------------------------------

const bgBeige = document.querySelector('#ul li:last-child');
bgBeige.style.backgroundColor = 'beige';
// ---------------------------------------------------------

// const listEven = document.querySelectorAll('li:nth-child(even)');
// listEven.forEach( item => {
//   item.style.color = 'red';
// });
// const listOdd = document.querySelectorAll('li:nth-child(odd)');
// listOdd.forEach( item => {
//   item.style.color = 'blue';
// });

const listColor = document.querySelectorAll('#ul li');
listColor.forEach((item, idx) => {
  if( idx % 2 === 0 ) {
    item.style.color = 'red';
    item.classList.add('test');
  } else {
    item.style.color = 'blue';
  }
});
// for( let i = 0; i < listColor.length; i++ ) {
//   if( i % 2 === 0 ) {
//     listColor[i].style.color = 'red';
//     listColor[i].classList.add('test');
//   } else {
//     listColor[i].style.color = 'blue';
//   }
// }


