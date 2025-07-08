<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Seep - Coming Soon</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quintessential&family=Brush+Script+MT&display=swap" rel="stylesheet">
</head>
<body>

    <div id="rotate-device-container" class="hidden">
        <div id="animation-wrapper">
            <div class="line"></div>
            <div class="text">PLEASE ROTATE YOUR PHONE</div>
            <div class="phone-icon">📱</div>
        </div>
    </div>

    <audio id="swoosh-sound" src="https://www.myinstants.com/media/sounds/swoosh-3.mp3" preload="auto"></audio>

    <div id="main-content" class="hidden">

        <div id="company-splash-screen" class="screen">
            <h1 class="company-name">KuramaGames</h1>
        </div>

        <div id="loading-screen" class="screen hidden">
            <div class="logo-container">
                <img src="https://i.imgur.com/V7GfA6y.png" alt="Ace of Spades" class="waving-card">
                <h1 class="game-logo">Seep</h1>
            </div>
            <div class="loader-container">
                <div class="spinner"></div>
                <div class="loading-text">Loading...</div>
            </div>
            <footer class="tips-footer">
                <div id="tips-container"></div>
            </footer>
        </div>

        <div id="coming-soon-screen" class="screen hidden">
            <h1>Coming Soon</h1>
        </div>

    </div>

    <button id="fullscreen-btn">...</button>

    <script src="script.js"></script>
</body>
</html>
