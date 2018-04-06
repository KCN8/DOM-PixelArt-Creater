let backgroundColors = ["white","silver","gray","black","red","maroon","yellow","olive","lime","green","aqua","teal","blue","navy","fuchsia","purple"]
let brushColor = 'white'

function createCanvas() {
    for(i=0; i <= 1439; i++){
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
        let paletteSwatch = document.getElementById('colorpalette');
        paletteSquare.setAttribute('class', "palette-border");
        paletteSquare.style.backgroundColor = backgroundColors[i]
        paletteSquare.addEventListener('click', function(event){
            brushColor = paletteSquare.style.backgroundColor
        });
        paletteSwatch.appendChild(paletteSquare)
    }
}
createPalette();
