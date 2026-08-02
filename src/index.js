import './styles.css';
import goblinImage from './goblin.png';
import createGameField from './createGameField';

const gameField = document.querySelector('.game-field')


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
    randomField.appendChild(newImg)
    currentPosition = randomNum
    
}
moveGoblin()
setInterval(moveGoblin, 1000)

