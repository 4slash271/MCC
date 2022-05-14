const canvas = new fabric.Canvas("c");
const ctx = canvas.getContext("2d");
const saveBtn = document.getElementById("jsSave");
const undoBtn = document.getElementById("jsUndo");
const redoBtn = document.getElementById("jsRedo");
const modeBtn = document.getElementById("jsMode");
const svg = document.getElementsByClassName("canvas");
let drawing = true;
let moving = false;

// function stopDrawing(){drawing = false;}
// function startDrawing(){drawing = true;}

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
ctx.beginPath();
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "white";

// saveBtn.addEventListener("click", () => {
//     downloadSVG;
// });

// const downloadSVG = () => {
//     const svg = canvas.toSVG();
//     const a = document.createElement("a");
//     const blob = new Blob([svg], { type: "image/svg+xml" });
//     const blobURL = URL.createObjectURL(blob);
//     a.href = blobURL;
//     a.download = "my_drawing.svg";
//     a.click();
//     URL.revokeObjectURL(blobURL);
// };

// function sendCanvasAsAttachment(canvas) {
//     var base64 = canvas.toDataURL();
//     emailjs.send("service_mcc", "template_ta5movq", {
//         content: base64,
//     });
// }
handleModeClick();

function handleModeClick() {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (moving === true) {
        //1. filling의 데이터 유형과 true의 데이터 유형이 같고 value가 같으면 다음을 리턴하라.
        //2. 같으면 filling 은 false가 되고 mode는 Fill이 된다 (현재 paint 상태)
        moving = false;
        modeBtn.innerHTML = "<i class='fas fa-pencil-alt'></i>";
    } else {
        //2.filling !== true 라면(false 상태), filling 은 true로 바뀌고 버튼은 paint로 바뀜(fill 상태)
        moving = true; //filling이 true면 paint
        modeBtn.innerHTML = '<i class="far fa-hand-paper"></i>';
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