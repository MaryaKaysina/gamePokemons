const $btnHero = document.getElementById('btn-kick-hero');
const $btnEnemy = document.getElementById('btn-kick-enemy');
const $btnRestart = document.getElementById('btn-restart');
const character = {
    name: 'Pikachu',
    defautHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defautHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btnHero.addEventListener('click', function () { 
    changeHP(random(20), enemy);
    $btnHero.disabled = true;
    $btnEnemy.disabled = false;
});

$btnEnemy.addEventListener('click', function () { 
    changeHP(random(20), character);
    $btnHero.disabled = false;
    $btnEnemy.disabled = true;
});

$btnRestart.addEventListener('click', function () { 
    restart(character);
    restart(enemy);
    $btnHero.disabled = false;
    $btnEnemy.disabled = false;
    $btnRestart.style.display = 'none';
});

function init () { 
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) { 
    person.elHP.innerText = person.damageHP + ' / ' + person.defautHP;
}

function renderProgressbarHP (person) {
    person.elProgressbar.style.width = person.damageHP + '%'
}

function changeHP(count, person) {
    if (person.damageHP < 15) {
        person.damageHP = 0;
        alert('Бедный ' + person.name + ' проиграл бой!');
        $btnHero.disabled = true;
        $btnEnemy.disabled = true;
        $btnRestart.style.display = 'block';
    } else {
        person.damageHP -= count;
    }

    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function restart (person) {
    person.damageHP = person.defautHP;
    renderHP(character);
    renderHP(enemy);
}

init();