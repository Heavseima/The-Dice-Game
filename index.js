
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

var dice1 = "./images/dice1.png"
var dice2 = "./images/dice2.png"
var dice3 = "./images/dice3.png"
var dice4 = "./images/dice4.png"
var dice5 = "./images/dice5.png"
var dice6 = "./images/dice6.png"

var array = [dice1, dice2, dice3, dice4, dice5, dice6]
var img1 = array[randomNumber1]
var img2 = array[randomNumber2]

document.querySelectorAll("img")[0].setAttribute("src", img1);
document.querySelectorAll("img")[1].setAttribute("src", img2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 2 Wins 🚩 !"
} else {
    document.querySelector("h1").innerHTML = " Draw !"
}