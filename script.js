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

let currentColor = 'black';

function changeColor(){
    this.style.backgroundColor = currentColor;
}

let cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click',changeColor));

const blackButton = document.querySelector('.black');
const whiteButton = document.querySelector('.white');

blackButton.addEventListener('click', () => {
    currentColor = 'black';
});

whiteButton.addEventListener('click', () => {
    currentColor = 'white';
});