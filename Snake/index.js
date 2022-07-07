/*
08D9D6
252A34
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
}

function appleLocator() {
    const apple = document.getElementById("apple");
    apple.style.display = "inline-block";
    apple.style.position = "relative";

    locator(apple);

    snakeDefaultMove();
}


function locator(object) {
    var vertical = Math.floor(Math.random() * 450)
    var horizental = + Math.floor(Math.random() * 450)

    object.style.position = "relative";
    object.style.left = vertical + 'px';
    object.style.top = horizental + 'px';
}

function snakeDefaultMove() {
    document.addEventListener("onkeypress",()=>console.log(e))
}