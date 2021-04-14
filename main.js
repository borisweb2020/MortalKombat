const $arenas       = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['sword', 'harpoon', 'star'],
	changeHP: changeHP,
	elHP: elHP,
	renderHP: renderHP,
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
	changeHP: changeHP,
	elHP: elHP,
	renderHP: renderHP,
	attack: function(){
		console.log('Fight...')
	}
}


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

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function changeHP(){
	this.hp -= Math.ceil(Math.random() * 20);

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



$randomButton.addEventListener('click', function() {
	player1.changeHP();
	player2.changeHP();
	player1.renderHP();
	player2.renderHP();

	if(player1.hp === 0 || player2.hp === 0){
		$randomButton.disabled = true;
		$reloadButton.hidden   = false;
	}

	if(player1.hp === 0 && player1.hp < player2.hp){

		$arenas.appendChild(playerWin(player2.name));

	} else if(player2.hp === 0 && player2.hp < player1.hp){

		$arenas.appendChild(playerWin(player1.name));

	} else if(player1.hp === 0 && player2.hp === 0){

		$arenas.appendChild(playerWin());

	}
});


function createReloadButton(){
	const $div_reloadWrap  = createElement('div', 'reload_wrap');
	$div_reloadWrap.hidden = true;
	const $button          = createElement('button', 'button');
	$button.textContent    = 'restart';
	
	$div_reloadWrap.appendChild($button);

	return $div_reloadWrap;
}

const $reloadButton = $arenas.appendChild(createReloadButton());

$reloadButton.addEventListener('click', function(){
	window.location.reload();
});











