// Function to generate a random number within a range
function randomBetween(min, max) {
    return Math.random() * (max - min + 1) + min;
}

// Create snowflakes
function createSnowflake() {
    const snowFlake = document.createElement('div');
    snowFlake.innerHTML = '&#10052;';
    snowFlake.classList.add('snowflake');
    // snowFlake.classList.add('fas');
    // snowFlake.classList.add('fa-snowflake');

    // Randomize the size and speed of the snowflakes
    const snowFlakeSize = randomBetween(10, 20); // Size between 10px and 20px
    const snowFlakeSpeed = randomBetween(5, 8); // Animation duration between 3s and 6s
    const startPositionX = randomBetween(0, window.innerWidth); // Horizontal start position.
    const endPositionX = startPositionX + randomBetween(-150, 150);
    const startPositionY = randomBetween(-100, -30); // Vertical start position above the viewport

    snowFlake.style.fontSize = `${snowFlakeSize}px`; // Set size
    snowFlake.style.opacity = randomBetween(0.5, 0.9);
    snowFlake.style.left = `${startPositionX}px`; // Set starting horizontal position
    snowFlake.style.top = `${startPositionY}px`; // Set starting vertical position

    // Set the CSS properties for animation
    snowFlake.animate([
        { transform: `translate(0, -${snowFlakeSize}px)`, opacity: 1 },
        { transform: `translate(${endPositionX - startPositionX}px, 110vh)`, opacity: 0.5 }
    ], {
        duration: snowFlakeSpeed * 1000,
        easing: 'linear',
        iterations: 1
    });

    // Add the snowflake to the body
    document.body.appendChild(snowFlake);

    // Remove the snowflake after it has fallen out of view to prevent a buildup of DOM elements
    setTimeout(() => {
        snowFlake.remove();
    }, snowFlakeSpeed * 1000);
}

// Function to start generating snowflakes
function createSnowflakes() {
    const numberOfSnowflakes = 50; // Adjust the number of snowflakes here

    setInterval(() => {
        createSnowflake();
    }, 200); // Adjust the rate of snowflake creation
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