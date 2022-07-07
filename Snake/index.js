/*
08D9D6
FF2E63
252A34
EAEAEA
*/

function start(e) {
    document.getElementsByClassName("start-button")[0].style.display = "none";

    snakeLocator()
}

function snakeLocator() {
    const snake = document.getElementById("circle");
    snake.style.display = "inline-block";
    snake.style.position = "relative";

    locator(snake);

    appleLocator();
    snakeDefaultMove(snake);
}

function appleLocator() {
    const apple = document.getElementById("apple");
    apple.style.display = "inline-block";
    apple.style.position = "relative";

    locator(apple);

}


function locator(object) {
    var vertical = Math.floor(Math.random() * 450)
    var horizental = + Math.floor(Math.random() * 450)

    object.style.position = "relative";
    object.style.left = vertical + 'px';
    object.style.top = horizental + 'px';
}

function snakeDefaultMove(snake) {

    let direction;

    window.onkeydown = e => {
        if (e.key == "ArrowUp") {
            document.getElementsByClassName("wrong-key")[0].style.display = "none"
            snakeMove(0, snake)
        }
        else if (e.key === "ArrowDown") {
            document.getElementsByClassName("wrong-key")[0].style.display = "none"
            snakeMove(1, snake)
        }
        else if (e.key === "ArrowRight") {
            document.getElementsByClassName("wrong-key")[0].style.display = "none"
            snakeMove(2, snake)
        }
        else if (e.key == "ArrowLeft") {
            document.getElementsByClassName("wrong-key")[0].style.display = "none"
            snakeMove(3, snake)
        }
        else {
            document.getElementsByClassName("wrong-key")[0].style.display = "block"
        }
    }
}

function snakeMove(direction, object) {
    switch (direction) {
        case 0:
            object.style.top = (parseInt(object.style.top.slice(0, [object.style.top.length - 2])) - 10) + 'px';
            sleepFunction();
            snakeMove(0, object)
            break
    }
}

function sleepFunction() {
    setTimeout(() => {}, 1000);
}
// object.style.left = vertical + 'px';
// object.style.top = horizental + 'px';