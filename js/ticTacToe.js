/**********Tick tac Toe************/

const p1 = 'X';
const p2 = 'O';
var turn = true;
var board =
['','','',
 '','','',
 '','',''];
var boxes = [];
var over = false;

const startTic = ()=>{

	var index = 0;
	board.forEach((position)=>{
		var  box = document.getElementById('box'+index);
		boxes[index] = box;
		position = box.innerHTML
		index++
	});

		gameLoopTic(()=>{
			console.log('Game started');
		});

};

const gameLoopTic = (cb)=>{

	const display = document.getElementById('timeTic');
  const go = document.getElementById('goTic');

	loops++;
	console.log(loops);
	turn = !turn


	console.log(over);

	if(loops>=10 || over){
		boxes.forEach((box)=>{
			box.innerHTML = "";
		});

		alert('GAMEOVER');

		turn = true;
		board =
		['','','',
		 '','','',
		 '','',''];
		 boxes = [];
		 loops = 0;
		 over = false;
		 go.innerHTML = '';

	}else{
		console.log('Play on');
		playerGo();
	}

	if(cb){
		cb();
	}
};

const playerGo = ()=>{
	const display = document.getElementById('goTic');
	var clicked = true;
	if(!turn){
		console.log(p1+' turn');
		display.innerHTML = p1 +' Go'
		boxes.forEach((box)=>{

			box.onclick = ()=>{

				if(clicked){

					var value = checkValue(box);

					if (value){

						var boxIndex = Number(box.id.slice(box.id.length-1,box.id.length));

						box.innerHTML = p1;
						board[boxIndex] = p1;
						clicked = !clicked;
						checkWin(p1);
						gameLoopTic();

					}

				}

			}
		});
	}else{
		console.log(p2+' turn');
		display.innerHTML = p2 +' Go'

		boxes.forEach((box)=>{

			box.onclick = ()=>{

				if(clicked){

					var value = checkValue(box);

					if (value){

						var boxIndex = Number(box.id.slice(box.id.length-1,box.id.length));

						box.innerHTML = p2;
						board[boxIndex] = p2;
						clicked = !clicked;
						checkWin(p2);
						gameLoopTic();

					}

				}

			}

		});
	}
};

const checkValue = (box)=>{
	var txt = box.innerHTML;
	if(txt == ''){
		return true;
	}else{
		return false;
	}
};
const checkWin = (symbol)=>{

	const display = document.getElementById('timeTic');

	if(board[0]==symbol && board[1]==symbol && board[2]==symbol){
		over = !over;
		display.value = symbol + ' has Won';
	}
	else if (board[3]==symbol && board[4]==symbol && board[5]==symbol) {
		over = !over;
		display.value = symbol + ' has Won';
	}
	else if (board[6]==symbol && board[7]==symbol && board[8]==symbol) {
		over = !over;
		display.value = symbol + ' has Won';
	}
	else if (board[0]==symbol && board[4]==symbol && board[8]==symbol) {
		over = !over;
		display.value = symbol + ' has Won';
	}
	else if (board[2]==symbol && board[4]==symbol && board[6]==symbol) {
		over = !over;
		display.value = symbol + ' has Won';
	}
	else if (board[0]==symbol && board[3]==symbol && board[6]==symbol) {
		over = !over;
		display.value = symbol + ' has Won';
	}
	else if (board[1]==symbol && board[4]==symbol && board[7]==symbol) {
		over = !over;
		display.value = symbol + ' has Won';
	}
	else if (board[2]==symbol && board[5]==symbol && board[8]==symbol) {
		over = !over;
		display.value = symbol + ' has Won';
	}
};
