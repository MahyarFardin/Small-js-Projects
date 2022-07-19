const selector = document.getElementById("selector")
const numbers = document.getElementById("numbers")
const randomNumbers = [];

selector.addEventListener("change", e => algorithmSelector(e))

randomNumberGenerator()
function randomNumberGenerator() {
    for (let i = 0; i < 25; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100))
    }
    numberDisplay()
}

function numberDisplay() {
    randomNumbers.map(number => {
        const element = document.createElement("li")
        element.id = number
        element.innerText = number
        element.style.height = `${number * 5}px`
        numbers.appendChild(element)
    })
}

function algorithmSelector(event) {
    console.log(event.target.value);
    switch (event.target.value) {
        case "bubble":
            bubble();
        case "quick":
            quick();
        case "merge":
            merge();
        case "insertion":
            insertion();
    }
}

function graphicSwap(a, b) {
    setTimeout(() => {
        var temp = document.createElement("div");
        a.parentNode.insertBefore(temp, a);
s
        // move obj1 to right before obj2
        b.parentNode.insertBefore(a, b);

        // move obj2 to right before where obj1 used to be
        temp.parentNode.insertBefore(b, a);

        // remove temporary marker node
        temp.parentNode.removeChild(temp);
    }, 1000)
}

function bubble() {
    for (let i = 0; i < 25; i++) {
        for (let j = i; j < 25; j++) {
            if (randomNumbers[i] > randomNumbers[j]) {
                let temp = randomNumbers[i]
                randomNumbers[i] = randomNumbers[j]
                randomNumbers[j] = temp
                graphicSwap(randomNumbers[j], randomNumbers[i])
            }
        }
    }
}
function quick() {

}
function merge() {

}
function insertion() {

}