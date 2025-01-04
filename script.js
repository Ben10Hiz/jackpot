// Selectors
const gameArea = document.getElementById("game-area");
const playButton = document.getElementById("play-button");
const potAmount = document.getElementById("pot-amount");

// Initialize Game Variables
let pot = 0;

// Generate Random Emojis
const emojis = ["😀", "😎", "🎉", "🔥", "✨", "🦄", "🍀", "🏆", "🍕", "🎵"];
const totalEmojis = 100;

// Generate Random Positions for Emojis
function generateEmojis() {
  gameArea.innerHTML = ""; // Clear previous emojis
  for (let i = 0; i < totalEmojis; i++) {
    const emojiDiv = document.createElement("div");
    emojiDiv.classList.add("emoji");
    emojiDiv.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emojiDiv.style.top = `${Math.random() * 90}%`;
    emojiDiv.style.left = `${Math.random() * 90}%`;

    emojiDiv.addEventListener("click", () => {
      alert("Emoji clicked!"); // Replace with server logic later
    });

    gameArea.appendChild(emojiDiv);
  }
}

// Handle Play Button Click
playButton.addEventListener("click", () => {
  pot += 1; // Add $1 to the pot
  potAmount.textContent = pot; // Update the pot display
  generateEmojis(); // Refresh emojis for the new round
});

// Start the game with initial emojis
generateEmojis();
