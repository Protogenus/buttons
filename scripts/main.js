let currentAudio = null; // Variable to hold the current audio element

document.addEventListener('DOMContentLoaded', function() {
    const artCanvas = document.getElementById('artCanvas');
    const numberOfButtons = 100; // Adjust this number as needed

    for (let i = 0; i < numberOfButtons; i++) {
        const button = document.createElement('button');
        button.classList.add('button');
        button.addEventListener('click', function() {
            // Randomize the button's appearance
            this.style.backgroundColor = getRandomColor();
            
            // Play a random sound and stop the previous one
            playRandomSound();
            
            // Add a temporary animation effect
            this.classList.add('animate');
            setTimeout(() => this.classList.remove('animate'), 500);
        });
        artCanvas.appendChild(button);
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function playRandomSound() {
    // Stop the currently playing sound if any
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Rewind the track to the beginning
    }

    // Example of playing a random sound effect
    const sounds = ['assets/buddyout.mp3', 'assets/dooropen.mp3', 'assets/ice-message.wav', 'assets/imrcv.wav', 'assets/lionking.mp3', 'assets/psintro.mp3'];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    currentAudio = new Audio(randomSound); // Update the currentAudio variable
    currentAudio.play();
}