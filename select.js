let letterArr = []; //
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
    } else
    if ( td.className === "" || td.className === null ) {
        // получаем номера столбцов и строк и преобразуем в целые
        let c = parseInt( lastSelectedDice.getAttribute("data-column") ); //номер колонки посл.нажатой буквы
        let r = parseInt( lastSelectedDice.getAttribute("data-row") ); //номер строки посл.нажатой
        let tdC = parseInt( td.getAttribute("data-column") ); //номер колонки сейчас нажатой буквы
        let tdR = parseInt( td.getAttribute("data-row") ); //номер строки сейчас нажатой
        // проверяем проверку выбора только соседних клеток
        if ( ( tdC <= c+1 && tdC >= c-1 ) && ( tdR <= r+1 && tdR >= r-1 ) ) {
            highlight(td);
        }
    } else
        
    if (td.className === "selected" && td === lastSelectedDice) { //если второй раз нажимаем на букву - не выбираем её
        td.className = "";
        selectedDiceArr.pop(td);
        letterArr.pop(td.innerHTML);
    }
    //в конце нужно запустить функцию записи слова
}

for ( let i = 0 ; i < 16 ; i++ ) {     
            tdArray[i].onclick = function(){select(tdArray[i])};
    }