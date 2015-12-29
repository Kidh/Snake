
var snake = document.getElementById("Snake");
//Defines the variable snake and stores the element Snake within it. Going forward, snake will be treated as an Object with its properties being the same as the CSS ones.

function eatApple() {
    var currWidth = snake.offsetWidth;
    snake.style.width = (currWidth + 10) + "px";
}
// Declares the function eatApple, which will trigger everytime snake will "eat" an apple and increase its width property by 10px

document.addEventListener("keydown", key);

function key(e) {
    value = e.keyCode;
// Gets keycode of the pressed key
    if (value == 38) {
         //snake.top  
    }
    else if (value == 37) {
         //move left
    }
    else if (value == 39) {
         //move rigth
    }
    else if (value == 40) {
         //move down
    }
// triggers the snake movement when the player pressess the relevant arrows on the number pad
}


/* function move() {
    if ()
    var currLeftPos = snake.offsetLeft;
    while (
        snake.style.left = pixelLeft(currLeftPos + 1)
}*/
