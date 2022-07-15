/*
#495867 gray
#577399 d blue
#bdd5ea blue
#f7f7ff white 
#fe5f55 red
*/

const start = document.getElementsByClassName("restart-button")[0]
const board = document.getElementById("board")
const numberOfBombs = 9
const gameOver = document.getElementById("game-over")
let bombs = []
let boardTable = []
let started = true
let alltable = 64

start.addEventListener("click", () => gameControler())

function gameControler() {
    start.innerText = "Restart"
    board.innerHTML = ""
    gameOver.style.display = "none"
    bombs = []
    boardTable = []
    alltable = 64

    boardDrawer()
    bombLocator()
    numbersSetter()
    bombsSetter()
}

function allTableDecrement() {
    alltable--

    if (alltable===9) {
        gameOver.innerText="You win!"
        gameOver.style.display="block"
    }
}

function numbersSetter() {
    for (let i = 0; i < 8; i++) {
        const row = []
        for (let j = 0; j < 8; j++) {
            row.push(0)
        }
        boardTable.push(row)
    }

    bombs.forEach(element => {
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (element.x + i > -1 && element.y + j > -1 && element.x + i < 8 && element.y + j < 8)
                    boardTable[element.x + i][element.y + j] += 1;
            }
        }
    })
}

function bombsSetter() {
    bombs.forEach(element => {
        boardTable[element.x][element.y] = -1
    })
}

function cellClickHandler(params) {
    const t = params.target.className.split(" ")
    params.target.innerText = boardTable[t[1]][t[2]]
    if (boardTable[t[1]][t[2]] === -1) {
        params.target.style.backgroundColor = "#fe5f55"
        gameOver.style.display = "block"
        eventListenerRemover();
    }
    else {
        allTableDecrement()
        params.target.style.backgroundColor = "#495867"
    }
}

function eventListenerRemover() {
    const cells = document.getElementsByClassName("cell")

    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = ""

    }
}

function bombLocator() {
    for (let i = 0; i < numberOfBombs; i++) {
        const x = Math.floor(Math.random() * 8)
        const y = Math.floor(Math.random() * 8)

        let flag = false

        for (let j = 0; j < bombs.length; j++) {
            if (bombs[j].x === x && bombs[j].y == y) {
                i--;
                flag = true
                break;
            }
        }

        if (flag == false)
            bombs.push({ x: x, y: y })
    }
}

function boardDrawer() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const element = document.createElement("button")
            element.className = `cell ${i} ${j}`
            element.onclick = e => cellClickHandler(e)
            board.appendChild(element)
        }
    }
}

