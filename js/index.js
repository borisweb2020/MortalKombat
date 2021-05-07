const $audio = document.getElementById('audio');

const getRandom = maxValue => {
	return Math.floor(Math.random()*maxValue);
}

function turnOnAudio(){
	$audio.src = `../assets/audio/title-screen/mk3-${getRandom(5)}.mp3`;
	$audio.autoplay = true;
	$audio.loop = true;

	// $audio.play();
}

setTimeout(turnOnAudio, 1500);

