/************Number Guesser *************/
/*
Psuedo
random number generated
while guess not Number
	let user input guess
	count guesses
otherwise
	show user how many guesses
*/
var randomNumber,userGuessInput, guess,
higher, lower;

var count = 0;

const guessGame = ()=>{

	randomNumber = Math.floor(Math.random()*100);
	userGuessInput = document.getElementById('userGuess');
	higher = document.getElementById('guessHigher');
	lower  = document.getElementById('guessLower');
	higher.innerHTML = 'Game started';
	lower.innerHTML = 'Enter a number'
	userGuessInput.value = ''
	count = 0;

	userGuessInput.addEventListener('keydown', userGuess);

};
const userGuess = (e)=>{
	if(e.code == 'Enter'){
		guess = parseInt(userGuessInput.value);
		count++

		if(guess == randomNumber){

			userGuessInput.removeEventListener('keydown',userGuess)
			higher.innerHTML = 'Guessed correct';
			lower.innerHTML = 'You took '+ count+' guesses';

		}else if (guess<randomNumber) {

			userGuessInput.value = ''
			higher.innerHTML = 'Higher';
			lower.innerHTML = '';

		}else{
			userGuessInput.value = ''
			lower.innerHTML = 'Lower';
			higher.innerHTML = '';
		}
	}
};

/**********Dice roll game **********/

const diceRoll = ()=>{
	const diceRoll = Math.floor(Math.random()*6)+1;
	const dice = document.getElementById('dice');

	dice.src = 'imgs/dice'+diceRoll+'.png'
}
