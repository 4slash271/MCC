const canvas = new fabric.Canvas("c");
const mainWrapper = document.querySelector(".play.wrapper");
fabric.Object.prototype.transparentCorners = false;
canvas.selection = false;
const ctx = canvas.getContext("2d");
const saveBtn = document.getElementById("jsSend");
const undoBtn = document.getElementById("jsUndo");
const redoBtn = document.getElementById("jsRedo");
const modeBtn = document.getElementById("jsMode");
let colorPicker = document.getElementById("jsColor");
const check = document.querySelector(".bt-check");
const reject = document.querySelector(".bt-reject");
const modal = document.querySelector(".modal");
canvas.isDrawingMode = true;
let drawing = true;
let deleting = false;
let moving = false;
// function stopDrawing(){drawing = false;}
// function startDrawing(){drawing = true;}
// ctx.strokeStyle = INITIAL_COLOR;
// ctx.lineWidth = 2.5;

// ctx.beginPath();
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "white";
// window.onresize = function(){
//     console.log(mainWrapper.clientWidth);
//     console.log(canvas.width);
//     canvas.width = mainWrapper.clientWidth* 0.6 +'px';
//     canvas.height = mainWrapper.clientWidth* 0.6 +'px';
// }


    function checkedBox(event){
            if(event.target.checked)  {
                modal.classList.remove("hidden");
                check.addEventListener('click',function(){
                    modal.classList.add("hidden");
                })
                reject.addEventListener('click',function(){
                    parent.document.location.reload()

                })
              }
       
              else {
                modal.classList.add("hidden");
               


              }
    }
        window.onload = function() {
            document.getElementById("mail").addEventListener("submit", function(event) {
            event.preventDefault();
        
            const userName = document.querySelector(".play--writer").value;
            const userEmail = document.querySelector(".play--mail").value;
            const userAddress = document.querySelector(".play--address").value;
            const userMessage = document.querySelector(".play--message").value;
        
            const svg = canvas.toDataURL();
        
             var data = {
                    content:svg,
                    user_name:userName,
                    user_email:userEmail,
                    user_address:userAddress,
                    message:userMessage,    
                 };
             emailjs.send("service_mcc", "template_ta5movq",data).then(function(){
                parent.document.location.reload()
             })
        
             });
        
        };
        
        


handleModeClick();

function handleModeClick() {
    if (drawing === true) {
        drawing = false;
        canvas.freeDrawingBrush.color=colorPicker.value;
        canvas.freeDrawingBrush.width=2;
        modeBtn.innerHTML = '<i class="fas fa-eraser"></i>';
        colorPicker.addEventListener("input", handleColorClick);

        function handleColorClick(e){
            const SELCETED_COLOR = colorPicker.value;
            
             canvas.freeDrawingBrush.color =  SELCETED_COLOR;
         
             // SELCETED_COLOR!== e.target.value?canvas.freeDrawingBrush.color=SELCETED_COLOR:canvas.freeDrawingBrush.color = e.target.value;
         
         }

    } else {
        drawing = true; //그리기
        const DELETE_COLOR = "#fff";
        canvas.freeDrawingBrush.color= DELETE_COLOR;
        canvas.freeDrawingBrush.width=25;
        modeBtn.innerHTML = "<i class='fas fa-pencil-alt'></i>";
        colorPicker.addEventListener("input", handleEraserClick);
        function handleEraserClick(e)
     {
        canvas.freeDrawingBrush.color= DELETE_COLOR;
     }
    }
} 


function handleCM(event) {
    event.preventDefault();
}

modeBtn.addEventListener("click", handleModeClick);



// canvas.isDrawingMode = true;
canvas.on("object:added", function() {
    if (!isRedoing) {
        h = [];
    }
    isRedoing = false;
});

var isRedoing = false;
var h = [];

function undo() {
    if (canvas._objects.length > 0) {
        h.push(canvas._objects.pop());
        canvas.renderAll();
    }
}

function redo() {
    if (h.length > 0) {
        isRedoing = true;
        canvas.add(h.pop());
    }
}

if (undoBtn) {
    undoBtn.addEventListener("click", undo);
}
if (redoBtn) {
    redoBtn.addEventListener("click", redo);
}



