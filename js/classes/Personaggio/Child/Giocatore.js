class Giocatore extends Personaggio {
    vitaMax;
    evil;

    constructor(life, name, img, vitaMax, evil) {
        this.life = life;
        this.name = name;
        this.img = img;
        this.vitaMax = vitaMax;
        this.evil = evil;
    }

    attacks(index) {
        // TODO
    }
}