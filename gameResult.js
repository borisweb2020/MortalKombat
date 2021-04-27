import {playerWin} from './utils.js';
import {createElement} from './utils.js';
import {getRandom} from './utils.js';
import {getRandomFloor} from './utils.js';
import {currentTime} from './utils.js';

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
		generateLogResult(player2, player1);

	} else if(player2.hp === 0 && player2.hp < player1.hp){

		$arenas.appendChild(playerWin(player1.name));
		generateLogResult(player1, player2);

	} else if(player1.hp === 0 && player2.hp === 0){

		$arenas.appendChild(playerWin());
		const el = `<p> ${getTextLog('draw')} </p>`;
		$chat.insertAdjacentHTML('afterbegin', el);
	}
}

export function getTextLog(type, playerName1, playerName2){
	let i = getRandomFloor(logs[type].length);
    let text;
    
    switch(type){
        case 'start':
            return text = logs.start.replace('[time]', currentTime())
                .replace('[player1]', playerName1.name)
                .replace('[player2]', playerName2.name);
            
        case 'hit':
        	return text = logs['hit'][i]
        		.replace('[playerKick]', playerName1.name)
        		.replace('[playerDefence]', playerName2.name);
            
        case 'defence':
        	return text = logs['defence'][i]
        		.replace('[playerKick]', playerName1.name)
        		.replace('[playerDefence]', playerName2.name);
        	
        case 'end':
        	return text = logs['end'][i]
        		.replace('[playerWins]', playerName1.name)
        		.replace('[playerLose]', playerName2.name);
        	
        case 'draw':
        	return text = logs.draw;
    }
}

function generateLogResult(player1, player2){
	
	const el = `<p> ${getTextLog('end', player1, player2)} </p>`;
	$chat.insertAdjacentHTML('afterbegin', el);
}