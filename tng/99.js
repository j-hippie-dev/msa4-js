// 0. 페이지 처음 로드시 카드는 아무것도 없습니다.

// 1. 다음 버튼을 누르면 다음 페이지를 3개 가져옵니다.
//    1-1. 다음 페이지를 가져올 때 기존 데이터는 지워지지 않습니다.
//    1-2. 새로 가져온 데이터는 가장 뒤에 순서대로 삽입됩니다.

// 2. 리셋 버튼을 누르면 모든 카드가 초기화 됩니다.
//    2-1. 리셋 후 다음 버튼을 누르면 첫 페이지부터 불러옵니다.

// 3. 사용하는 API는 아래와 같습니다.
//    - baseURL: https://picsum.photos/v2/list
// 	  - paramers: 
// 	    - page: number
// 	    - limit: number
(() => {
  let allowFlg = true; // 디바운싱 제어용
  
  const baseURL = 'https://picsum.photos/v2/list';
  let page = 1; // 변하는 값!! X const X
  const limit = 3;
  
  const btnNext = document.querySelector('.btn-next');
  btnNext.addEventListener('click', async () => {
    // allowFig가 true일 경우 해당 처리 시작
    if( allowFlg ) {
      allowFlg = false;

      try {
        // const url = `${baseURL}?page=${page}&limit=${limit}`;
        
        const config = {
          params: {
            // 객체의 프로퍼티를 설정할 때, 사용할 변수명과 키명이 일치하면
            // 아래처럼 단축 작성 가능
            // limit: limit, page: page
            limit
            , page
          }
        };
        
        const response = await axios.get(baseURL, config);
        // console.log(response);
        
        response.data.forEach(item => {
          const container = document.querySelector('.container');
          
          const newCard = document.createElement('div');
          const newCardImg = document.createElement('div');
          const newCardAuthor = document.createElement('span');
          
          newCardImg.classList.add('card-img');
          newCardImg.style.backgroundImage = `url('${item.download_url}')`;
          newCard.appendChild(newCardImg);
          
          newCardAuthor.textContent = `${item.id}: ${item.author}`;
          newCard.appendChild(newCardAuthor);
          
          newCard.classList.add('card');
          container.appendChild(newCard);
        });
        page++; // 마지막에 써주는게 유지보수에 좋음.
      } catch(error) {
        console.log(error);
      } finally {
        allowFlg = true;
      }
    };
  });
  
  const btnReset = document.querySelector('.btn-reset');
  btnReset.addEventListener('click', () => {
    // const container = document.querySelector('.container');
    // container.textContent = '';
    document.querySelector('.container').textContent = '';

    page = 1;
  });
})();