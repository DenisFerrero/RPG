//


class Mossa {

    valMax;
    valMin;
    pSuccess;
    manaCost;
    img;
    sound;
    type;
    idMex;
    description;

    constructor(valMax, valMin, pSuccess, manaCost, img, sound, type, idMex, description) {
        this.valMax = valMax;
        this.valMin = valMin;
        this.pSuccess = pSuccess;
        this.manaCost = manaCost;
        this.img = img;
        this.sound = sound;
        this.type = type;
        this.idMex = idMex;
        this.description = description;
    }

    constructor(readedIndex, idMex) {
        var newMossa = JSON.parse(MosseJSON)[readedIndex];
        this.valMax = newMossa.valMax;
        this.valMin = newMossa.valMin;
        this.pSuccess = newMossa.pSuccess;
        this.manaCost = newMossa.manaCost;
        this.sound = newMossa.sound;
        this.img = newMossa.img;
        this.type = newMossa.type;
        this.idMex = idMex;
    }

    dmg() {


    }

    precision() {

    }

}