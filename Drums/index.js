function soundMaker(character) {
    var soundAddres="";
    switch (character) {
        case "w":
            soundAddres = "sounds/tom-1.mp3";
            break;
        case "s":
            soundAddres = "sounds/tom-2.mp3";
            break;
        case "d":
            soundAddres = "sounds/tom-3.mp3";
            break;
        case "a":
            soundAddres = "sounds/tom-4.mp3";
            break;
        case "j":
            soundAddres = "sounds/crash.mp3";
            break;
        case "k":
            soundAddres = "sounds/kick-bass.mp3";
            break;
        case "l":
            soundAddres = "sounds/snare.mp3";
            break;
        default:
            break;
    }

    var sound = new Audio(soundAddres);
    sound.play();
}

function Animation(event){
    document.querySelector("."+event).classList.add("pressed");
    setTimeout(()=>{document.querySelector("."+event).classList.remove("pressed")},100);
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        soundMaker(this.innerHTML);
        Animation(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    soundMaker(event.key);
    Animation(event.key);
})

