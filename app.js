let num1=Math.floor(Math.random()*6+1);
let num2=Math.floor(Math.random()*6+1);

let img1=document.querySelectorAll("img")[0];
let img2=document.querySelectorAll("img")[1];

let attr1="images/dice" + num1 + ".png";
let attr2="images/dice" + num2 + ".png";

img1.setAttribute("src", attr1);
img2.setAttribute("src", attr2);

if(num1>num2){
    document.querySelector("h1").textContent="Player 1 WINS";
}else if(num2>num1){
    document.querySelector("h1").textContent="Player 2 WINS";
}else{
    document.querySelector("h1").textContent="DRAW";
}