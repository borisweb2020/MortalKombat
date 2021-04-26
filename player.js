import {getRandom} from './utils.js';
import {currentTime} from './utils.js';
import {createElement} from './utils.js';

import * as variables from './variables.js';

const {$chat, logs} = variables;

export default class Player {
	constructor(props){
		this.player       = props.player;
		this.name         = props.name;
		this.hp           = props.hp;
		this.img          = props.img;
		this.rootSelector = props.rootSelector;
	}

	changeHP = arg => {
		this.hp -= arg;

		if(this.hp <= 0){
			this.hp = 0;
		}
	}

	elHP = () => {
		const $playerLife = document.querySelector('.player' + this.player + ' .life');
		return $playerLife;
	}

	renderHP = () => {
		const $thisPlayerLife       = this.elHP();
		$thisPlayerLife.style.width = this.hp + '%';
	}

	generateLog = (type, damage, enemy) => {
		let i = getRandom(logs[type].length - 1);
		let text;
		let el;

		switch(type){
			case 'hit':
				text = logs['hit'][i].replace('[playerDefence]', this.name).replace('[playerKick]', enemy.name);
				el   = `<p> ${currentTime()} ${text} -${damage} [${this.hp}/100]</p>`;
				break;
			case 'defence':
				text = logs['defence'][i].replace('[playerKick]', enemy.name).replace('[playerDefence]', this.name);
				el   = `<p> ${currentTime()} ${text} </p>`;
				break;
		}

		$chat.insertAdjacentHTML('afterbegin', el);
	}


	createPlayer = () => {
	
			const $div_player = createElement('div', `player${this.player}`);

			const $div_progressbar = createElement('div', 'progressbar');
			
			const $div_life = createElement('div', 'life');
			$div_life.style.width = this.hp + '%';

			const $div_name = createElement('div', 'name');
			$div_name.textContent = this.name;

			const $div_character = createElement('div', 'character');
			
			const $img = createElement('img');
			$img.src   = this.img;
			

			$div_character.appendChild($img);
			
			$div_progressbar.appendChild($div_name);
			$div_progressbar.appendChild($div_life);

			$div_player.appendChild($div_character);
			$div_player.appendChild($div_progressbar);

			const $root = document.querySelector(`.${this.rootSelector}`);
			$root.appendChild($div_player);
			       
			return $div_player
		}

	attack = () => {
		console.log('Fight ...');
	}
}








