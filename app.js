/* Imports */

/* Get DOM Elements */
const button1 = document.getElementById('shell-button-1');
const button2 = document.getElementById('shell-button-2');
const button3 = document.getElementById('shell-button-3');

const pearl1Container = document.getElementById('pearl-1-container');
const pearl2Container = document.getElementById('pearl-2-container');
const pearl3Container = document.getElementById('pearl-3-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

/* State */
let wins = 0;
let losses = 0;
let total = 0;

/* Events */
button1.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('pearl-1', correctSpot);
});

button2.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('pearl-2', correctSpot);
});

button3.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('pearl-3', correctSpot);
});

/* Display Functions */

function getRandomHidingSpot() {
    const hidingPlaces = ['pearl-1', 'pearl-2', 'pearl-3'];

    const index = Math.floor(Math.random() * hidingPlaces.length);

    const correctSpot = hidingPlaces[index];

    return correctSpot;
}

function handleGuess(userGuess, correctSpot) {
    removeClasses();

    if (correctSpot === userGuess) {
        wins++;
    } else {
        losses++;
    }
    total++;

    winsEl.textContent = wins;
    lossesEl.textContent = losses;
    totalEl.textContent = total;

    const correctContainer = document.getElementById(`${correctSpot}-container`);

    correctContainer.classList.add('reveal');
}

function removeClasses() {
    pearl1Container.classList.remove('reveal');
    pearl2Container.classList.remove('reveal');
    pearl3Container.classList.remove('reveal');
}

// (don't forget to call any display functions you want to run on page load!)
