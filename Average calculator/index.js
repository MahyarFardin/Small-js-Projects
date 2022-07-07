var namel = [];
var weight = [];
var score = [];
var classnum = 0;

document.addEventListener("keypress", e => { if (e.code == "Enter") add() });

function add() {
    namel.push(document.querySelector(".name").value);
    score.push(document.querySelector(".score").value);
    weight.push(document.querySelector(".weight").value);

    document.querySelector(".name").value = "";
    document.querySelector(".score").value = "";
    document.querySelector(".weight").value = "";

    document.querySelector(".items").innerHTML += `<tr class=row${classnum}> <td>` + classnum + '</td><td>' + namel[namel.length - 1] + '</td><td>' + weight[weight.length - 1] + '</td><td>' + score[score.length - 1] + '</td> </tr>'
    classnum++;
    update();
}

function update() {
    var weightSum = 0;
    var scoreSum = 0;

    for (let index = 0; index < weight.length; index++) {
        weightSum += parseInt(weight[index]);
        scoreSum += parseFloat(score[index]) * parseInt(weight[index]);
    }

    document.querySelector(".hweight").innerHTML = "Totall weight: " + weightSum;
    document.querySelector(".hlessons").innerHTML = "Totall lessons:  " + weight.length;
    document.querySelector(".havg").innerHTML = "AVG: " + scoreSum / weightSum;

}

function remove() {
    var itemCode=document.querySelector(".remove").value;
    document.querySelector(`.row${itemCode}`).remove();
    namel.splice(itemCode-1,1)
    weight.splice(itemCode-1,1)
    score.splice(itemCode-1,1)
    update()
}

