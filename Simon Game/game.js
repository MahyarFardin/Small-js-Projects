var buttonColours = ["red", "blue", "green", "yellow"];
var computerPattern = [];
var userPattern=[]
var level = 0;

function animation(id) {
    $("#" + id).addClass("pressed");

    setTimeout(() => { $("#" + id).removeClass("pressed"); }, 100);
}

function playSound(id) {
    var soundAdress = "sounds/"
    switch (id) {
        case "green":
            soundAdress += "green.mp3";
            break;
        case "red":
            soundAdress += "red.mp3";
            break;
        case "yellow":
            soundAdress += "yellow.mp3";
            break;

        case "blue":
            soundAdress += "yellow.mp3";
            break;
        default:
            return;
    }

    new Audio(soundAdress).play();

}

function worker(id) {
    animation(id);
    playSound(id);
}

function patternGenerator() {
    level++;
    $("#level-title").text("level " + level);

    var button = buttonColours[Math.floor(Math.random() * 4)];
    computerPattern.push(button);
    worker(button);
}

function refree(number) {
    if (userPattern[number] === computerPattern[number]) {
        setTimeout(() => { patternGenerator(); }, 300);
    }
    else {

        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        new Audio("sounds/wrong.mp3").play();

        setTimeout(()=>{restart();}, 600);
        
    }
}

$(".btn").click((event) => {
    userPattern.push(event.target.id);
    worker(event.target.id);
    refree(userPattern.length-1);
})

function restart() {
    computerPattern = [];
    userPattern = []
    level = 0;  
    patternGenerator();
}

$(document).keypress(() => {
    restart();
});