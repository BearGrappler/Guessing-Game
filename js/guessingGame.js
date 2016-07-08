
$(document).ready(function(){
/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess;
var winningNumber = generateWinningNumber();
var priorGuesses = [];


/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random() * 101);
	//do 101 so it can hit 100 at the min
}

// Fetch the Players Guess

function playersGuessSubmission(){

	var output = +$(('guess_input')).val();
	if(output == ""){  //this should really be checking whether the input is a valid number
		alert("You don't have anything in the input box!");
	}
	else{
		playersGuess = output;
	}
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

$('#guess_submit_button').on('click',playersGuessSubmission);

});
