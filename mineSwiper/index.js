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
let bombs = [];
let boardTable = [];
let started = true

start.addEventListener("click", () => gameControler())

function gameControler() {
    start.innerText = "Restart"

    boardDrawer();
    bombLocator();
    numbersSetter();
    bombsSetter();
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
    console.log(params.target);
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

