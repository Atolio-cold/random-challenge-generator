// List of sample challenges
const challenges = [
  "Do 10 squats",
  "Drink a glass of water",
  "Smile at someone",
  "Take a 5-minute break",
  "Write down one goal for today",
  "Give someone a compliment",
  "Close your eyes and breathe deeply for 30 seconds",
  "Do 10 push-ups",
  "Avoid your phone for 10 minutes"
];

// Get DOM elements
const generateBtn = document.getElementById("generate");
const completeBtn = document.getElementById("complete");
const challengeText = document.getElementById("challenge");
const counterText = document.getElementById("counter");

// Load saved counter from localStorage (or use 0)
let counter = Number(localStorage.getItem("challengeCounter")) || 0;
counterText.textContent = counter;

// Function to generate a random challenge
function generateChallenge() {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  challengeText.textContent = challenges[randomIndex];
}

// Function to mark challenge as completed and update counter
function completeChallenge() {
  counter++;
  counterText.textContent = counter;
  localStorage.setItem("challengeCounter", counter);
}

// Add event listeners
generateBtn.addEventListener("click", generateChallenge);
completeBtn.addEventListener("click", completeChallenge);
