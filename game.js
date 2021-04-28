import * as variables from './variables.js';
import {currentTime} from './utils.js';
import {createElement} from './utils.js';
import {getRandom} from './utils.js';

import Player from './player.js';

import {enemyAttack} from './playerAction.js';
import {playerAttack} from './playerAction.js';

import {showReasult} from './gameResult.js';
import {getTextLog} from './gameResult.js';


const {logs, $chat, $formFight} = variables;

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
		const p2 = players[getRandom(players.length) - 1];

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

		function greet(player1, player2){
			
			const el = `<p>${getTextLog('start', player1, player2)}</p>`;
			
			$chat.insertAdjacentHTML('afterbegin', el);
		}

		greet(player1, player2);

		

		$formFight.addEventListener('submit', event => {
			event.preventDefault();

			const {value: valueEnemy, hit: hitEnemy, defence: defenceEnemy}  = enemyAttack();
			const {value, hit, defence} = playerAttack();

			
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

			console.log('player1:', valueEnemy, hitEnemy, defenceEnemy, 'hp:', player1.hp);
			console.log('player2:', value, hit, defence, 'hp:', player2.hp);

		});
	

	} // the end of start()

	
} // the end of Game

