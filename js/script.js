function initAll() {

    var game = {};

    game['evil'] = new Nemico(Math.floor(Math.random() * 4), null, 'gameConsole');

    game['gamers'] = [];
    for (let i = 0; i < 4; i++) {
        game.gamers.push(new Giocatore(i, game.evil, 'gameConsole'));
    }

    game.evil.gamers = game.gamers;

    return game;

}

function updateGUI(game) {

    document.getElementById('boss_name').innerHTML = game.evil.name;
    document.getElementById('boss_image').src = game.evil.img;
    document.getElementById('boss_life_txt').innerHTML = game.evil.life;
    document.getElementById('boss_life').style.width = proportionalWidth(game.evil.life, game.evil.vitaMax) + '%';

    for (let i = 0; i < 4; i++) {
        idPlayer = 'p' + (i + 1);
        document.getElementById(idPlayer + '_name').innerHTML = game.gamers[i].name;
        document.getElementById(idPlayer + '_life_txt').innerHTML = game.gamers[i].life;
        document.getElementById(idPlayer + '_mana_txt').innerHTML = game.gamers[i].mana;
        document.getElementById(idPlayer + '_life').style.width = proportionalWidth(game.gamers[i].life, game.gamers[i].vitaMax);
        document.getElementById(idPlayer + '_mana').style.width = proportionalWidth(game.gamers[i].mana, game.gamers[i].manaMax);
    }

}

function proportionalWidth(val, tot) {
    return ((val * 100) / tot);
}