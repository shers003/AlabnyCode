/********* Game ***********/
var loops = 0;
var playerScore = 0;
var characterVisbible = false;
var time = 2000

//triggered when user clicks start
const startGame = ()=>{
	const difficulty = confirm('press ok for hard difficulty');
	console.log(difficulty);
	time = difficulty? 1500:2500;
	gameLoop();
};

//Runs through the whole duration of game
const gameLoop = ()=>{

	const characters = document.querySelectorAll('.character');
	const score = document.getElementById('score');

	characterVisbible = !characterVisbible; //This will make it true as it is false, this will alternate each time function is run
  characterCreator();
	loops++;
	if(loops<12){

		setTimeout(gameLoop, time)
	}else{
		alert('GAME OVER score: '+playerScore)
		loops = 0;
		playerScore = 0;
		score.innerHTML = ''
	}
};

//used to create  characters
//changes the characters classes depeing on if characterVisbible is true or false
const characterCreator = ()=>{

	const characters = document.querySelectorAll('.m5Character');
	const randomNum = Math.floor((Math.random() * 6) + 1);//Creates a random number floorm mthod rounds down
	const classSet = characterVisbible? 'character visible':'character hidden';
	const score = document.getElementById('score');
	var clickcount = true;

	characters.forEach((character)=>{
		character.src = 'imgs/guest.png';
		character.parentNode.className = classSet;
		character.onclick = (t)=>{
			if(clickcount){
				playerScore--;
				console.log(t.srcElement);
				t.srcElement.src = 'imgs/guestClicked.png';
				score.innerHTML = 'Score is '+playerScore;
				clickcount = !clickcount
			}else{
			console.log('Abit much mate');
		}
	}
	});
	characters[randomNum-1].src = 'imgs/thief.png';
	characters[randomNum-1].parentNode.className = classSet+' thief';
	characters[randomNum-1].onclick = ()=>{
		if(clickcount){
			playerScore++;
			console.log(score);
			characters[randomNum-1].src = 'imgs/thiefClicked.png';
			score.innerHTML = 'Score is '+playerScore;
			clickcount = !clickcount
		}else{
			console.log('Abit much mate');
		}

	}

};
