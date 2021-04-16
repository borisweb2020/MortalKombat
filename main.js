const $arenas       = document.querySelector('.arenas');
const $formFight    = document.querySelector('.control');

const player1 = {
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['sword', 'harpoon', 'star'],
	changeHP,
	elHP,
	renderHP,
	attack: function(){
		console.log('Fight...')
	}
}

const player2 = {
	player: 2,
	name: 'Kitana',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: ['sword', 'harpoon', 'star'],
	changeHP,
	elHP,
	renderHP,
	attack: function(){
		console.log('Fight...')
	}
}

// a random strike
const HIT = {
	head: 30,
	body: 25,
	foot: 20,
}

// creating an enemy attack
const ATTACK = ['head', 'body', 'foot'];


function createElement(tag, className){
	const $tag = document.createElement(tag);

	if(className){
		$tag.classList.add(className);
	}

	return $tag;
}


function createPlayer(player_obj){
	
	const $div_player = createElement('div', 'player' + player_obj.player);

	const $div_progressbar = createElement('div', 'progressbar');
	
	const $div_life = createElement('div', 'life');
	$div_life.style.width = player_obj.hp + '%';

	const $div_name = createElement('div', 'name');
	$div_name.textContent = player_obj.name;

	const $div_character = createElement('div', 'character');
	
	const $img = createElement('img');
	$img.src   = player_obj.img;
	

	$div_character.appendChild($img);
	
	$div_progressbar.appendChild($div_name);
	$div_progressbar.appendChild($div_life);

	$div_player.appendChild($div_character);
	$div_player.appendChild($div_progressbar);
	       
	return $div_player
}

function getRandom(maxValue){
	const result = Math.ceil(Math.random() * maxValue);
	return result ;
}

function changeHP(arg){
	this.hp -= arg;

	if(this.hp <= 0){
		this.hp = 0;
	}
}

function elHP(){
	const $playerLife = document.querySelector('.player' + this.player + ' .life');
	return $playerLife;
}

function renderHP(){
	const $thisPlayerLife       = this.elHP();
	$thisPlayerLife.style.width = this.hp + '%';
}

function playerWin(name){
	const $winTitle = createElement('div', 'loseTitle');

	if(name){
		$winTitle.textContent = name + ' wins';
	} else {
		$winTitle.textContent = 'draw';
	}

	return $winTitle;
}

function createReloadButton(){
	const $div_reloadWrap     = createElement('div', 'reload_wrap');
	const $reloadButton       = createElement('button', 'button');
	$reloadButton.textContent = 'restart';

	$reloadButton.addEventListener('click', function(){
		window.location.reload();
	});


	$div_reloadWrap.appendChild($reloadButton);
	$arenas.appendChild($div_reloadWrap);
}


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


function enemyAttack(){
	const hit = ATTACK[getRandom(3) - 1]; 
	const defence = ATTACK[getRandom(3) - 1];
	
	return {
		value: getRandom(HIT[hit]),
		hit, 
		defence
	}
}


$formFight.addEventListener('submit', function(event){
	event.preventDefault();

	const enemy = enemyAttack();
	const attack = {};

	for(let item of $formFight){

		if(item.checked && item.name === 'hit'){
			attack.value = getRandom(HIT[item.value]);
			attack.hit   = item.value;
		}

		if(item.checked && item.name === 'defence'){
			attack.defence = item.value;
		}

		item.checked = false;
	}

	
	if(attack.defence !== enemy.hit){
		player2.changeHP(attack.value);
		player2.renderHP();
	}

	if(enemy.defence !== attack.hit){
		player1.changeHP(enemy.value);
		player1.renderHP();
	}


	if(player1.hp === 0 || player2.hp === 0){
		$formFight.style.display = 'none';
		createReloadButton();
	}

	if(player1.hp === 0 && player1.hp < player2.hp){

		$arenas.appendChild(playerWin(player2.name));

	} else if(player2.hp === 0 && player2.hp < player1.hp){

		$arenas.appendChild(playerWin(player1.name));

	} else if(player1.hp === 0 && player2.hp === 0){

		$arenas.appendChild(playerWin());

	}

});














