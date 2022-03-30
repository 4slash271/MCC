const canvas = new fabric.Canvas('c');
const ctx =canvas.getContext('2d');
const saveBtn = document.getElementById("jsSave");
const mode = document.getElementById("jsMode");
let drawing = false;     
let moving = false;     

function stopDrawing(){drawing = false;}
function startDrawing(){drawing = true;}

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
ctx.beginPath();
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "white";



if (fabric.PatternBrush) {
  const vLinePatternBrush = new fabric.PatternBrush(canvas);
  vLinePatternBrush.getPatternSrc = function() {
    const patternCanvas = fabric.document.createElement('canvas');
    patternCanvas.width = patternCanvas.height = 10;
    return patternCanvas;
  };
  };

function handleModeClick(){
 canvas.isDrawingMode = !canvas.isDrawingMode;
    if(moving === true){//1. filling의 데이터 유형과 true의 데이터 유형이 같고 value가 같으면 다음을 리턴하라.
       //2. 같으면 filling 은 false가 되고 mode는 Fill이 된다 (현재 paint 상태)
       moving = false;
      mode.innerHTML = "<i class='fas fa-pencil-alt'></i>";
    }
    else{ //2.filling !== true 라면(false 상태), filling 은 true로 바뀌고 버튼은 paint로 바뀜(fill 상태)
      moving = true;//filling이 true면 paint
        mode.innerHTML = '<i class="far fa-hand-paper"></i>';
       }
 }
function handleUndo(event){

}
function handleCM(event){
      event.preventDefault();
    }
      

//mousedown 마우스 포인터가 포인팅 장치를 누를 때
//mouseup 마우스 포인터가 클릭 상태를 해제할 때

if(mode){
  mode.addEventListener("click",handleModeClick);
}