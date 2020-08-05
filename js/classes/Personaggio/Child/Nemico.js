class Nemico extends Personaggio {
    gamers;
    mosse = [];

    //DUPLICATI DEI COSTRUTTORI NON ACCETTATI
    /*constructor(life, name, img, gamers) {
        this.life = life;
        this.name = name;
        this.img = img;
        this.gamers = gamers;
    }*/

    constructor(readedIndex, gamers, idMex) {
        super();
        var newNemico = NemiciJSON[readedIndex];
        this.life = newNemico.life;
        this.mana = newNemico.mana;
        this.manaMax = newNemico.manaMax;
        this.name = newNemico.nome;
        this.img = newNemico.img;
        this.vitaMax = newNemico.life;
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
        let indexPlayer = Math.floor(Math.random() * 4);
        while (this.gamers[indexPlayer].life <= 0) {
            indexPlayer = Math.floor(Math.random() * 4);
        }
        let indexMossa = Math.floor(Math.random() * 3);
        var dmg = this.mosse[indexMossa].dmg(this, this.gamers[indexPlayer].name);
        if (dmg > 0) {
            this.gamers[indexPlayer].life -= dmg;
            if (this.gamers[indexPlayer].life < 0)
                this.gamers[indexPlayer].life = 0;
        }
        if (this.checkWin()) {
            //Dopo un secondo carica la pagina di sconfitta
            setTimeout(() => { window.location.href = "./end_page/lose.html" }, 1000)
        }
    }
    checkWin() {
        var ret = true;
        this.gamers.forEach(gam => {
            ret = ret && !gam.isAlive();
        });
        return ret;
    }
}