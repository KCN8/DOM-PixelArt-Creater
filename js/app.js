let backgroundColors = ["White","Gray","Black","Red","Maroon","Green","Aqua","Teal","Blue","Navy","Fuchsia","Purple"]
let brushColor = 'white'

function createCanvas() {
    for(i=0; i <= 839; i++){
        let newSquare = document.createElement('div');
        let pixelBoard = document.getElementById('pixelboard');
        newSquare.setAttribute('class', 'border');
        newSquare.addEventListener("click", function(event){
            newSquare.style.backgroundColor = brushColor
        });
        pixelBoard.appendChild(newSquare)
    }
} 
createCanvas();
function createPalette(){
    for(i=0; i < backgroundColors.length; i++){
        let paletteSquare = document.createElement('div');
        let paletteSwatch = document.getElementById('colorPalette');
        let paintHere = document.getElementById("paintHere")
        let CurrentColor = document.getElementById("colorHeader")
        paletteSquare.setAttribute('class', "palette-border");
        paletteSquare.style.backgroundColor = backgroundColors[i]
        paletteSquare.addEventListener('click', function(event){
            brushColor = paletteSquare.style.backgroundColor
            CurrentColor.innerHTML = brushColor
            CurrentColor.style.color = brushColor 
            paintHere.style.color = brushColor
        });
        paletteSwatch.appendChild(paletteSquare)
    }
}
createPalette();
