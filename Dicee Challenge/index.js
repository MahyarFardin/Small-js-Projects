var dice1 = Math.ceil(Math.random() * 6);
var dice2 = Math.ceil(Math.random() * 6);

const img1=document.querySelectorAll(".dice img")[0].setAttribute("src", "/images/dice"+dice1+".png");
const img2=document.querySelectorAll(".dice img")[1].setAttribute("src", "/images/dice"+dice2+".png");

var winner =document.querySelector(".container h3"); 

if (dice1>dice2) {
    winner.innerHTML="🚩 player one win";
}
else if (dice1<dice2) {
    winner.innerHTML="player two win 🚩";
}
else{
    winner.innerHTML="Draw";
}