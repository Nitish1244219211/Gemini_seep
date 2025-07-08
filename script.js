document.addEventListener('DOMContentLoaded', () => {
    const rotateDeviceContainer = document.getElementById('rotate-device-container');
    const animationWrapper = document.getElementById('animation-wrapper');
    const swooshSound = document.getElementById('swoosh-sound');
    
    const mainContent = document.getElementById('main-content');
    const companySplashScreen = document.getElementById('company-splash-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const comingSoonScreen = document.getElementById('coming-soon-screen');
    
    const tipsContainer = document.getElementById('tips-container');
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    const tips = [
        "Don't spoil other players' game by exiting the game mid-game.",
        "Don't forget to claim your daily reward!",
        "Users will be banned for 5 minutes if you exit the game mid-game.",
        "Buy emojis from the store to make gaming more fun.",
        "Seep scored during bidding will be worth points equal to the bid number!",
        "Try to remember high-point cards as much as you can to win.",
        "Found a bug? Report it from the game settings by clicking on 'Report a Bug'.",
        "Frames will be automatically upgraded as you level up!",
        "Not good cards? You can still win with a great strategy.",
        "If dots appear on a selected card, tapping it again will show different combinations."
    ];
    let currentTipIndex = 0;
    let tipInterval;

    // --- Device and Orientation Logic ---
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    function checkOrientation() {
        if (isMobile && window.innerHeight > window.innerWidth) {
            // Portrait mode on mobile
            showRotationAnimation();
        } else {
            // Landscape mode or on PC
            hideRotationAnimationAndStart();
        }
    }

    function showRotationAnimation() {
        mainContent.classList.add('hidden');
        rotateDeviceContainer.classList.remove('hidden');

        let isPortraitState = true;
        animationWrapper.className = 'portrait'; // Start with vertical

        // Continuous animation loop
        if (!window.rotationAnimationInterval) {
            window.rotationAnimationInterval = setInterval(() => {
                isPortraitState = !isPortraitState;
                if (isPortraitState) {
                    animationWrapper.className = 'portrait';
                } else {
                    animationWrapper.className = 'landscape';
                }
                // Play sound on each state change
                swooshSound.currentTime = 0;
                swooshSound.play().catch(e => console.log("Sound play failed:", e));
            }, 2500); // Duration matches animation cycle
        }
    }
    
    function hideRotationAnimationAndStart() {
        if (window.rotationAnimationInterval) {
            clearInterval(window.rotationAnimationInterval);
            window.rotationAnimationInterval = null;
        }
        rotateDeviceContainer.classList.add('hidden');
        mainContent.classList.remove('hidden');
        startSequence(); // Start the main content flow
    }

    // --- Main Content Sequence ---
    let sequenceStarted = false;
    function startSequence() {
        if (sequenceStarted) return; // Prevent multiple executions
        sequenceStarted = true;

        // 1. Show company splash screen for 3 seconds
        setTimeout(() => {
            companySplashScreen.classList.add('hidden');
            loadingScreen.classList.remove('hidden');
            
            // 2. Start loading screen processes
            startTips();

            // 3. Simulate loading for 5 seconds then show "Coming Soon"
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                comingSoonScreen.classList.remove('hidden');
                clearInterval(tipInterval); // Stop changing tips
            }, 5000); // Show loading screen for 5 seconds

        }, 3000); // Show splash screen for 3 seconds
    }
    
    // --- Tips Cycler ---
    function startTips() {
        tipsContainer.innerText = tips[currentTipIndex];
        tipInterval = setInterval(() => {
            currentTipIndex = (currentTipIndex + 1) % tips.length;
            tipsContainer.style.opacity = 0;
            setTimeout(() => {
                tipsContainer.innerText = tips[currentTipIndex];
                tipsContainer.style.opacity = 1;
            }, 500);
        }, 5000);
    }

    // --- Fullscreen API Logic ---
    fullscreenBtn.addEventListener('click', toggleFullScreen);

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    // --- Initial Setup ---
    window.addEventListener('resize', checkOrientation);
    checkOrientation(); // Initial check
});
