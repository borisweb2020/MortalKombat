import * as variables from './variables.js';
import {currentTime} from './utils.js';
import {createElement} from './utils.js';
import {getRandom} from './utils.js';

import Player from './player.js';

import {enemyAttack} from './playerAction.js';
import {playerAttack} from './playerAction.js';

import {showReasult} from './gameResult.js';
import {getTextLog} from './gameResult.js';


const {logs, $chat, $formFight, $radioHit, $radioDefence, $button, $arenas, $audio, $audioHit} = variables;

let player1;
let player2;


export default class Game {

	getPlayers = async () => {
		const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players')
						.then(response => response.json());
		return body;
	}
	
	start = async () => {

		const players = await this.getPlayers();

		const p1 = players[getRandom(players.length) - 1];
		const p2 = JSON.parse(localStorage.getItem('player2'));

		player1 = new Player({
			...p1,
			player: 1,
			rootSelector: 'arenas',
		});

		player2 = new Player({
			...p2,
			player: 2,
			rootSelector: 'arenas',
		});

		player1.createPlayer();
		player2.createPlayer();

		$arenas.classList.add(`arena${getRandom(5)}`);

		$audio.src = `../assets/audio/arenas-screen/mk3-${getRandom(3) - 1}.mp3`;
		$audio.volume = 0.5;
		$audio.play();

		function greet(player1, player2){
			
			const el = `<p>${getTextLog('start', player1, player2)}</p>`;
			
			$chat.insertAdjacentHTML('afterbegin', el);
		}

		greet(player1, player2);

		$radioHit.forEach(item => {
			item.addEventListener('change', ()=>{
				$radioDefence.forEach(item => {
					if(item.checked){
						$button.disabled = false;
					}
				});
				
			});
		});

		$radioDefence.forEach(item => {
			item.addEventListener('change', ()=>{
				$radioHit.forEach(item => {
					if(item.checked){
						$button.disabled = false;
					}
				});
			});
		});

		

		$formFight.addEventListener('submit', event => {
			event.preventDefault();

			const {value: valueEnemy, hit: hitEnemy, defence: defenceEnemy}  = enemyAttack();
			const {value, hit, defence} = playerAttack();

			$audioHit.src = `../assets/audio/hit-sounds/mk3-${getRandom(10) - 1}.mp3`;
			$audioHit.play();
			
			if(defence !== hitEnemy){
				player2.changeHP(value);
				player2.renderHP();
				player2.generateLog('hit', player1, value);
			} else {
				player2.generateLog('defence', player1);
			}

			if(defenceEnemy !== hit){
				player1.changeHP(valueEnemy);
				player1.renderHP();
				player1.generateLog('hit', player2, valueEnemy);
			} else {
				player1.generateLog('defence', player2);
			}


			showReasult(player1, player2);
			$button.disabled = true;

		});
	

	} // the end of start()

	
} // the end of Game

