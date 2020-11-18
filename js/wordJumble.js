/********Word jumble *********/

const WORDS =
['nice','harambe',
'ninja','water',
'explosion','llama',
'china','coding',
'wizard','magic',
'programming','battle'];
var jword,displayJ,userGuessInputJ,
finishJumbletxt,indexJ, jumbledWord, countJ;


const jumbleGame = ()=>{
	//getting varibale
	displayJ = document.getElementById('jumbleWord');
	userGuessInputJ = document.getElementById('userGuessJumble');
	finishJumbletxt = document.getElementById('finishJumbletxt');
	indexJ = Math.floor(Math.random()*WORDS.length) ;
	jword = WORDS[indexJ];
	jumbledWord = jumbleWord(jword);
	countJ = 0;

	displayJ.innerHTML = jumbledWord;
	finishJumbletxt.innerHTML = ''

	userGuessInputJ.addEventListener('keydown',checkJumbleGuess)
}

const jumbleWord = (w)=>{
	var newW = '';

	while (w){
		var index = Math.floor(Math.random() * w.length)
		newW += w.slice(index,index+1)
		w = w.slice(0,index) + w.slice(index+1)
	}
	return newW;
}

const checkJumbleGuess = (e)=>{
	var guess;

	if(e.code == 'Enter'){
		countJ++;
		guess = userGuessInputJ.value;

		if(guess == jword){

			finishJumbletxt.innerHTML = 'Correct it took you '+countJ
			+' guesses';

			displayJ.innerHTML = 'Well done'
			userGuessInputJ.removeEventListener('keydown', checkJumbleGuess)

		}
		else if (countJ == 10) {
			finishJumbletxt.innerHTML = 'you took '+countJ
			+' guesses<br>the word was '+jword;

			displayJ.innerHTML = 'Game Over'
			userGuessInputJ.removeEventListener('keydown', checkJumbleGuess)

		}
		else if (countJ == 3  ){
			finishJumbletxt.innerHTML = 'The first letter is '+
			jword[0];
		}
		else if (countJ == 8  ){
			finishJumbletxt.innerHTML = 'The last letter is '+
			jword[jword.length-1];
		}
		else{
			finishJumbletxt.innerHTML = 'Nope<br>That was guess '+countJ;
		}
	}
}
