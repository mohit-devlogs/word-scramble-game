const words = ["javascript", "python", "html", "css", "node", "react", "express", "angular", "jquery"];
let currentWord = "";
let score = 0;

// Select DOM elements
const scrambledWordElement = document.getElementById("scrambledWord");
const userInput = document.getElementById("userInput");
const feedback = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const checkBtn = document.getElementById("checkBtn");

// Function to scramble the word
function scrambleWord(word) {
    let scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    return scrambled;
}

// Function to display a new scrambled word
function displayNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    const scrambledWord = scrambleWord(currentWord);
    scrambledWordElement.textContent = scrambledWord;
    feedback.textContent = ""; // Clear any previous feedback
    userInput.value = ""; // Clear the input field
}

// Check the user's answer
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
    setTimeout(displayNewWord, 2000); // Show a new word after 2 seconds
});

// Initialize the game with the first word
displayNewWord();
