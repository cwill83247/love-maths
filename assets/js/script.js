// mine failed initally added notes to show why as useful reference //
//Added a Correct when correct / and added Ammendments bit to show what i got wrong 

document.addEventListener("DOMContentLoaded", function() {    //CORRECT
    let buttons = document.getElementsByTagName("button");     //CORRECT

    for (let button of buttons) {                              //CORRECT  used instead of a for loop this is more modern
        button.addEventListener("click", function() {           //CORRECT
            if (this.getAttribute("data-type") === "submit") {    //CORRECT
                alert("You clicked Submit!");                      //CORRECT
            } else {								//CORRECT
                let gameType = this.getAttribute("data-type");       //CORRECT
                runGame("gameType");                                     //CORRECT
            }               
        });                                                              //CORRECT
    }                                                                      //CORRECT

runGame("addition");                                                  //CORRECT

});                                                                    //CORRECT

/**
 * the main game loop we are using a DOCSTRING here 
 * script called when game is first loaded.. the function can then be hovered over when in script and will show this info 
 */

function runGame(gameType) {                                   //CORRECT
        //creates 2 random whole numbers between 1 and 25 and assign them to num1 and num 2
    let num1 = Math.floor(Math.random () * 25)+1 ;                 //CORRECT
    let num2 = Math.floor(Math.random () * 25)+1 ;                  //CORRECT

    if (gameType === "addition") {                                             //CORRECT
       displayAdditionQuestion (num1, num2);                                    //CORRECT   
    } else {
        alert(`unknown game type: ${gameType}`);                                 //CORRECT
        throw `unknown game type: ${gameType}. Aborting!`;                      //CORRECT
    }                                                                               //CORRECT

}                                                                                 //CORRECT
//     this was here ????    runGame();

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {    //adding arguments     //CORRECT
    document.getElementById('operand1').textContent = operand1;        // this is grabbing whatever random value we get and putting it into the HTML page
    document.getElementById('operand2').textContent = operand2;       // unsure exactly which operand is doing which or were value is coming from.. REVISIT
    document.getElementById('operator').textContent = "+";          // sp we are setting operating to PLUS
}


function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
