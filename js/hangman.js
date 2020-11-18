/******* hangman**********/
/*
Psuedo
get word
let user guess
while guess wrong
  increase counter
let player know if they win or loose
 */
var hangmanImage,hangmanTries,
txt,tries,word,count,
maxWrong,wrong;

const hangmanStart = ()=>{

	const index = Math.floor(Math.random()*WORDS.length) ;
	txt = document.getElementById('hangmanLetter');
	hangmanTries = document.getElementById('userTries');
	hangmanImage = document.getElementById('hangmanImg');
	maxWrong = 8;
	wrong = 0;
	count = 1;
	word = WORDS[index];
	tries = '';
	guessesH = [];
	txt.value = ''

	for(var i=0; i < word.length;i++){
		tries += '-'
	}
	hangmanTries.innerHTML = tries;
	hangmanImage.src = 'imgs/hangman1.png';

	txt.addEventListener('keydown',hangmanInput)
}

const hangmanInput = (e)=>{

	if(e.code == 'Enter'){
		count++;
		const letter = txt.value;
		var goodGuess = false;

		txt.value = '';

		for(var i=0;i<=word.length;i++){
			if(word[i]==letter){
				goodGuess = true
			}
		}

		if(goodGuess){
			newH = ''
			tries += ' '

			for(var i=0;i <= word.length;i++){

				if(word[i]==letter){
					newH += letter
				}else{
					newH += tries[i]
				}

			}
			tries = newH;

			hangmanTries.innerHTML = tries;

		}else{

				wrong++;
				if(count<= 8){
					hangmanImage.src = 'imgs/hangman'+count+'.png';
				}


		}

		if(wrong == maxWrong){
			txt.removeEventListener('keydown',hangmanInput);
			txt.value = 'He\'s dead'
			hangmanImage.src = 'imgs/hangmanLoss.png';
			hangmanTries.innerHTML = word;
		}else if (tries == word+' ') {
			txt.removeEventListener('keydown',hangmanInput);
			txt.value = 'He\'s Alive';
			hangmanImage.src = 'imgs/hangmanWin.png';
		}
	}
}
