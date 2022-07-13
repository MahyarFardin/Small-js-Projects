/*
#495867 gray
#577399 d blue
#bdd5ea blue
#f7f7ff white 
#fe5f55 red
*/

const start=document.getElementsByClassName("restart-button")[0]
const board=document.getElementById("board")
const cells={
    rows:8,
    columns:8
}
const numberOfBombs=9
let started=true

start.addEventListener("click",()=>startFunction())

function startFunction() {
    start.innerText="Restart"

    boardDrawer();
}

function boardDrawer(params) {
    for (let index = 0; index < 64; index++) {
        const element = document.createElement("button")
        element.className="cell "+index
        board.appendChild(element)        
    }
}

