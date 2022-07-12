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

function runGame(gameType) {
        //creates 2 random whole numbers between 1 and 25 and assign them to num1 and num 2
    let num1 = Math.floor(Math.random () * 25)+1 ;
    let num2 = Math.floor(Math.random () * 25)+1 ;

    if (gameType == "addition") {
       displayAdditionQuestion(num1, num2);
    } else {
        alert('unknown game type: ${gameType');
        throw 'unknown game type: ${gameType} Aborting!' ;
    }

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

function displayAdditionQuestion(operand1, operand2) {    //adding arguments 
    document.getElementById('operand1').textContent = operand1;        // this is grabbing whatever random value we get and putting it into the HTML page
    document.getElementById('operand2').textContent = operand2;       // unsure exactly which operand is doing which or were value is coming from.. REVISIT
    document.getElementById('operator').textContent = "+";          // sp we are setting operating to PLUS
}


function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}


