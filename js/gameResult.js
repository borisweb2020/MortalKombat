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
		window.location.pathname = 'index.html';
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
                .replace('[player1]', `<span class="chat_player-${playerName1.player}">${playerName1.name}</span>`)
                .replace('[player2]', `<span class="chat_player-${playerName2.player}">${playerName2.name}</span>`);
            
        case 'hit':
        	return text = logs['hit'][i]
        		.replace('[playerKick]', `<span class="chat_player-${playerName1.player}">${playerName1.name}</span>`)
        		.replace('[playerDefence]', `<span class="chat_player-${playerName2.player}">${playerName2.name}</span>`);
            
        case 'defence':
        	return text = logs['defence'][i]
        		.replace('[playerKick]', `<span class="chat_player-${playerName1.player}">${playerName1.name}</span>`)
        		.replace('[playerDefence]', `<span class="chat_player-${playerName2.player}">${playerName2.name}</span>`);
        	
        case 'end':
        	return text = logs['end'][i]
        		.replace('[playerWins]', `<span class="chat_player-${playerName1.player}">${playerName1.name}</span>`)
        		.replace('[playerLose]', `<span class="chat_player-${playerName2.player}">${playerName2.name}</span>`);
        	
        case 'draw':
        	return text = logs.draw;
    }
}

function generateLogResult(player1, player2){
	
	const el = `<p> ${getTextLog('end', player1, player2)} </p>`;
	$chat.insertAdjacentHTML('afterbegin', el);
}