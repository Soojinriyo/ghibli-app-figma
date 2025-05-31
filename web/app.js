// Ghibli 대표작 추천 앱 – 동적 기능 JS

// 샘플 데이터
const cards = [
  {
    title: '이웃집 토토로',
    img: '../components/card_component.svg',
    rating: 4.8,
    tag: '#명작'
  },
  {
    title: '센과 치히로의 행방불명',
    img: '../assets/sample_poster1.svg',
    rating: 4.9,
    tag: '#명작'
  },
  {
    title: '하울의 움직이는 성',
    img: '../assets/sample_poster1.svg',
    rating: 4.7,
    tag: '#판타지'
  }
];

let currentCard = 0;

function renderCards() {
  const cardList = document.querySelector('.card-list');
  cardList.innerHTML = '';
  // 한 번에 1개 카드만 보여주기(스와이프)
  const c = cards[currentCard];
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.innerHTML = `
    <img src="${c.img}" alt="${c.title}" />
    <div class="card-title">${c.title}</div>
    <div class="card-rating">⭐ ${c.rating} <span class="tag">${c.tag}</span></div>
  `;
  cardList.appendChild(cardDiv);
}

document.querySelector('.arrow.left').onclick = () => {
  currentCard = (currentCard - 1 + cards.length) % cards.length;
  renderCards();
};
document.querySelector('.arrow.right').onclick = () => {
  currentCard = (currentCard + 1) % cards.length;
  renderCards();
};

// 필터/탭 동작
const filterPills = document.querySelectorAll('.filter-pill');
filterPills.forEach(pill => {
  pill.onclick = () => {
    filterPills.forEach(p => p.classList.remove('selected'));
    pill.classList.add('selected');
    // 실제 데이터 필터링 로직 추가 가능
  };
});

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // 실제 추천 방식에 따라 데이터 변경 가능
  };
});

// 평점 슬라이더
const slider = document.querySelector('.rating-slider');
slider.oninput = function() {
  this.nextSibling.textContent = `${this.value}+`;
  // 실제 데이터 필터링 로직 추가 가능
};

// 반응형 개선: 카드 슬라이더 가로 스크롤(모바일)
// (기본적으로 flex overflow-x로 처리됨)

// 초기 렌더링
renderCards();
