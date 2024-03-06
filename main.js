import './style.css';

const square = document.querySelectorAll(".square");

let counter = 0;

setInterval(() => {
    square[counter % square.length].classList.toggle("green");
    counter ++;
},1000);
