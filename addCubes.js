document.addEventListener("DOMContentLoaded", function () {
  // Функция для выбора случайной буквы из списка
  function getRandomLetter(letters) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
  }

  // Функция для инициализации доски с кубиками 4x4
  function initializeBoard() {
    const boardContainer = document.getElementById("board-container");
    const lettersList = [
      "AAEEGN",
      "ABBJOO",
      "ACHOPS",
      "AFFKPS",
      "AOOTTW",
      "CIMOTU",
      "DEILRX",
      "DELRVY",
      "DISTTY",
      "EEGHNW",
      "EEINSU",
      "EHRTVW",
      "EIOSST",
      "ELRTTY",
      "HIMNUQu",
      "HLNNRZ",
    ];

    boardContainer.innerHTML = "";

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const cube = document.createElement("div");
        cube.classList.add("cube");
        const randomLetters = getRandomLetter(lettersList);
        const randomLetter = getRandomLetter(randomLetters);
        cube.textContent = randomLetter;
        boardContainer.appendChild(cube);
      }
    }
  }
  initializeBoard();
});
