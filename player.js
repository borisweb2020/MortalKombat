import {getRandom} from './utils.js';
import {currentTime} from './utils.js';

import * as variables from './variables.js';

const {$chat, logs} = variables;

export default class Player {
	constructor(props){
		this.player = props.player;
		this.name   = props.name;
		this.hp     = props.hp;
		this.img    = props.img;
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

	attack = () => {
		console.log('Fight ...');
	}
}








