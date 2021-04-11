const $arenas       = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['sword', 'harpoon', 'star'],
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

function changeHP(players){
	for(let i = 0; i < players.length; i++){
		
		const $playerLife = document.querySelector('.player' + players[i].player + ' .life');
		players[i].hp -= Math.ceil(Math.random() * 20);
		$playerLife.style.width = players[i].hp + '%';

		if(players[i].hp <= 0){
			$playerLife.style.width = 0;
			$randomButton.disabled = true;

			if(i === 0){
				$arenas.appendChild(playerWin(players[i+1].name));
			} else {
				$arenas.appendChild(playerWin(players[i-1].name));
			}
		}
	} // an end of the loop
}


function playerWin(name){
	const $winTitle = createElement('div', 'loseTitle');
	$winTitle.textContent = name + ' win';

	return $winTitle;
}

$randomButton.addEventListener('click', function() {
	const arr = [];
	arr.push(player1, player2);
	changeHP(arr);
});








