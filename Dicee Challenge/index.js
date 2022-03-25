var dice1 = Math.ceil(Math.random() * 6);
var dice2 = Math.ceil(Math.random() * 6);
var src1="/images/dice"+dice1+".png";
var src2="/images/dice"+dice1+".png";
const img1=document.querySelectorAll(".dice img")[0];
img1.setAttribute("src", src1);
const img2=document.querySelectorAll(".dice img")[1];
img2.setAttribute("src", src2);

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