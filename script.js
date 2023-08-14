// app.js
const playPauseButton = document.getElementById("playPauseButton");
const playPauseIcon = playPauseButton.querySelector("i");
const audio = new Audio("music.mp3"); // Create an Audio element and load the music file

let isPlaying = false;

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause(); // Pause the audio if it's currently playing
    } else {
        audio.play(); // Play the audio if it's currently paused
    }

    isPlaying = !isPlaying;
    playPauseIcon.classList.toggle("fa-circle-play", !isPlaying);
    playPauseIcon.classList.toggle("fa-circle-pause", isPlaying);
});

// Update the play/pause button when the audio playback status changes
audio.addEventListener("play", () => {
    isPlaying = true;
    playPauseIcon.classList.remove("fa-circle-play");
    playPauseIcon.classList.add("fa-circle-pause");
});

audio.addEventListener("pause", () => {
    isPlaying = false;
    playPauseIcon.classList.remove("fa-circle-pause");
    playPauseIcon.classList.add("fa-circle-play");
});
