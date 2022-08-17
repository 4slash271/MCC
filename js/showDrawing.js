/*갤러리 캔버스에 호버 시, 드로잉을 보여준다*/

let modelings = document.querySelectorAll(".album .frame canvas");
let name = modelings[0].getElementsById;
console.log(name);
console.log(modelings);

for(var j = 0; j<modelings.length; j++){
    [].forEach.call(modelings, function(e){
        modelings.forEach(modeling=>{
            modeling.addEventListener("mouseover",showDrawing)
            function showDrawing(e){
                let name = modeling.getElementById;
                console.log(name);
            }
        })
        })

    }