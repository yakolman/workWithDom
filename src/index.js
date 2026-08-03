import './styles.css';
import goblinImage from './goblin.png';
import createGameField from './createGameField';

const gameField = document.querySelector('.game-field');
if (!gameField) {
  throw new Error('Элемент .game-field не найден в DOM');
}

createGameField(gameField)

const newImg = document.createElement('img')
newImg.className = 'image'
newImg.setAttribute('src', goblinImage)

const fields = gameField.querySelectorAll ('.field')

let currentPosition = null;
function moveGoblin() {
    let randomNum = Math.floor(Math.random()*fields.length)
    while (randomNum === currentPosition) {
        randomNum = Math.floor(Math.random()*fields.length)
    }
    const randomField = fields[randomNum]
    randomField.append(newImg)
    currentPosition = randomNum
    
}

const INTERVAL_MS = 1000;
moveGoblin()
let interval = setInterval(moveGoblin, INTERVAL_MS)

const stopGame = document.querySelector('.stop-game')
stopGame.addEventListener('click', () => {
    if (interval !== null) {
    clearInterval(interval);
    stopGame.textContent='START'
    stopGame.classList.add('stop-game--paused')
    interval = null
    } else {
    interval = setInterval(moveGoblin, INTERVAL_MS)
    stopGame.textContent='STOP'
    stopGame.classList.remove('stop-game--paused')
    }
});