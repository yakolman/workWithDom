import '../css/styles.css';
import goblinImage from '../image/goblin.png';
import createGameField from './createGameField.js';

const gameField = document.querySelector('.game-field');
const countMissedElement = document.querySelector('.count-missed');
const countHitsElement = document.querySelector('.count-hits');
const wasted = document.querySelector('.wasted')
const restart = document.querySelector('.restart')
if (!gameField) {
    throw new Error('Элемент .game-field не найден в DOM');
}

createGameField(gameField)

const newImg = document.createElement('img')
newImg.className = 'image'
newImg.setAttribute('src', goblinImage)
newImg.setAttribute('alt', 'image goblin');

const fields = gameField.querySelectorAll ('.field')

let currentPosition = null;
let clickOnGoblin = false;
let countMissed = 0;
let countHits = 0;
const maxMissed = 5;

function moveGoblin() {
    if (clickOnGoblin === false && currentPosition!== null) {
        countMissed+=1
    }
    countMissedElement.textContent = `Количество промахов: ${countMissed}`
    if (countMissed === maxMissed) {
        clearInterval(interval);
        newImg.remove();
        wasted.style.display = 'block'
        restart.style.display = 'block'
        return
    }
    let randomNum = Math.floor(Math.random()*fields.length)
    while (randomNum === currentPosition) {
        randomNum = Math.floor(Math.random()*fields.length)
    }
    const randomField = fields[randomNum]
    randomField.append(newImg)
    currentPosition = randomNum
    clickOnGoblin = false;
}

const INTERVAL_MS = 1000;
moveGoblin()
let interval = setInterval(moveGoblin, INTERVAL_MS)

newImg.addEventListener('click', () => {
    if (clickOnGoblin === false) {
        countHits += 1
    }
    countHitsElement.textContent = `Количество попаданий: ${countHits}`
    clickOnGoblin = true
    newImg.remove()
})

restart.addEventListener('click', () => {
    currentPosition = null;
    clickOnGoblin = false;
    countMissed = 0;
    countHits = 0;
    countHitsElement.textContent = `Количество попаданий: ${countHits}`;
    countMissedElement.textContent = `Количество промахов: ${countMissed}`;
    moveGoblin();
    interval = setInterval(moveGoblin, INTERVAL_MS);
    wasted.style.display = 'none'
    restart.style.display = 'none'
})