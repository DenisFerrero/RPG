class Nemico extends Personaggio {
    gamers;
    mosse = [];

    constructor(life, name, img, gamers) {
        this.life = life;
        this.name = name;
        this.img = img;
        this.gamers = gamers;
    }
    constructor(readedIndex, gamers, idMex) {
        var newNemico = JSON.parse(NemiciJSON)[readedIndex];
        this.life = newNemico.life;
        this.mana = newNemico.mana;
        this.manaMax = newNemico.manaMax;
        this.name = newNemico.nome;
        this.img = newNemico.img;
        this.gamers = gamers;
        this.mosse.push(new Mossa(0, idMex));
        this.mosse.push(new Mossa(readedIndex + 6, idMex));
        //Generazione indice della terza mossa del cattivo
        //Deve essere diversa a quella speciale già registrata
        let index = readedIndex + 6;
        while (index == (readedIndex + 6)) {
            index = Math.floor(Math.random() * 4 + 6);
        }
        this.mosse.push(new Mossa(index, idMex));
    }

    attacks() {
        // TODO
    }
    checkWin() {
        var ret = true;
        this.gamers.forEach(gam => {
            ret = ret && gam.life == 0;
        });
        return ret;
    }
}