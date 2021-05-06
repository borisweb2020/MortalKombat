export function currentTime(){
	const date  = new Date();
	let hours   = (date.getHours()).toString();
	let minutes = (date.getMinutes()).toString();
	let seconds = (date.getSeconds()).toString();

	if(hours.length < 2){
		hours = '0' + hours;
	}

	if(minutes.length < 2){
		minutes = '0' + minutes;
	}

	if(seconds.length < 2){
		seconds = '0' + seconds;
	}

	return hours + ':' + minutes + ':' + seconds;
}


export const getRandom = maxValue => {
	const result = Math.ceil(Math.random() * maxValue);
	return result ;
}

export const getRandomFloor = maxValue => {
	const result = Math.floor(Math.random() * maxValue);
	return result ;
}


export const playerWin = name => {
	const $winTitle = createElement('div', 'loseTitle');

	if(name){
		$winTitle.textContent = name + ' wins';
	} else {
		$winTitle.textContent = 'draw';
	}

	return $winTitle;
}

export function createElement(tag, className){
	const $tag = document.createElement(tag);

	if(className){
		$tag.classList.add(className);
	}

	return $tag;
}


