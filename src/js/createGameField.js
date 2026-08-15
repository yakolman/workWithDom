const CELLS_COUNT = 16

export default function createGameField(gameField) {
    let currentCnt = 0
    while (currentCnt < CELLS_COUNT) {
    const newElement = document.createElement('div')
    newElement.className = 'field'
    gameField.append(newElement)
    currentCnt+=1
    }
}