let currentColor;
let previousColor;

function showColor(id){
    document.getElementById(id).classList.remove(previousColor)
    document.getElementById(id).classList.add(currentColor)
    previousColor = currentColor
}

function saveColor(color){
    currentColor = color
    console.log(color)
}
