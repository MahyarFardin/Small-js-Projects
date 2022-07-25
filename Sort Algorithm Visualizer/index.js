const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const position = []
canvas.addEventListener("mousemove", (event) => handleMove(event));

function handleMove(event) {
    if (position.length > 100) {
        position.shift()
    }

    const temp = [event.clientX, event.clientY]
    position.push(temp)
    console.log(position);
    handleDraw()
    handlePops()
    console.log(position);
}

function handlePops(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            position.shift()
        },500)
        resolve(0)
    })
}

function handleDraw() {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = .5;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(position[0][0], position[0][1])
    for (let i = 1; i < position.length; i++) {
        ctx.lineTo(position[i][0], position[i][1])
    }
    ctx.stroke();
}

