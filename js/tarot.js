let tarot = document.querySelector('.content > .tarot__deck ');
let tarotModal = document.querySelector('.modal--tarot');
let nextCard = document.querySelector('.modal--tarot .tarot');
let btnClose = document.querySelector('.modal--tarot .bt-close');
function openTarot(){
    tarotModal.style.display="flex";
    nextCard.style.background="url(../src/img/tarot_back.png) no-repeat center"
    nextCard.style.backgroundSize="cover"
   tL();
    function tL(){
        nextCard.classList.add("turnL");
    nextCard.style.background="url(../src/img/magician.png) no-repeat center"
    nextCard.style.backgroundSize="cover"
    }
    

};

function closeTarot(){
tarotModal.style.display="none";
};

function slideTarot(){
    nextCard.classList.remove("turnL");
    nextCard.style.background="url(../src/img/magician.png) no-repeat center"
    nextCard.classList.add("turnR");
    nextCard.style.background="url(../src/img/queen_sword.png) no-repeat center"
    nextCard.style.backgroundSize="cover"
}
tarot.addEventListener('click', openTarot);
btnClose.addEventListener('click', closeTarot);
nextCard.addEventListener('click', slideTarot);