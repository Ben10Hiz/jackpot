// Selectors
const gameArea = document.getElementById("game-area");
const playButton = document.getElementById("play-button");
const potAmount = document.getElementById("pot-amount");

// Initialize Game Variables
let pot = 0;

// Emoji Array and Configuration
const emojis = ["😀", "😎", "🎉", "🔥", "✨", "🦄", "🍀", "🏆", "🍕", "🎵"];
const totalEmojis = 100;

// Function to Generate Random Emojis
function generateEmojis() {
  gameArea.innerHTML = ""; // Clear previous emojis
  for (let i = 0; i < totalEmojis; i++) {
    const emojiDiv = document.createElement("div");
    emojiDiv.classList.add("emoji");

    // Random Emoji
    emojiDiv.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    // Random Position
    emojiDiv.style.top = `${Math.random() * 90}vh`;
    emojiDiv.style.left = `${Math.random() * 90}vw`;

    // Add Floating Animation
    emojiDiv.style.animationDuration = `${2 + Math.random() * 3}s`; // Random speed between 2-5 seconds
    emojiDiv.style.animationDelay = `${Math.random() * 2}s`; // Staggered start times

    // Click Event Handler
    emojiDiv.addEventListener("click", () => {
      // Temporary placeholder for server logic
      alert("Emoji clicked!"); // Replace with server logic later
    });

    // Append Emoji to the Game Area
    gameArea.appendChild(emojiDiv);
  }
}

// Handle Play Button Click
playButton.addEventListener("click", () => {
  pot += 1; // Add $1 to the pot
  potAmount.textContent = `$${pot}`; // Update the pot display
  generateEmojis(); // Refresh emojis for the new round
});

// Initial Emoji Generation
generateEmojis();

// Start the game with initial emojis
generateEmojis();
