
/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess;
var winningNumber;
var priorGuesses = [];
var numberofGuesses;
var fakeHints = [];

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	winningNumber = Math.floor(Math.random() * 101);
	numberofGuesses = 0;
	//assuming this is only run once per game
	//do 101 so it can hit 100 at the min
}

// Fetch the Players Guess

function playersGuessSubmission(event){
	var output = +$(('#guess_input')).val();
	if(output == ""){  //this should really be checking whether the input is a valid number
		alert("You don't have anything in the input box!");
	}
	else{
		playersGuess = output;
		// $('#result').text("This is the winning Number: " + winningNumber);
		$('#numbOfGuesses').text("You have made "+ numberofGuesses + " guesses")
		checkGuess();
	}
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
	var output;
	if(playersGuess < winningNumber){
		return "lower";
	}
	else{
		return "higher";
	}

}

function guessMessage(){
	var heatIndex;
	if(Math.abs(playersGuess-winningNumber) < 5){
		heatIndex = "5";
	}
	else if(Math.abs(playersGuess-winningNumber) < 20){
		heatIndex = "10";
	}
	else{
		heatIndex = "more than 20";
	}
	return "Your guess was " + lowerOrHigher() + " than the Winning Number and it's " + heatIndex + " units away!"
}


// Check if the Player's Guess is the winning number 
//something is wrong with the guessing counter it overcounts if you do not check duplicates FIIIX THIS!

function checkGuess(){
	if(winningNumber === playersGuess){
		priorGuesses.push(playersGuess);
		numberofGuesses++;
		$('#message').text('You WIN!');
		$('#guessesMade').hide('fast');
		$('#guessMsg').hide('fast');	
		$('#numbOfGuesses').hide('fast');

	}
	else{
		if(numberofGuesses<6){
			if((numberofGuesses > 0) && (priorGuesses.indexOf(playersGuess)==-1))
			{
				priorGuesses.push(playersGuess)
				numberofGuesses++;
			}
			else if(numberofGuesses === 0)
			{
				priorGuesses.push(playersGuess)
				numberofGuesses++;
			}
			else if(priorGuesses.indexOf(playersGuess)!= -1){
				$('#message').text("Hey you already picked that number!");
			}
			else 
			{
				$('#message').hide('fast');
				$('#guessesMade').text(priorGuesses);
				$('#guessMsg').text(guessMessage());
			}
		}
		else
		{
			$('#message').text("You lost.");
		
		}
	}
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	while(fakeHints.length<4){
		var fakeNumb = Math.floor(Math.random() * 101);	
		if(fakeNumb!=winningNumber && fakeHints.indexOf(fakeNumb) == -1){
			fakeHints.push(fakeNumb);
		}
	}
	alert(fakeHints);
	var hintArray = [];
	var inter = 5-numberofGuesses;

	for(var i = 0; i < inter; i++){
		hintArray.push(fakeHints[i]);
	}

	//in reality I need to randomize this part

	hintArray[hintArray.length-1] = winningNumber;

	$('#Hint').text("Hint! It's one of these numbers " + hintArray)
}

// Allow the "Player" to Play Again
//probably not what they want will need to improve this at some point
function playAgain(){
    location.reload(true);
}


/* **** Event Listeners/Handlers ****  */

$(document).ready(function(){
	generateWinningNumber();
	alert(typeof numberofGuesses );
	alert(numberofGuesses);
	$('#guess_submit_button').on('click',playersGuessSubmission);

	$('#hint_button').on('click',provideHint);

	$('#play_agn_button').on('click',playAgain);

	$('#guess_input').keyup(function(event){
    	if(event.keyCode == 13) {
        	$("#guess_submit_button").click();
    	}
    }
 )
});
