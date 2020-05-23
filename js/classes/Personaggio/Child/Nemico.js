class Nemico extends Personaggio {
    gamers;

    constructor(life, name, img, gamers) {
        this.life = life;
        this.name = name;
        this.img = img;
        this.gamers = gamers;
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