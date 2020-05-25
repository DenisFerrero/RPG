class Personaggio {
    life;
    mana;
    manaMax;
    name;
    img;

    constructor(life, name, img, mana, manaMax) {
        this.life = life;
        this.name = name;
        this.img = img;
        this.mana = mana;
        this.manaMax = manaMax;
    }

    isAlive() {
        if (life > 0)
            return true;
        else
            return false;
    }
}