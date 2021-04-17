const $arenas       = document.querySelector('.arenas');
const $formFight    = document.querySelector('.control');
const $chat         = document.querySelector('.chat');

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

const player1 = {
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['sword', 'harpoon', 'star'],
	changeHP,
	elHP,
	renderHP,
	attack: function(){
		console.log('Fight...')
	}
}

const player2 = {
	player: 2,
	name: 'Kitana',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: ['sword', 'harpoon', 'star'],
	changeHP,
	elHP,
	renderHP,
	attack: function(){
		console.log('Fight...')
	}
}

// a random strike
const HIT = {
	head: 30,
	body: 25,
	foot: 20,
}

// creating an enemy attack
const ATTACK = ['head', 'body', 'foot'];


function createElement(tag, className){
	const $tag = document.createElement(tag);

	if(className){
		$tag.classList.add(className);
	}

	return $tag;
}


function createPlayer(player_obj){
	
	const $div_player = createElement('div', 'player' + player_obj.player);

	const $div_progressbar = createElement('div', 'progressbar');
	
	const $div_life = createElement('div', 'life');
	$div_life.style.width = player_obj.hp + '%';

	const $div_name = createElement('div', 'name');
	$div_name.textContent = player_obj.name;

	const $div_character = createElement('div', 'character');
	
	const $img = createElement('img');
	$img.src   = player_obj.img;
	

	$div_character.appendChild($img);
	
	$div_progressbar.appendChild($div_name);
	$div_progressbar.appendChild($div_life);

	$div_player.appendChild($div_character);
	$div_player.appendChild($div_progressbar);
	       
	return $div_player
}

function getRandom(maxValue){
	const result = Math.ceil(Math.random() * maxValue);
	return result ;
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

function playerWin(name){
	const $winTitle = createElement('div', 'loseTitle');

	if(name){
		$winTitle.textContent = name + ' wins';
	} else {
		$winTitle.textContent = 'draw';
	}

	return $winTitle;
}

function createReloadButton(){
	const $div_reloadWrap     = createElement('div', 'reload_wrap');
	const $reloadButton       = createElement('button', 'button');
	$reloadButton.textContent = 'restart';

	$reloadButton.addEventListener('click', function(){
		window.location.reload();
	});


	$div_reloadWrap.appendChild($reloadButton);
	$arenas.appendChild($div_reloadWrap);
}


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


function enemyAttack(){
	const hit = ATTACK[getRandom(3) - 1]; 
	const defence = ATTACK[getRandom(3) - 1];
	
	return {
		value: getRandom(HIT[hit]),
		hit, 
		defence
	}
}

function playerAttack(){
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

function showReasult(){
	if(player1.hp === 0 || player2.hp === 0){
		$formFight.style.display = 'none';
		createReloadButton();
	}

	if(player1.hp === 0 && player1.hp < player2.hp){

		$arenas.appendChild(playerWin(player2.name));

	} else if(player2.hp === 0 && player2.hp < player1.hp){

		$arenas.appendChild(playerWin(player1.name));

	} else if(player1.hp === 0 && player2.hp === 0){

		$arenas.appendChild(playerWin());

	}
}

function generateLogs(type, player1, player2){

	const text = logs[type][0].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
	
	const el = `<p> ${text} </p>`;
	$chat.insertAdjacentHTML('afterbegin', el);
}

$formFight.addEventListener('submit', function(event){
	event.preventDefault();

	const enemy  = enemyAttack();
	const player = playerAttack();

	
	if(player.defence !== enemy.hit){
		player2.changeHP(player.value);
		player2.renderHP();
		generateLogs('hit', player1, player2);
	}

	if(enemy.defence !== player.hit){
		player1.changeHP(enemy.value);
		player1.renderHP();
		generateLogs('hit', player2, player1);
	}


	showReasult();

	console.log('enemy:', enemy);
	console.log('player:', player);
	console.log('enemy: ' + player1.hp, 'player: ' + player2.hp);

});














