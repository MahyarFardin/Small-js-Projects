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
let started = true

start.addEventListener("click", () => gameControler())

function gameControler() {
    start.innerText = "Restart"

    boardDrawer();
    bombLocator();
}
function cellClickHandler(params) {
    console.log(params.target);
}
function bombLocator() {
    for (let i = 0; i < numberOfBombs; i++) {
        const newNumber = Math.floor(Math.random() * 64)
        let flag=false

        for (let j = 0; j < bombs.length; j++) {
            if (bombs[j] === newNumber) {
                i--;
                flag=true
                break;
            }
        }

        if(flag==false)
            bombs.push(newNumber)
    }
}

function boardDrawer(params) {
    for (let index = 0; index < 64; index++) {
        const element = document.createElement("button")
        element.className = "cell " + index
        element.onclick=e=>cellClickHandler(e)
        board.appendChild(element)
    }
}

