// const { dictionary, dictionarySet } = require('./dictionary');

const shuffleButton = document.getElementById('shuffle-btn');
const finishButton = document.getElementById('finish-btn');
const allButtons = document.getElementById('container');
const input = document.getElementById('strNum');
let enteredWord = '';

let timerElement = document.getElementById("timer");
let totalTime = 180; // Время в секундах (3 минуты)
let timerInterval;

// console.log(dictionarySet.has("ZYMOSIMETERS"));

// Прослушивание кнопки "Перемешать"
shuffleButton.addEventListener('click', (event) => {
    console.log('перемешать буквы');
    rollDice();
    input.innerText = 'Введите слово';
    enteredWord = '';
});

// Прослушивание кнопки "Завершить игру"
finishButton.addEventListener('click', (event) => {
    console.log('Завершить игру');
    input.innerText = 'Введите слово';
    enteredWord = '';
    console.log(selectedDiceArr);
    // 
});

// Прослушивание таблицы
allButtons.addEventListener('click', function(event) {
    enteredWord += event.target.innerText;
    input.innerText = enteredWord;
    // select(td);
    
    // let c = parseInt(lastSelectedDice.getAttribute("data-column"));
    console.log(parseInt(event.target.getAttribute("data-row")));
    console.log(parseInt(event.target.getAttribute("data-column")));
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

function updateTimerDisplay() {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function rollDice(){
    clearInterval(timerInterval);
    totalTime = 180;
    updateTimerDisplay();

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

    timerInterval = setInterval(function () {
        totalTime--;
        updateTimerDisplay();
    
        if (totalTime === 0) {
          clearInterval(timerInterval);
          alert("Время вышло!");
        }
    }, 1000);
}

window.onload = initialize;
function initialize() {
    rollDice();
}




let selectedDiceArr = []; // массив, который собирает нажатые буквы

function highlight(td) {
    td.className = "selected";
    selectedDiceArr.push(td);
    letterArr.push(td.innerHTML);
} //возможно нужно прописать цвет нажатой буквы, чтобы подсвечивалось что выбрано


function select(td) {
    let lastSelectedDice = selectedDiceArr[selectedDiceArr.length-1]; //последняя нажатая буква
    if ( selectedDiceArr[0] === undefined ) {   //если ничего  не нажато, то подсвечиваем
        highlight(td);
    } else if ( td.className === "" || td.className === null ) {
        // получаем номера столбцов и строк и преобразуем в целые
        let c = parseInt( lastSelectedDice.getAttribute("data-column") ); //номер колонки посл.нажатой буквы
        let r = parseInt( lastSelectedDice.getAttribute("data-row") ); //номер строки посл.нажатой
        let tdC = parseInt( td.getAttribute("data-column") ); //номер колонки сейчас нажатой буквы
        let tdR = parseInt( td.getAttribute("data-row") ); //номер строки сейчас нажатой
        // проверяем проверку выбора только соседних клеток
        if ( ( tdC <= c+1 && tdC >= c-1 ) && ( tdR <= r+1 && tdR >= r-1 ) ) {
            highlight(td);
        }
    } else if (td.className === "selected" && td === lastSelectedDice) { //если второй раз нажимаем на букву - не выбираем её
        td.className = "";
        selectedDiceArr.pop(td);
        letterArr.pop(td.innerHTML);
    }
    //в конце нужно запустить функцию записи слова
}
