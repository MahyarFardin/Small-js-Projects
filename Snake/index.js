const board = document.getElementById("container");
const ctx = board.getContext('2d')
const wrong = document.getElementsByClassName("wrong-key")[0]
const boadrBackground = "#252A34"
const snakeColor = "#08D9D6"
const snakeBorder = "#EAEAEA"
const appleColor = "#FF2E63"
const unitSize = 25
const scoreOnDoc = document.getElementById("score")
const restart = document.getElementById("restart-sign");

let running = false
let score = 0
let xSpeed = unitSize
let ySpeed = 0
let food = { x: 0, y: 0 }
let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }
]

startGame();

window.addEventListener("keydown", directionShifter)
restart.addEventListener("click", () => {
    gameRestarter()
})

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

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == food.x && food.y == snake[0].y) {
            appleDrop();
        }
    }
}
function appleDrow() {
    ctx.fillStyle = appleColor
    ctx.fillRect(food.x, food.y, unitSize, unitSize)
}
function directionShifter(e) {
    switch (e.keyCode) {
        case 37:
            wrong.style.display = "none"
            xSpeed = -unitSize
            ySpeed = 0
            break
        case 38:
            wrong.style.display = "none"
            xSpeed = 0
            ySpeed = -unitSize
            break
        case 39:
            wrong.style.display = "none"
            xSpeed = unitSize
            ySpeed = 0
            break
        case 40:
            wrong.style.display = "none"
            xSpeed = 0
            ySpeed = unitSize
            break
        default:
            wrong.style.display = "inline-block"
    }
}

function snakeMover() {
    if (running === true) {
        const head = {
            x: snake[0].x + xSpeed,
            y: snake[0].y + ySpeed
        }

        snake.unshift(head)

        if (snake[0].x == food.x && snake[0].y == food.y) {
            score++;
            scoreOnDoc.innerText = score
            appleDrop();
            appleDrow();
        }
        else {
            snake.pop();
        }
    } else {
        wrong.innerText = "Game Over"
        restart.style.display = "block"
        wrong.style.display = "block"
        setTimeout(() => document.location.reload(), 5000)
    }
}
function timeManager() {
    setTimeout(() => {
        clearBoard();
        appleDrow();
        snakeDrawer();
        snakeMover();
        gameOverCheck();
        timeManager();
    }, 100)
}

function gameOverCheck() {
    switch (true) {
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= 500):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= 500):
            running = false;
            break;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false;
        }
    }
}

function clearBoard() {
    ctx.fillStyle = boadrBackground
    ctx.fillRect(0, 0, 500, 500)
}

function startGame() {
    running = true
    clearBoard();
    snakeDrawer();
    appleDrop();
    timeManager();
}