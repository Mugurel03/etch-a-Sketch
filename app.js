const STANDARD_COLOR = "#333333";
const STANDARD_MODE = "color";
const STANDARD_SIZE = 16;

let currentColor = STANDARD_COLOR;
let currentMode = STANDARD_MODE;
let currentSize = STANDARD_SIZE;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}


const colorPicker = document.getElementById('color-selector');
const colorBtn = document.getElementById('color');
const clearBtn = document.getElementById('clear');
const eraserBtn = document.getElementById('eraser');
const colorfulBtn = document.getElementById('colorful');
const gridValue = document.getElementById('gridValue');
const gridSlider = document.getElementById('gridSlider');
const grid = document.getElementById('grid');


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeSize(value) {
    setCurrentSize(value);
    updateCurrentSize(value);
    reloadGrid(value);
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;
}


function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function clearGrid() {
    grid.innerHTML = '';
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mousedown) return
    if (currentMode = "colorful") {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    }else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = `#fefefe`;
    }
}

function activateButton(newMode) {
    if (currentMode === "colorful") {
        colorBtn.classList.remove('active');
    }else if (currentMode === 'color') {
        colorBtn.classList.remove('active');
    }else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active');
    }


    if (newMode === 'colorful') {
        colorBtn.classList.add('active');
    }else if (newMode === 'color') {
        colorBtn.classList.add('active');
    }else if (newMode === 'eraser') {
        eraserBtn.classList.add('active');
    }
}


window.onload = () => {
    setupGrid(DEFAULT_SIZE);
    activateButton(DEFAULT_MODE);
}
