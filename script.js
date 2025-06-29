const words = ["javascript", "python", "html", "css", "node", "react", "express", "angular", "jquery"];
let currentWord = "";
let score = 0;

const scrambledWordElement = document.getElementById("scrambledWord");
const userInput = document.getElementById("userInput");
const feedback = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const checkBtn = document.getElementById("checkBtn");

function scrambleWord(word) {
    let scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    return scrambled;
}

function displayNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    const scrambledWord = scrambleWord(currentWord);
    scrambledWordElement.textContent = scrambledWord;
    feedback.textContent = ""; 
    userInput.value = ""; 
}

checkBtn.addEventListener("click", () => {
    const userAnswer = userInput.value.trim().toLowerCase();
    if (userAnswer === currentWord) {
        score++;
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Incorrect! The word was ${currentWord}.`;
        feedback.style.color = "red";
    }
    scoreElement.textContent = score;
    setTimeout(displayNewWord, 2000); 
});

displayNewWord();
