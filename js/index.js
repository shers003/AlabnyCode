const waterUrl = ['imgs/water.jpg','imgs/water1.jpg','imgs/water2.jpg']
const explosionUrl = ['imgs/explosion.jpg','imgs/explosion1.jpg','imgs/explosion2.jpg']
const supriseImgUrl = ['imgs/suprise.jpg','imgs/suprise1.jpg','imgs/suprise2.jpg']

const explosion=()=>{
	console.log('EXPLOSIONSS');
	const imgs = document.querySelectorAll('.img');
	for(var i=0; i<imgs.length;i++){
		console.log(i);
		imgs[i].src = explosionUrl[i];
	}
};

const water=()=>{
	console.log('Water');
	const imgs = document.querySelectorAll('.img');
	for(var i=0; i<imgs.length;i++){
		console.log(i);
		imgs[i].src = waterUrl[i];
	}
};

const suprise = ()=>{

		const imgs = document.querySelectorAll('.img');
		for(var i=0;i<imgs.length;i++){
			imgs[i].src = supriseImgUrl[i];
			console.log(imgs[1]);
		}
};


/************** Addded load btn with Mission 3**************/
const addItem = ()=>{
	const newItemText = document.getElementById('userItem').value;
	const itemList = document.getElementById('itemList');
	const newListItem = document.createElement('li');
	newListItem.innerHTML = newItemText;
	itemList.appendChild(newListItem);

	console.log('User item is '+newItemText)
	saveItem((res)=>{
		console.log('saved items '+res)
	})


};

const deleteItem = ()=>{
	const itemList = document.getElementById('itemList');
	const listItem = document.querySelectorAll('#itemList li:last-child');

	console.log(listItem);

	if(listItem[0] == undefined){
		console.log('NOTHING');
	}else{
		listItem[0].remove();
	}

	saveItem((res)=>{
		console.log('saved items '+res)
	})
};

const saveItem = (cb)=>{
	const items = document.getElementById('itemList').innerHTML;
	localStorage.list = items
	if(cb){
		cb(items);
	}

};

const load = ()=>{
	const list = document.getElementById('itemList');
	list.innerHTML = localStorage.list;
};



/**************** mission 2 password************/
const passwordCheck = ()=>{
	const lesson3password = document.getElementById('lesson3password');
	const password = lesson3password.value;
	if(password == 'iWholeHeartedlyAgree'){
		alert('My friend come through')
		return true;
	}else{
		alert('Sorry you need to find out the password')
		return false;
	}
};

/**********Dice roll game **********/

const diceRoll = ()=>{
	const diceRoll = Math.floor(Math.random()*6)+1;
	const dice = document.getElementById('dice');

	dice.src = 'imgs/dice'+diceRoll+'.png'
}
