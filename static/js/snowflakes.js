// Function to generate a random number within a range
function randomBetween(min, max) {
    return Math.random() * (max - min + 1) + min;
}

// Create snowflakes
function createSnowflake() {
    const snowFlake = document.createElement('div');
    snowFlake.classList.add('snowflake');
    snowFlake.textContent = '❄';
    snowFlake.classList.add('fas');
    snowFlake.classList.add('fa-snowflake');

    // Randomize the size and speed of the snowflakes
    const snowFlakeSize = randomBetween(10, 20); // Size between 10px and 20px
    const snowFlakeSpeed = randomBetween(5, 8); // Animation duration between 3s and 6s
    const startPositionX = randomBetween(0, window.innerWidth); // Horizontal start position
    const startPositionY = randomBetween(-100, -30); // Vertical start position above the viewport

    snowFlake.style.fontSize = `${snowFlakeSize}px`; // Set size
    snowFlake.style.left = `${startPositionX}px`; // Set starting horizontal position
    snowFlake.style.top = `${startPositionY}px`; // Set starting vertical position

    // Set the CSS properties for animation
    snowFlake.style.animationName = 'fall';
    snowFlake.style.animationDuration = `${snowFlakeSpeed}s`; // Set falling speed
    snowFlake.style.animationTimingFunction = 'linear';
    snowFlake.style.animationIterationCount = 'infinite';

    // Add the snowflake to the body
    document.body.appendChild(snowFlake);

    // Remove the snowflake after it has fallen out of view to prevent a buildup of DOM elements
    setTimeout(() => {
        snowFlake.remove();
    }, snowFlakeSpeed * 1000);
}

// Create multiple snowflakes
function createSnowflakes() {
    const numberOfSnowflakes = 50; // Adjust this for more or fewer snowflakes
    for (let i = 0; i < numberOfSnowflakes; i++) {
        setTimeout(createSnowflake, i * 250); // Delay each new snowflake
    }
}

// Snowflake fall animation
const fallKeyframes = `@keyframes fall {
    0% { top: -30px; }
    100% { top: 100vh; }
  }`;

// Adding keyframes to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = fallKeyframes;
document.head.appendChild(styleSheet);

// Start creating snowflakes
createSnowflakes();
setInterval(createSnowflakes, 5000); // Create new snowflakes every 5 seconds to keep the effect going