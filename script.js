const cellContainer = document.querySelector('.cell-container');

for(let i = 0; i < 16 ; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j = 0; j < 16; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    cellContainer.appendChild(row);
}