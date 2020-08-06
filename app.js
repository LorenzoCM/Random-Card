var suit1 = document.getElementById("suit1");
var suit2 = document.getElementById("suit2");
var number = document.getElementById("number")
var suits = ["&#9824;", "&#9827;", "&#9829;", "&#9830;"];
var colors = ["red", "black"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

window.onload = function randomCard() {
   
    var random1 = Math.floor(Math.random() * suits.length);
    var random2 = Math.floor(Math.random() * 2);
    var random3 = Math.floor(Math.random() * 14);

    suit1.innerHTML = suits[random1];
    suit1.style.color = colors[random2];

    suit2.innerHTML = suits[random1];
    suit2.style.color = colors[random2];
    
    number.innerHTML = numbers[random3];
}