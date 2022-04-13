let tarot = document.querySelector('.content > .tarot__deck ');
let tarotModal = document.querySelector('.modal--tarot');
let firstCard = document.querySelector('.modal--tarot .tarot1');
let secondCard = document.querySelector('.modal--tarot .tarot2');
let lastCard = document.querySelector('.modal--tarot .tarot3');
let desc = document.querySelector('.modal--tarot .tarot__desc');
let btnClose = document.querySelector('.modal--tarot .bt-close');

function openTarot(){
    tarotModal.style.display="flex";
    firstCard.style.display="flex";
    desc.innerHTML = '<span><div class="desc--title">환상동물릴레이조각</div><br>사용자는 환상동물 그림을 제출할 수 있습니다.<br>다른 사용자들의 그림을 구경해보세요.<br>관리자는 사용자가 제출한 그림을 바탕으로 디지털 조각을 만듭니다. 프로젝트 종료 후에 사용자는 3D 프린터로 출력된 자신의 환상동물 조각을 보상으로 받게 됩니다.<br><div class="desc--credit">기획 | 김슬기<br>웹 그리고 모델링| 김슬기</div></span>';
};

function slideFirst(){    
    firstCard.style.display="none";
    secondCard.style.display="flex";
    desc.innerHTML = '<span><div class="desc--title">우먼즈랩탑 선데이</div ><br>우먼즈랩탑 선데이는 2020년부터 지속되어온 루이즈 더 우먼의 스터디 소모임입니다. 디지털 기반의 예술가들이 모여 기술에 대해 공부하고 서로의 작품을 공유합니다.<br><br></span>'
   }

function slideSecond(){    
    secondCard.style.display="none";
    lastCard.style.display="flex";  
    desc.innerHTML = '<span><div class="desc--title">주관 | 루이즈 더 우먼</div><br>시각 예술 분야 여성 예술인 네트워크 루이즈 더 우먼입니다.루이즈 더 우먼은 여성 예술인들의 연결과 성장을 지원합니다. 평면, 입체, 사진, 영상, 미디어, 일러스트, 기획, 비평 등 다양한 시각 예술 분야에서 활동하는 140여 명의 여성 예술인들과 함께하고 있습니다.<br>여성주의와 창작의 선순환 구조를 만듭니다.<br>여성 중심의 새로운 예술인 커뮤니티 모델을 제시합니다.<br></span>' 
   }

function closeTarot(){
    tarotModal.style.display="none";
    lastCard.style.display="none";  
};

tarot.addEventListener('click', openTarot);
btnClose.addEventListener('click', closeTarot);
firstCard.addEventListener('click', slideFirst);
secondCard.addEventListener('click', slideSecond);

  


