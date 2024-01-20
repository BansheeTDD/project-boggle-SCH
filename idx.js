// const { dictionary, dictionarySet } = require('./dictionary');

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
    console.log('перемешать буквы');
    return rollDice();
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

let tdArray = document.getElementsByTagName("TD");

function rollDice(){
    let dice = [
        ['A', 'A', 'E', 'E', 'G', 'N'],
        ['A', 'B', 'B', 'J', 'O', 'O'],
        ['A', 'C', 'H', 'O', 'P', 'S'],
        ['A', 'F', 'F', 'K', 'P', 'S'],
        ['A', 'O', 'O', 'T', 'T', 'W'],
        ['C', 'I', 'M', 'O', 'T', 'U'],
        ['D', 'E', 'I', 'L', 'R', 'X'],
        ['D', 'E', 'L', 'R', 'V', 'Y'],
        ['D', 'I', 'S', 'T', 'T', 'Y'],
        ['E', 'E', 'G', 'H', 'N', 'W'],
        ['E', 'E', 'I', 'N','S', 'U'],
        ['E', 'H', 'R', 'T', 'V', 'W'],
        ['E', 'I', 'O', 'S', 'S', 'T'],
        ['E', 'L', 'R', 'T', 'T', 'Y'],
        ['H', 'I', 'M', 'N', 'U', 'Qu'],
        ['H', 'L', 'N', 'N', 'R', 'Z']
    ];

    let randomDice = [];
    for ( let i = dice.length ; i > 0 ; i-- ) {
        let random = Math.floor( Math.random() * i );
        randomDice.push(...dice.splice(random, 1));
    }

    for ( let i = 0 ; i < 16 ; i++ ) {
        let random = Math.floor( Math.random() * 6 );
        tdArray[i].innerHTML = randomDice[i][random];
    }
}

window.onload = initialize;
function initialize() { 
    rollDice();
}