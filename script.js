const container = document.querySelector('#container');
let size = 16;
createGrid(size);
size++;

function createGrid(size){
    for(let i=0; i<size; i++){
        let gridRow = document.createElement('div');
        for(let j=0; j<size; j++){
            let gridBox = document.createElement('div');
            gridBox.classList.add('box');
            gridBox.addEventListener('mouseover', () => {
                gridBox.style.backgroundColor = 'white';
            });
            gridRow.append(gridBox);
        }
        gridRow.classList.add('row');
        container.appendChild(gridRow);
    }
}

function removeGrid(size){
    for(let i=0; i<size; i++){
        let row = document.querySelector('#container').firstChild;
        container.removeChild(row);
    }
}

const btnSize = document.querySelector('#btnSize');
btnSize.addEventListener('click', () => {
    removeGrid(size);
    size = +prompt("Enter size");
    createGrid(size);
})