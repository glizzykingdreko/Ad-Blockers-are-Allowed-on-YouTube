function startVideo() {
    const playButton = document.querySelector('.ytp-play-button.ytp-button');
    const title = playButton.getAttribute('data-title-no-tooltip');
    if (playButton && title == "Play") {
        playButton.click();
        console.log("Video Played");
    }
}

function checkAndRemovePopup() {
    const popupContainer = document.querySelector('ytd-popup-container');
    if (popupContainer) {
        popupContainer.remove();
        console.log("Adblock popup removed");
        // startVideo()
        // call here instead if you want to play the video only after the popup is removed
    }
    startVideo(); 
    // call here if you, like me wanna always have the video running
        
}

// Call the function at regular intervals
setInterval(checkAndRemovePopup, 1000);
