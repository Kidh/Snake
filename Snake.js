
var snake = document.getElementById("Snake");
//Defines the variable snake and stores the element Snake within it. Going forward, snake will be treated as an Object with its properties being the same as the CSS ones.

function eatApple() {
    var currWidth = snake.offsetWidth;
    snake.style.width = (currWidth + 10) + "px";
}
// Declares the function eatApple, which will trigger everytime snake will "eat" an apple and increase its width property by 10px

document.getElementById("test").addEventListener("keypress", checkKey);
function checkKey(arg) {
    return(arg.keyCode);
}
// Get keycode of the pressed key

/* function move() {
    if ()
    var currLeftPos = snake.offsetLeft;
    while (
        snake.style.left = pixelLeft(currLeftPos + 1)
}*/