let tarot = document.querySelector('.content > .tarot__deck ');
let tarotModal = document.querySelector('.modal--tarot');
let btnClose = document.querySelector('.modal--tarot .bt-close');
function openTarot(){
tarotModal.style.display="flex";
};
function closeTarot(){
tarotModal.style.display="none";
};
tarot.addEventListener('click', openTarot);
btnClose.addEventListener('click', closeTarot);