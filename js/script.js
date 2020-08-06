function gameScript() {
    var self = this;

    self.conta = 1;

    self.currentPlayer;

    self.initAll = function() {
        var game = {};

        game['evil'] = new Nemico(Math.floor(Math.random() * 4), null, 'gameConsole');
        game['turns'] = 0;
        game['gamers'] = [];
        for (let i = 0; i < 4; i++) {
            game.gamers.push(new Giocatore(i, game.evil, 'gameConsole'));
        }

        game.evil.gamers = game.gamers;

        return game;
    }

    self.game = self.initAll();

    self.proportionalWidth = function(val, tot) {
        return Math.floor(((val * 100) / tot));
    }

    self.selectedPlayer = function(index) {
        if (self.game.gamers[index].isAlive()) {
            for (var i = 1; i <= 4; i++) {
                document.getElementById("player_container_" + i).classList.remove("bg-success");
                document.getElementById("player_container_" + i).classList.remove("text-white");
            }
            document.getElementById("player_container_" + (index + 1)).classList.add("bg-success");
            document.getElementById("player_container_" + (index + 1)).classList.add("text-white");
            var mosse = document.getElementById("mosse");
            self.currentPlayer = index;
            mosse.selectedIndex = 0;
            document.getElementById("mossaDescription").innerHTML = "Descrizione mossa";

            mosse.options.item(1).text = new Mossa(0, null).name;
            mosse.options.item(2).text = new Mossa(1, null).name;
            mosse.options.item(3).text = new Mossa((index + 2), null).name;
        }
    }

    self.selectedAction = function() {
        var action = document.getElementById("mosse").selectedIndex;

        switch (action) {
            case 0:
                {
                    document.getElementById("mossaDescription").innerHTML = "Descrizione mossa";
                    break;
                }
            case 1:
                {
                    document.getElementById("mossaDescription").innerHTML = new Mossa(0, null).description;
                    break;
                }
            case 2:
                {
                    document.getElementById("mossaDescription").innerHTML = new Mossa(1, null).description;
                    break;
                }
            case 3:
                {
                    action = (action - 1) + self.currentPlayer;
                    document.getElementById("mossaDescription").innerHTML = new Mossa(action, null).description;
                    break;
                }
        }
    }

    self.attack = function() {
        if (self.game.gamers[self.currentPlayer].isAlive()) {
            var action = document.getElementById("mosse").selectedIndex;
            self.game.gamers[self.currentPlayer].attacks(action - 1, () => {
                self.game.turns++;
                self.conta++;
                self.updateGUI();
                if (self.game.turns == 2) {
                    self.updateGUI();
                    self.game.evil.attacks(() => {
                        self.game.turns = 0;
                        self.conta++;
                        self.updateGUI();
                    });
                }
            });
        }
    }

    self.cambia_turno = function(turno_nemico) {
        var x = document.getElementById('scritta_turno');
        if (turno_nemico) {
            document.getElementById("scritta_turno").innerHTML = "Turno " + self.conta + ": nemico";
        } else {
            document.getElementById("scritta_turno").innerHTML = "Turno " + self.conta + ": alleati";
        }
    }

    self.updateGUI = function() {

        document.getElementById('boss_name').innerHTML = self.game.evil.name;
        document.getElementById('boss_image').src = self.game.evil.img;
        document.getElementById('boss_life_txt').innerHTML = self.game.evil.life;
        document.getElementById('boss_life').setAttribute('style', 'width:' + self.proportionalWidth(self.game.evil.life, self.game.evil.vitaMax) + '%');
        if ((self.game.evil.mana + 5) > self.game.evil.manaMax) self.game.evil.mana = 100;
        else self.game.evil.mana += 5;

        for (let i = 0; i < 4; i++) {
            idPlayer = 'p' + (i + 1);
            if ((self.game.gamers[i].mana + 5) > self.game.gamers[i].manaMax) self.game.gamers[i].mana = 100;
            else self.game.gamers[i].mana += 5;
            document.getElementById(idPlayer + '_name').innerHTML = self.game.gamers[i].name;
            document.getElementById(idPlayer + '_life_txt').innerHTML = self.game.gamers[i].life;
            document.getElementById(idPlayer + '_mana_txt').innerHTML = self.game.gamers[i].mana;
            document.getElementById(idPlayer + '_life').setAttribute('style', 'width:' + self.proportionalWidth(self.game.gamers[i].life, self.game.gamers[i].vitaMax) + '%');
            document.getElementById(idPlayer + '_mana').setAttribute('style', 'width:' + self.proportionalWidth(self.game.gamers[i].mana, self.game.gamers[i].manaMax) + '%');
        }
        self.cambia_turno(self.game.turns == 2);
    }

}

var game = new gameScript();