var snake = []
// creates the snake array. To be populated with sections as the snake gets longer.

window.addEventListener("load", ready);
// not quite sure why document.addEventListener("load", ready) does not work

function ready () {

   for (var i = 40, l = 0; i>= 10; i = i - 10, l++) {
       section(l,i, 200);
   }
}
//  creates the initial body of the snake once the page loads(length = 4);

function section (name,xpos,ypos) {
   
       window['newPart' + name] = document.createElement('div');
// creates the div that will represent a body part of the snake
// dynamic variable names are needed in order to be able to later access
// their properties using the function move

       snake.push('newPart' + name);
// push the new part onto the snake array
      
       window['newPart' + name].style.position = "absolute";
       window['newPart' + name].style.left = xpos+"px";
       window['newPart' + name].style.top = ypos+"px";
       window['newPart' + name].style.width = "10px";
       window['newPart' + name].style.height = "10px";
       window['newPart' + name].style.backgroundColor = "green";  

       document.body.appendChild(window['newPart' + name]);
}

var direction = "right";
// stores the current direction of the snake. To be defined by the movement functions (default: right);

function slither () {
    for (var c = snake.length -1; c >0; c--) {
        window['newPart' + c].style.left = (window['newPart' + (c - 1)].offsetLeft) + "px";
        window['newPart' + c].style.top = (window['newPart' + (c - 1)].offsetTop) + "px";                
    }
}
// main movement loop for the body of the snake;

document.addEventListener("keydown", key);
// listens for a keydown event and initializes the function key

function moveUp () {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;
//store the current position of the head of the snake. Need to put within the //move functions as otherwise they won't be initialized by setInterval in key();
    slither();
    newPart0.style.top = (currHeadPosT - 10) + "px";
    direction = "up";
}

function moveDown() {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;
    slither();
    newPart0.style.top = (currHeadPosT + 10) + "px";
    direction = "down";
}

function moveLeft() {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;
    slither();
    newPart0.style.left = (currHeadPosL - 10) + "px";
    direction = "left";
}

function moveRight() {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;
    slither();
    newPart0.style.left = (currHeadPosL + 10) + "px";
    direction = "right";
}
// functions defining movement

var movement;
// need to declare movement to be used in key.

function key(e) {
        
    value = e.keyCode;
// stores the keyCode of the pressed key in the variable value

    if (value == 38 && direction != "down") {
        clearInterval(movement);
        movement = setInterval(moveUp,50);
    }
    else if (value == 40 && direction != "up") {
        clearInterval(movement);
        movement = setInterval(moveDown,50);     
    }

    else if (value == 37 && direction != "right") {
        clearInterval(movement);
        movement = setInterval(moveLeft,50);
    }
    else if (value == 39 && direction != "left") {
        clearInterval(movement);
        movement = setInterval(moveRight,50);
    }
}

/* var snake = []
// creates the snake array. To be populated with sections as the snake gets longer.

document.addEventListener("keydown", key);
// listens for a keydown event and initializes the function key

function key(e) {
    value = e.keyCode;
// stores the keyCode of the pressed key in the variable value
       
    if (value == 38 || value == 40 || value ==37 || value == 39) {
// checks if the key is one the of the approved ones

        if (snake.length >= 4) {
// checks if it is the first time that the user is pressing the key   
            if (value == 38) {
               return;
            }
            else if (value == 40) {
               return;
            }
            else if (value == 37) {
               return;
            }
            else if (value == 39) {
               return;
            }
         }
         else {
            start();
         }
    }
}

function section (xpos, ypos) {
    var div = document.createElement("div");
// creates a new div element (a new section)
    
    div.style.position = "absolute";
    div.style.left = xpos+"px";
    div.style.top = ypos+"px";
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.backgroundColor = "green";
    
    document.body.appendChild(div);
}

function start () {
    
    var head = section(40,200);
    snake.push(head);
//  creates head of the snake and push it into the snake array

    for (var i = 10; i<40; i = i + 10) {
    snake.push(section(i, 200));
    }
//  creates the initial body of the snake
}
*/

/*
var snake = document.getElementById("Snake");
//Defines the variable snake and stores the element Snake within it. Going forward, snake will be treated as an Object with its properties being the same as the CSS ones.

function eatApple() {
    var currWidth = snake.offsetWidth;
    snake.style.width = (currWidth + 10) + "px";
}
// Declares the function eatApple, which will trigger everytime snake will "eat" an apple and increase its width property by 10px

document.addEventListener("keydown", key);
// Listens for keystrokes and initializes the function "key" when they happen

function key(e) {
    value = e.keyCode;
    // stores the keyCode of the pressed key in the variable value

    move(value);
    // initializes the function "move", which will check the keyCode to  
    // determine what movement, if any, to apply to snake 
}

function move(value) {
   
    var posV = snake.offsetTop;
    var posH = snake.offsetLeft;
    // stores the current top and left position in the respective variables

    setInterval(slither, 10);
    // main method consenting movement: invokes the slither function once every 10 ms

    function slither() {

      if (value == 38) {
        snake.style.top = (posV --) + "px";
      }
      if (value == 40) {
        snake.style.top = (posV ++) + "px";
      }
      if (value == 37) {
        snake.style.left = (posH --) + "px";
      }
      if (value == 39) {
        snake.style.left = (posH ++) + "px";
      }
    }
    // function regolating movement depending on keyCode
}
*/
