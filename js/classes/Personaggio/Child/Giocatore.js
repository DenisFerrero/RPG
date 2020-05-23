class Giocatore extends Personaggio {
    vitaMax;
    evil;

    constructor(life, name, img, vitaMax, evil) {
        super(life, name, img, mana, manaMax); //Lo fai con la super fai prima
        this.vitaMax = vitaMax;
        this.evil = evil;
    }
    constructor(readedIndex) {
        var newGiocatore = JSON.parse(GiocatoriJSON)[readedIndex];
        this.vitaMax = newGiocatore.vitaMax;
        this.life = newGiocatore.life;
        this.mana = newGiocatore.mana;
        this.manaMax = newGiocatore.manaMax;
        this.name = newGiocatore.name;
        this.img = newGiocatore.img;
    }

    attacks(index) {
        var attack = new Mossa(index);
        // TODO
    }
    checkWin() {
        return evil.life == 0;
    }
}