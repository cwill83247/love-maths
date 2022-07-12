console.log("testing, testing 123")

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/**
 * the main game loop we are using a DOCSTRING here 
 * script called when game is first loaded.. the function can then be hovered over when in script and will show this info 
 */

function runGame() {
        //creates 2 random whole numbers between 1 and 25 and assign them to num1 and num 2
    let num1 = Math.floor(Math.random () * 25)+1 ;
    let num2 = Math.floor(Math.random () * 25)+1 ;

}
runGame();

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}


