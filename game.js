import * as variables from './variables.js';
import {currentTime} from './utils.js';
import {createElement} from './utils.js';

import Player from './player.js';

import {enemyAttack} from './playerAction.js';
import {playerAttack} from './playerAction.js';

import {showReasult} from './gameResult.js';

const {logs, $chat, $formFight} = variables;

const player1 = new Player({
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	rootSelector: 'arenas',
});

const player2 = new Player({
	player: 2,
	name: 'Kitana',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	rootSelector: 'arenas',
});


export default class Game {


	start = () => {

		player1.createPlayer();
		player2.createPlayer();

		function greet(player1, player2){
			const text = logs.start.replace('[time]', currentTime())
			.replace('[player1]', player1.name)
			.replace('[player2]', player2.name);

			const el = `<p>${text}</p>`;
			
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
				player2.generateLog('hit', value, player1);
			} else {
				player2.generateLog('defence', '', player1);
			}

			if(defenceEnemy !== hit){
				player1.changeHP(valueEnemy);
				player1.renderHP();
				player1.generateLog('hit', valueEnemy, player2);
			} else {
				player1.generateLog('defence', '', player2);
			}


			showReasult(player1, player2);

			console.log('enemy:', valueEnemy, hitEnemy, defenceEnemy);
			console.log('player:', value, hit, defence);
			console.log('enemy: ' + player1.hp, 'player: ' + player2.hp);

		});
	

	} // the end of start()

	
} // the end of Game