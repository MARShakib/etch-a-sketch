const cellContainer = document.querySelector('.cell-container');

let numberOfGrid = 16;

for(let i = 0; i < numberOfGrid; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j = 0; j < numberOfGrid; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    cellContainer.appendChild(row);
}

// let currentColor = 'black';
let blackButtonSelected = true;
let whiteButtonSelected = false;
let rainbowButtonSelected = false;

function changeColor(){
    if(whiteButtonSelected === true){
        this.style.backgroundColor = 'white';
    }
    else if(rainbowButtonSelected === true){
        this.style.backgroundColor = getRandomColor();
    }
    else this.style.backgroundColor = 'black';
    
}

function getRandomColor(){
    const valueR = Math.floor(Math.random()*256);
    const valueG = Math.floor(Math.random()*256);
    const valueB = Math.floor(Math.random()*256);
    return `rgb(${valueR}, ${valueG}, ${valueB})`;
}

let cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click',changeColor));

const blackButton = document.querySelector('.black');
const whiteButton = document.querySelector('.white');
const rainbowButton = document.querySelector('.rainbow');
const clearButton = document.querySelector('.clear');

blackButton.addEventListener('click', () => {
    blackButtonSelected = true;
    whiteButtonSelected = false;
    rainbowButtonSelected = false;
});

whiteButton.addEventListener('click', () => {
    whiteButtonSelected = true;
    blackButtonSelected = false;
    rainbowButtonSelected = false;
});

rainbowButton.addEventListener('click', () => {
    rainbowButtonSelected = true;
    whiteButtonSelected = false;
    blackButtonSelected = false;
});

clearButton.addEventListener('click', () => {
    cells.forEach(cell => cell.style.backgroundColor = 'white');
});