// mine failed initally added notes to show why as useful reference //


document.addEventListener("DOMContentLoaded", function() {    
    let buttons = document.getElementsByTagName("button");     

    for (let button of buttons) {                              //  used instead of a for loop this is more modern
        button.addEventListener("click", function() {           
            if (this.getAttribute("data-type") === "submit") {    
                checkAnswer();      // so when the button is clicked it runs the CheckAnswer function                    
            } else {								
                let gameType = this.getAttribute("data-type");       
                runGame(gameType);                                     
            }               
        });                                                              
    }                                                                     
 
runGame("addition")    //this game runs on startup ----  how does this link to correct game ??????
});                                                                    

/**
 * the main game loop we are using a DOCSTRING here 
 * script called when game is first loaded.. the function can then be hovered over when in script and will show this info 
 */

function runGame(gameType) {                                  
        //creates 2 random whole numbers between 1 and 25 and assign them to num1 and num 2
    let num1 = Math.floor(Math.random () * 25)+1 ;                
    let num2 = Math.floor(Math.random () * 25)+1 ;                 

    if (gameType === "addition") {                                            
       displayAdditionQuestion (num1, num2);  
    } else if (gameType === "multiply") {                      //multiply start                                       
         displayMultiplyQuestion (num1, num2);                                    
    }                                                             //multiply end                             
      else {
        alert(`unknown game type: ${gameType}`);                                
        throw `unknown game type: ${gameType}. Aborting!`;                     
    }                                                                             

}                                                                                
/**
 * this compares the value the user has given against our calculate Function
 * and then output a true/false depending on if answer is correct or not
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value); //getting the value as an Integer that the user has input into the input box on our form
    let calculatedAnswer = calculateCorrectAnswer(); // we are setting a variable with the result from our calculateCorrectAnswer function 
    let isCorrect = userAnswer === calculatedAnswer[0];  // comparing however needed to add [0] becase calculate answer returns an Array and we want the first part.

    if (isCorrect) {                                  //checking if isCorrect is true i.e results are the same
        incrementScore();                      //if true increments correct score by calling FUNCTION incrementScore()          
        
    } else {                                                                 
        alert(`sorry incorrect this time the answer is: ${calculatedAnswer[0]}`);  //if false return a message and show the answer dont forget its an array hence [0]
        incrementWrongAnswer()  // and increment wrong answer ...
    }
        runGame(calculatedAnswer[1]);  // we run another  question using the 2nd value from the array which his "addition","subtract" etc.. to determine the game to run again..
}

/**
 * gets the operands ( operand 1 and 2) and the operator
 * fromt he DOM and then calculates 
 */
function calculateCorrectAnswer() {
 let operand1 = parseInt(document.getElementById('operand1').innerText);  // use parseInt as need numbers and not strings so we can calculate
 let operand2 = parseInt(document.getElementById('operand2').innerText); 
 let operator = document.getElementById("operator").innerText;     // do I need ("operator") instead of ('operator') not sure
    if (operator === "+") {                        // if its a + then 
        return[operand1 + operand2, "addition"]     //returns an ARRAY  the result of operand 1 + operand 2 , and also return the word "addition"
    }else if (operator === "*") {   
    return [operand1 * operand2, "multiply"]
    } else {
        alert(`operator function not done yet: ${operator}`);                                
        throw `operator function not done yet: ${operator}. Aborting!`;        

    }
}
/**
 * this is checking current value in DOM for correct, incrementing by 1 
 */
function incrementScore() {
 let oldScore = parseInt(document.getElementById("score").innerText);  // score is our html id , the inner text is whats grabbing the score from it.. 
 document.getElementById("score").innerText = ++oldScore; //so we are setting a new value for score using old score and incrementing

}
/**
 * this is checking current value in DOM for incorrect score , incrementing by 1 
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);  // GET score is our html id , the inner text is whats grabbing the score from it.. 
    document.getElementById("incorrect").innerText = ++oldScore; //UPDATE so we are setting a new value for score using old score and incrementing
   
}
/**
 * this put the values and the operator into the HTML page
 */
function displayAdditionQuestion(operand1, operand2) {    //adding arguments     
    document.getElementById('operand1').textContent = operand1;        // this is grabbing whatever random value we get and putting it into the HTML page
    document.getElementById('operand2').textContent = operand2;       // unsure exactly which operand is doing which or were value is coming from.. REVISIT
    document.getElementById('operator').textContent = "+";          // sp we are setting operating to PLUS
}


function displaySubtractQuestion() {

}

function displayMultiplyQuestion(operand1, operand2) {      //these are the arguments the function is expecting 
    document.getElementById('operand1').textContent = operand1;        // this is grabbing whatever random value we get and putting it into the HTML page
    document.getElementById('operand2').textContent = operand2;       // unsure exactly which operand is doing which or were value is coming from.. REVISIT
    document.getElementById('operator').textContent = "*"; 
}
