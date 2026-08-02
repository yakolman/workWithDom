export default function createGameField(gameField) {
    let currentCnt = 0
    while (currentCnt <16) {
    const newElement = document.createElement('div')
    newElement.className = 'field'
    gameField.appendChild(newElement)
    currentCnt+=1
    }
}