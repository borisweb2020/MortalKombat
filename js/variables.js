export const $arenas    = document.querySelector('.arenas');
export const $formFight = document.querySelector('.control');
export const $chat      = document.querySelector('.chat');
export const $radioHit  = document.querySelectorAll('[type=radio][name=hit]');

export const $radioDefence = document.querySelectorAll('[type=radio][name=defence]');
export const $button       = document.getElementById('button');

export const $audio    = document.getElementById('audio');
export const $audioHit = document.getElementById('audioHit');

export const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил стальным кулаком левое ухо врага.',
        '[playerDefence] немного расслабился, как вдруг, неожиданно [playerKick] раздробил мощным ударом грудину противника.',
        '[playerDefence] отвлекся, а в это время [playerKick], раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, как вдруг неустрашимый [playerKick] нанес мощнейший прямой удар в челюсть оппонента.',
        '[playerDefence] задумался и внезапно [playerKick] целенаправленно влепил грубый удар локтем в пресс оппонента.',
        '[playerDefence] ковырялся в зубах и в это время [playerKick] влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, как внезапно [playerKick] размозжил открытой ладонью челюсть противника.',
        '[playerDefence] пока осматривался в это время [playerKick] неожиданно раздробил стопой аппендикс соперника.',
        '[playerDefence] замешкался и [playerKick] проведя отвлекающий маневр, нанес тяжелейший удар в грудь соперника.',
        '[playerDefence] пытался что-то сказать, но жестокий [playerKick] с разворота пяткой залепил прямо в челюсть противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся и в этот момент [playerKick] раздробил коленом висок врага.',
        '[playerDefence] забылся, а в это время [playerKick] разбежавшись размозжил локтем губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] ловко провел удар коленом в левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил сокрушающий удар кулаком, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно влепил мощнейший  удар в живот оппонента.',
        '[playerDefence] пришел в себя и в это время [playerKick] провел красивейший удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] в прыжке влепил точный удар ногой в ухо врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от коварного удара открытой ладонью в ключицу.',
        '[playerKick] потерял контроль, и потому [playerDefence] сумел поставить блок на удар пяткой в грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и [playerDefence] удачно поставил блок на удар головой в бровь.',
        '[playerKick] старался провести удар, но [playerDefence] увернулся в сторону от удара кулака прямо в челюсть.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] отвлекся на мгновение и потому у [playerDefence] получилось отпрыгнуть от удара в живот.',
        '[playerKick] обманулся и [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

