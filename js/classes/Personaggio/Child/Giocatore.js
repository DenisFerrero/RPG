class Giocatore extends Personaggio {
    vitaMax;
    evil;
    mosse = [];

    //DUPLICATI DEI COSTRUTTORI NON ACCETTATI
    /*constructor(life, name, img, vitaMax, evil) {
        super(life, name, img, mana, manaMax); //Lo fai con la super fai prima
        this.vitaMax = vitaMax;
        this.evil = evil;
    }*/

    constructor(readedIndex, evil, idMex) {
        super();
        //Lettura dei dati del personaggio dal file JSON
        var newGiocatore = GiocatoriJSON[readedIndex];
        this.vitaMax = newGiocatore.vitaMax;
        this.life = newGiocatore.life;
        this.mana = newGiocatore.mana;
        this.manaMax = newGiocatore.manaMax;
        this.name = newGiocatore.nome;
        this.img = newGiocatore.img;
        //Inserimento del nemico e delle mosse
        this.evil = evil;
        this.mosse.push(new Mossa(0, idMex));
        this.mosse.push(new Mossa(1, idMex));
        this.mosse.push(new Mossa(readedIndex + 2, idMex));
    }

    attacks(index) {
        if (this.mosse[index].type) {
            var dmg = this.mosse[index].dmg(this, this.evil.name);
            if (dmg > 0) {
                this.evil.life -= dmg;
            }
            if (this.checkWin()) {
                window.location.href = "./end_page/win.html"
            }
        } else {
            this.life += this.mosse[index].dmg(this, null);
        }
    }
    checkWin() {
        return this.evil.life < 0;
    }
}