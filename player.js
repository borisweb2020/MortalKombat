import {getRandom} from './utils.js';
import {currentTime} from './utils.js';

import * as variables from './variables.js';

const {$chat, logs} = variables;


export const player1 = {
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['sword', 'harpoon', 'star'],
	changeHP,
	elHP,
	renderHP,
	generateLog,
	attack: function(){
		console.log('Fight...')
	}
}



export const player2 = {
	player: 2,
	name: 'Kitana',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: ['sword', 'harpoon', 'star'],
	changeHP,
	elHP,
	renderHP,
	generateLog,
	attack: function(){
		console.log('Fight...')
	}
}

function changeHP(arg){
	this.hp -= arg;

	if(this.hp <= 0){
		this.hp = 0;
	}
}

function elHP(){
	const $playerLife = document.querySelector('.player' + this.player + ' .life');
	return $playerLife;
}

function renderHP(){
	const $thisPlayerLife       = this.elHP();
	$thisPlayerLife.style.width = this.hp + '%';
}

function generateLog(type, damage, enemy){
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


