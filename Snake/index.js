const board = document.getElementById("container");
const ctx = board.getContext('2d')
const wrong = document.getElementsByClassName("wrong-key")[0]
const boadrBackground = "#08D9D6"
const snakeColor = "#08D9D6"
const snakeBorder = "#252A34"
const appleColor = "#EAEAEA"
const unitSize = 25
let running = false
let score = 0
let xSpeed = unitSize
let ySpeed = 0
let food = { x: 0, y: 0 }
let snake = [
    { x: 0, y: 0 },
    { x: unitSize, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 4, y: 0 }
]

startGame();

window.addEventListener("keydown", directionShifter)

function snakeDrawer() {
    ctx.fillStyle = snakeColor
    ctx.strokeStyle = snakeBorder

    for (let index = 0; index < snake.length; index++) {
        ctx.fillRect(snake[index].x, snake[index].y, unitSize, unitSize)
        ctx.strokeRect(snake[index].x, snake[index].y, unitSize, unitSize)
    }
}
function appleDrop() {
    food.x = Math.floor(Math.random() * 500 / unitSize) * unitSize
    food.y = Math.floor(Math.random() * 500 / unitSize) * unitSize

    ctx.fillStyle = appleColor
    ctx.fillRect(food.x, food.y, unitSize, unitSize)

}
function directionShifter(e) {
    switch (e.keyCode) {
        case 38:
            wrong.style.display = "none"

            break
        case 39:
            wrong.style.display = "none"

            break
        case 40:
            wrong.style.display = "none"

            break
        case 37:
            wrong.style.display = "none"

            break
        default:
            wrong.style.display = "inline-block"
    }
}
function snakeMover() {
    const head = {
        x: snake[0].x + xSpeed,
        y: snake[0].y + ySpeed
    }

    snake.unshift(head)

    if (snake[0].x === food.x && snake[0].y === food.y) {
        score++;
        appleDrop();
    }
    else {
        snake.pop();
    }
}
function timeManager() {
    setTimeout(() => {
        snakeDrawer();
        snakeMover();
        timeManager();
    }, 1000)
}
function snakeCleaner() {
    snake.pop();
}
function startGame() {
    snakeDrawer();
    appleDrop();
    timeManager();
}