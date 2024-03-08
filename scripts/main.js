let currentAudio = null; // Variable to hold the current audio element
let lastPlayedIndex = -1; // Variable to remember the last played sound index
let currentColorIndex = 0; // Variable to keep track of the last used color index

// List of colors
const colors = ['#00916E', '#FEEFE5', '#FFCF00', '#EE6123', '#FA003F'];

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffled array of sounds
const sounds = ['assets/buddyout.mp3', 'assets/dooropen.mp3', 'assets/icq-message.wav', 'assets/imrcv.wav', 'assets/lionking.mp3', 'assets/psintro.mp3'];
shuffleArray(sounds);

document.addEventListener('DOMContentLoaded', function() {
    const artCanvas = document.getElementById('artCanvas');
    const numberOfButtons = 100; // Adjust this number as needed

    for (let i = 0; i < numberOfButtons; i++) {
        const button = document.createElement('button');
        button.classList.add('button');
        button.addEventListener('click', function() {
            // Change the button's appearance to the next color in the sequence
            this.style.backgroundColor = getRandomColor();
            
            // Play a random sound that is different from the last one
            playRandomSound();
            
            // Add a temporary animation effect
            this.classList.add('animate');
            setTimeout(() => this.classList.remove('animate'), 500);
        });
        artCanvas.appendChild(button);
    }
});

function getRandomColor() {
    const color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Move to the next color or wrap around to the start
    return color;
}

function playRandomSound() {
    // Stop the currently playing sound if any
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Rewind the track to the beginning
    }

    // Find the next sound that is different from the last one
    let nextIndex = (lastPlayedIndex + 1) % sounds.length;
    while (nextIndex === lastPlayedIndex) {
        nextIndex = (lastPlayedIndex + 1) % sounds.length;
    }
    lastPlayedIndex = nextIndex;

    currentAudio = new Audio(sounds[nextIndex]); // Update the currentAudio variable
    currentAudio.play();
}
