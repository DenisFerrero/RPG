class Personaggio {
    life;
    mana;
    manaMax;
    nome;
    img;

    constructor(life, name, img) {
        this.life = life;
        this.name = name;
        this.img = img;
        this.mana = 0; // TODO: set value
        this.manaMax = 0; // TODO: set value
    }

    isAlive() {
        if (life > 0)
            return true;
        else
            return false;
    }
}