export function currentTime(){
	const date  = new Date();
	let hours   = (date.getHours()).toString();
	let minutes = (date.getMinutes()).toString();

	if(hours.length < 2){
		hours = '0' + hours;
	}

	if(minutes.length < 2){
		minutes = '0' + minutes;
	}

	return hours + ':' + minutes;
}


export function getRandom(maxValue){
	const result = Math.ceil(Math.random() * maxValue);
	return result ;
}


export function playerWin(name){
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
