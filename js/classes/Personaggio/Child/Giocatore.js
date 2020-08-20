class Giocatore extends Personaggio {
    vitaMax;
    evil;
    mosse = [];
    wasAlive = true;

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

    attacks(index, callback) {
        if (this.mosse[index].type) {
            var dmg = this.mosse[index].dmg(this, this.evil.name, callback);
            if (dmg > 0) {
                this.evil.life -= dmg;
            }
            if (this.checkWin()) {
                window.location.href = "./end_page/win.html"
            }
        } else {
            this.life += this.mosse[index].dmg(this, null, callback);
            if (this.life > this.vitaMax)
                this.life = this.vitaMax;
        }
    }
    checkWin() {
        return !this.evil.isAlive();
    }

    checkDeath(foo) {
        var j;

        if (this.isAlive() != this.wasAlive) {

            var snd = new Audio("../media/sound/PagesSound/death.mp3");
            snd.volume = 0.1;
            snd.play();
            this.wasAlive = false;
            j = document.getElementById("player_container_" + (foo + 1));
            j.classList.add("bg-warning");
            j.style.cursor = "default";

        }


    }
}