import {getRandom} from './utils.js';
import * as variables from './variables.js';

const {$formFight} = variables;

// a random strike
const HIT = {
	head: 30,
	body: 25,
	foot: 20,
}

// creating an enemy attack
const ATTACK = ['head', 'body', 'foot'];

export function enemyAttack(){
	const hit = ATTACK[getRandom(3) - 1]; 
	const defence = ATTACK[getRandom(3) - 1];
	
	return {
		value: getRandom(HIT[hit]),
		hit, 
		defence
	}
}

export function playerAttack(){
	const attack = {};

	for(let item of $formFight){

		if(item.checked && item.name === 'hit'){
			attack.value = getRandom(HIT[item.value]);
			attack.hit   = item.value;
		}

		if(item.checked && item.name === 'defence'){
			attack.defence = item.value;
		}

		item.checked = false;
	}

	return attack;
}