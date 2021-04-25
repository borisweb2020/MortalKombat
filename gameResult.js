import {playerWin} from './utils.js';
import {createElement} from './utils.js';
import {getRandom} from './utils.js';

import * as variables from './variables.js';

const {$arenas, $formFight, $chat, logs} = variables;

function createReloadButton(){
	const $div_reloadWrap     = createElement('div', 'reload_wrap');
	const $reloadButton       = createElement('button', 'button');
	$reloadButton.textContent = 'restart';

	$reloadButton.addEventListener('click', () => {
		window.location.reload();
	});


	$div_reloadWrap.appendChild($reloadButton);
	$arenas.appendChild($div_reloadWrap);
}

export function showReasult(player1, player2){
	if(player1.hp === 0 || player2.hp === 0){
		$formFight.style.display = 'none';
		createReloadButton();
	}

	if(player1.hp === 0 && player1.hp < player2.hp){

		$arenas.appendChild(playerWin(player2.name));
		generateLogResult(player2.name, player1.name);

	} else if(player2.hp === 0 && player2.hp < player1.hp){

		$arenas.appendChild(playerWin(player1.name));
		generateLogResult(player1.name, player2.name);

	} else if(player1.hp === 0 && player2.hp === 0){

		$arenas.appendChild(playerWin());
		const el = `<p> ${logs.draw} </p>`;
		$chat.insertAdjacentHTML('afterbegin', el);
	}
}



function generateLogResult(name1, name2){
	let i      = getRandom(logs['end'].length - 1);
	const text = logs['end'][i].replace('[playerWins]', name1)
	.replace('[playerLose]', name2);

	const el   = `<p> ${text} </p>`;
	$chat.insertAdjacentHTML('afterbegin', el);
}