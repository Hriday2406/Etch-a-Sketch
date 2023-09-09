function randomColor(min){
    let r = Math.floor(Math.random()*(255 + 1)) + min;
    let g = Math.floor(Math.random()*(255 + 1)) + min;
    let b = Math.floor(Math.random()*(255 + 1)) + min;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function createGrid(size){
    for(let i=0; i<size; i++){
        let gridRow = document.createElement('div');
        for(let j=0; j<size; j++){
            let gridBox = document.createElement('div');
            gridBox.classList.add('box');
            gridBox.addEventListener('mouseover', () => {
                gridBox.style.backgroundColor = randomColor(colored);
            });
            gridRow.append(gridBox);
        }
        gridRow.classList.add('row');
        container.appendChild(gridRow);
    }
}

function removeGrid(size){
    for(let i=0; i<size; i++)
        container.removeChild(document.querySelector('#container').firstChild);
}

const container = document.querySelector('#container');
let size = 16;
colored = 255;
createGrid(size);

const btnColored = document.querySelector('#btnColored');
btnColored.addEventListener('click', () => {
    if(colored == 255)
        colored = 0;
    else
        colored = 255;
})

const btnEraser = document.querySelector('#btnEraser');
btnEraser.addEventListener('click', () => {
    colored = -255;
})

const sliderValue = document.querySelector('#sliderValue');
const slider = document.querySelector('#slider');
slider.oninput = function() {
    let temp = size;
    size = this.value;
    removeGrid(temp);
    createGrid(size);
    sliderValue.textContent = `Value = ${size}`;
};

const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', () => {
    removeGrid(size);
    createGrid(size);
})