let tarot = document.querySelector('.content > .tarot__deck ');
let tarotModal = document.querySelector('.modal--tarot');
let nextCard = document.querySelector('.modal--tarot .tarot');
let btnClose = document.querySelector('.modal--tarot .bt-close');
function openTarot(){
tarotModal.style.display="flex";
};
function closeTarot(){
tarotModal.style.display="none";
};
function slideTarot(){
    nextCard.style.background="url(../src/img/tarot_back.png) no-repeat center"
}
tarot.addEventListener('click', openTarot);
btnClose.addEventListener('click', closeTarot);
nextCard.addEventListener('click', slideTarot);