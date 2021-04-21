import {player1} from './player.js';
import {player2} from './player.js';

import {getRandom} from './utils.js';
import {currentTime} from './utils.js';
import {createElement} from './utils.js';

import {enemyAttack} from './playerAction.js';
import {playerAttack} from './playerAction.js';

import {showReasult} from './gameResult.js';


import * as variables from './variables.js';


const {$arenas, $formFight, $chat, logs} = variables;

function greet(player1, player2){
	const text = logs.start.replace('[time]', currentTime()).replace('[player1]', player1.name).replace('[player2]', player2.name);
	const el = `<p>${text}</p>`;
	
	$chat.insertAdjacentHTML('afterbegin', el);
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

greet(player1, player2);

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


$formFight.addEventListener('submit', event => {
	event.preventDefault();

	const enemy  = enemyAttack();
	const player = playerAttack();

	
	if(player.defence !== enemy.hit){
		player2.changeHP(player.value);
		player2.renderHP();
		player2.generateLog('hit', player.value, player1);
	} else {
		player2.generateLog('defence', '', player1);
	}

	if(enemy.defence !== player.hit){
		player1.changeHP(enemy.value);
		player1.renderHP();
		player1.generateLog('hit', enemy.value, player2);
	} else {
		player1.generateLog('defence', '', player2);
	}


	showReasult();

	console.log('enemy:', enemy);
	console.log('player:', player);
	console.log('enemy: ' + player1.hp, 'player: ' + player2.hp);

});
















