const player1 = {
	name: 'Scorpion',
	hp: 50,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['sword', 'harpoon', 'star'],
	attack: function(){
		console.log('Fight...')
	}
}

const player2 = {
	name: 'Kitana',
	hp: 80,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: ['sword', 'harpoon', 'star'],
	attack: function(){
		console.log('Fight...')
	}
}

const $arenas = document.querySelector('.arenas')

function createPlayer(player_class, player_obj){
	const $div_player = document.createElement('div')
	$div_player.classList.add(player_class)
	$arenas.appendChild($div_player)

		const $div_progressbar = document.createElement('div')
		$div_progressbar.classList.add('progressbar')
		$div_player.appendChild($div_progressbar)

			const $div_life = document.createElement('div')
			$div_life.classList.add('life')
			$div_life.style.width = String(player_obj.hp) + '%'
			$div_progressbar.appendChild($div_life)

			const $div_name = document.createElement('div')
			$div_name.classList.add('name')
			$div_name.textContent = player_obj.name
			$div_progressbar.appendChild($div_name)

		const $div_character = document.createElement('div')
		$div_character.classList.add('character')
		$div_player.appendChild($div_character)

			const $img = document.createElement('img')
			$img.src   = player_obj.img
			$div_character.appendChild($img)
}

createPlayer('player1', player1)
createPlayer('player2', player2)


