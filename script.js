const cellContainer = document.querySelector('.cell-container');

let numberOfGrid = 16;
let cells;

generateCells(numberOfGrid);

function generateCells(n){
    clearCells();
    for(let i = 0; i < n; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < n; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        cellContainer.appendChild(row);
    }
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover',changeColor));
    cells.forEach(cell => cell.addEventListener('mousedown',changeColor));
}

function clearCells(){
    cellContainer.innerHTML = '';
}

let colorButtonSelected = true;
let whiteButtonSelected = false;
let rainbowButtonSelected = false;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return;
    if(whiteButtonSelected === true){
        this.style.backgroundColor = 'white';
    }
    else if(rainbowButtonSelected === true){
        this.style.backgroundColor = getRandomColor();
    }
    else this.style.backgroundColor = colorPicker.value;
    
}

function getRandomColor(){
    const valueR = Math.floor(Math.random()*256);
    const valueG = Math.floor(Math.random()*256);
    const valueB = Math.floor(Math.random()*256);
    return `rgb(${valueR}, ${valueG}, ${valueB})`;
}


const colorPicker = document.querySelector('.colorPicker');
const colorButton = document.querySelector('.color');
const whiteButton = document.querySelector('.white');
const rainbowButton = document.querySelector('.rainbow');
const clearButton = document.querySelector('.clear');

colorPicker.addEventListener('input', () => {
    // console.log(colorPicker.value);
});

colorButton.addEventListener('click', () => {
    colorButtonSelected = true;
    whiteButtonSelected = false;
    rainbowButtonSelected = false;
    setSelectedButton();
});

whiteButton.addEventListener('click', () => {
    whiteButtonSelected = true;
    colorButtonSelected = false;
    rainbowButtonSelected = false;
    setSelectedButton();
});

rainbowButton.addEventListener('click', () => {
    rainbowButtonSelected = true;
    whiteButtonSelected = false;
    colorButtonSelected = false;
    setSelectedButton();
});

clearButton.addEventListener('click', () => {
    cells.forEach(cell => cell.style.backgroundColor = 'white');
});

function setSelectedButton(){
    if(colorButtonSelected === true){
        colorButton.classList.add('selected');
        whiteButton.classList.remove('selected');
        rainbowButton.classList.remove('selected');
    }
    else if(whiteButtonSelected === true){
        whiteButton.classList.add('selected');
        colorButton.classList.remove('selected');
        rainbowButton.classList.remove('selected');
    }
    else if(rainbowButtonSelected === true){
        rainbowButton.classList.add('selected');
        colorButton.classList.remove('selected');
        whiteButton.classList.remove('selected');
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
  output.innerHTML = `${this.value} x ${this.value}`;
}

slider.addEventListener('change', (e) => {
    numberOfGrid = e.target.value;
    generateCells(numberOfGrid);
}, false);