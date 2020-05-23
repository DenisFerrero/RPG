class Giocatore extends Personaggio {
    vitaMax;
    evil;

    constructor(life, name, img, vitaMax, evil) {
        super(life, name, img, mana, manaMax); //Lo fai con la super fai prima
        this.vitaMax = vitaMax;
        this.evil = evil;
    }

    attacks(index) {
        // TODO
    }
    checkWin() {
        return evil.life == 0;
    }
}