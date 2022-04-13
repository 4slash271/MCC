let tarot = document.querySelector('.content > .tarot__deck ');
let tarotModal = document.querySelector('.modal--tarot');
let firstCard = document.querySelector('.modal--tarot .tarot1');
let secondCard = document.querySelector('.modal--tarot .tarot2');
let lastCard = document.querySelector('.modal--tarot .tarot3');
let btnClose = document.querySelector('.modal--tarot .bt-close');

function openTarot(){
    tarotModal.style.display="flex";
};

function slideFirst(){    
    firstCard.style.display="none";
    secondCard.style.display="flex";
   }

function slideSecond(){    
    secondCard.style.display="none";
    lastCard.style.display="flex";   
   }

function closeTarot(){
    tarotModal.style.display="none";
};

tarot.addEventListener('click', openTarot);
btnClose.addEventListener('click', closeTarot);
firstCard.addEventListener('click', slideFirst);
secondCard.addEventListener('click', slideSecond);

  


