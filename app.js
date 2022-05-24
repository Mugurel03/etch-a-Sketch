const STANDARD_COLOR = "#333333";
const STANDARD_MODE = "color";
const STANDARD_SIZE = 16;

let currentColor = STANDARD_COLOR;
let currentMode = STANDARD_MODE;
let currentSize = STANDARD_SIZE;

function setCurrentColor (newColor) {
    currentColor = newColor;
}

function setCurrentMode (newMode) {
    activateButton(newMode);
    currentMode = newMode ;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}


const colorPicker = document.getElementById('color-selector');
const colorBtn = document.getElementById('color');
const clearBtn = document.getElementById('clear');
const eraserBtn = document.getElementById('eraser');
const colorfulBtn = document.getElementById('colorful');