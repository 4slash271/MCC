/*************************      글로벌 설정          *************************/

let wrapper = document.querySelectorAll('.wrapper')
let main = document.querySelector('.main')
let about = document.querySelector('.about')
let gallery = document.querySelector('.gallery')
let play = document.querySelector('.play')

let btnNext = document.querySelector('.bt-next');
let btnPrev = document.querySelector('.bt-prev');

var index = 1;

function flipNext(){
    if(index<3){
        index++;
    }
    wrapper[index].style.zIndex= 1;
    wrapper[index-1].style.zIndex= 0;       
}
function flipPrev(){
    if(index>1){
        index=index-1;
    }
    wrapper[index].style.zIndex= 1;
    wrapper[index+1].style.zIndex= 0;       
}
       
btnNext.addEventListener('click',flipNext);
btnPrev.addEventListener('click',flipPrev);
