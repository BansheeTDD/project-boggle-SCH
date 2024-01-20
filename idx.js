// const { dictionary, dictionarySet } = require('./dictionary');
// const { initializeBoard } = require('./addCubes');
const shuffleButton = document.getElementById('shuffle-btn');
const finishButton = document.getElementById('finish-btn');
// const allButtons = document.getElementById('board-container');
// const button11 = document.getElementById('/*id кнопки*/');
// const word = document.getElementById('word');
let enteredWord = '';


const input = document.getElementById('strNum');


// console.log(dictionarySet.has("ZYMOSIMETERS"));

// Прослушивание кнопки "Перемешать"
shuffleButton.addEventListener('click', (event) => {
    console.log('перемешать слова');
    // return initializeBoard;
});

// Прослушивание кнопки "Завершить игру"
finishButton.addEventListener('click', (event) => {
    console.log('Завершить игру');
    // 
});

// allButtons.addEventListener('click', (event) => {
//     if(event.target.className === 'word-board') {
//         console.log('lf `,fyf');
//     }
// });

// allButtons.addEventListener('click', (event) => {
//     if (allButtons) {

//     }
// });