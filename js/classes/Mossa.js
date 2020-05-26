class Mossa {

    name;
    valMax;
    valMin;
    pSuccess;
    manaCost;
    img;
    sound;
    type;
    idMex;
    description;

    //DUPLICATI DEI COSTRUTTORI NON ACCETTATI
    /*constructor(name, valMax, valMin, pSuccess, manaCost, img, sound, type, idMex, description) {
        this.valMax = valMax;
        this.valMin = valMin;
        this.pSuccess = pSuccess;
        this.manaCost = manaCost;
        this.img = img;
        this.sound = sound;
        this.type = type; //TRUE = danno
        this.idMex = idMex;
        this.description = description;
    }*/

    constructor(readedIndex, idMex) {
        var newMossa = MosseJSON[readedIndex];
        this.name = newMossa.name;
        this.valMax = newMossa.valMax;
        this.valMin = newMossa.valMin;
        this.pSuccess = newMossa.pSuccess;
        this.manaCost = newMossa.manaCost;
        this.sound = newMossa.sound;
        this.img = newMossa.img;
        this.type = newMossa.type;
        this.idMex = idMex;
        this.description = newMossa.description;
    }

    //Se il personaggio si deve curare allora si passerà come valori (attaccante, null)
    //Se il personaggio deve attaccare allora si passerà come valori (attaccante, nome del bersaglio)
    dmg(attaccante, nomeBersaglio) {
        //Generazione del danno, il danno varia tra valore max e min
        let damage = Math.floor(Math.random() * (this.valMax - this.valMin + 1) + this.valMin);
        var txt = document.getElementById(this.idMex);
        //Se il danno supera la condizione di precisione
        if (this.precision(damage)) {
            if (attaccante.mana - this.manaCost < 0) {
                txt.innerHTML = "Mana non sufficente per eseguire la mossa!";
                setTimeout(() => { txt.innerHTML = "" }, 1000);
                return -1;
            } else {
                attaccante.mana -= this.manaCost;
                txt.innerHTML = attaccante.nome + " usa " + this.name;
                if (this.type) {
                    //Si scrive che il si fa certo tot di danno
                    txt.innerHTML += " contro " + nomeBersaglio + " che subisce " + damage + " danni!";
                } else {
                    //Si scrive che si cura di un tot
                    txt.innerHTML += "su di " + attaccante.nome + " per curarsi di " + damage;
                }
                //Si riproduce l'audio del danno
                let audio = new Audio(this.sound);
                audio.play();
                audio.addEventListener('ended', () => {
                    //Alla fine dell'audio si cancella il txt (dopo 500ms) e si fa tornare il danno
                    setTimeout(() => {
                        txt.innerHTML = "";
                    }, 500);
                    return damage;
                })
            }
        } else {
            //Se non supera i valori di precisione allora torna semplicemente 0 + mex;
            txt.innerHTML = "La mossa non è abbastanza precisa e quindi non è andata a buon fine!";
            setTimeout(() => {
                txt.innerHTML = ""
            }, 2500);
            return 0;
        }
    }

    precision(damage) {
        return damage >= this.pSuccess;
    }

}