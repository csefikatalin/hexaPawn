import GyufasDobozModell from "./GyufasDobozModell.js";
class JatekterModel {
    #valaszthatoMezokLista = [];
    #kiKovetkezik;
    #kivalasztottBabu;
    #kivalasztottBabuIndex;
    #lista = [];
    #babuLista;
    #gyufasDobozModell;

    constructor() {
        this.#babuLista = ["♙", "♟", "♟", "♙"];
        this.#kiKovetkezik = -1; //-1 - fehér +1 fekete
        this.#jatekter(); //inicializálja a játékteret
        this.#valaszthatoMezokLista = [];
        this.#kivalasztottBabu = "";
        this.#kivalasztottBabuIndex = 0;
        this.jatekVege = false;
        this.gyoztesBabu = "";
        this.#gyufasDobozModell = new GyufasDobozModell();
    }
    #jatekter() {
        this.#lista = ["♟", "♟", "♟", " ", " ", " ", "♙", "♙", "♙"];
    }
    babuValasztas(index) {
        //amikor kiválasztom a bábut, amivel lépni fogok

        this.#kivalasztottBabu = this.#lista[index];
        this.#kivalasztottBabuIndex = index;
        this.#szabadhelyrelep(this.#kivalasztottBabuIndex);
    }
    kivalasztottLepes(index) {
        //a játékos az index . mezőt válaszotta
        this.#lista[index] = this.#kivalasztottBabu;
        this.#lista[this.#kivalasztottBabuIndex] = " ";
        this.#kiKovetkezik = this.#kiKovetkezik * -1;
        this.gyoztesBabu = this.gyoztes();

        if (this.gyoztesBabu !== undefined) {
            this.jatekVege = true;
        }
    }
    get lista() {
        return this.#lista;
    }
    get valaszthatoMezokLista() {
        return this.#valaszthatoMezokLista;
    }
    gepLepes() {
        //this.#lista[index] = this.#kivalasztottBabu;
        // this.#lista[this.#kivalasztottBabuIndex] = " ";
        this.#kiKovetkezik = this.#kiKovetkezik * -1;
        let lepes = this.#gyufasDobozModell.allapotKeres(this.#lista);

        this.#lista[lepes[1]] = this.#lista[lepes[0]];
        this.#lista[lepes[0]] = " ";
        this.gyoztesBabu = this.gyoztes();

        if (this.gyoztesBabu !== undefined) {
            this.jatekVege = true;
        }
    }
    // this.#kivalasztottBabuIndex
    #szabadhelyrelep(index) {
        //beállítja azokat a mezőket, melyekre az adott indexű mezőről az adott bábu léphet
        //a léphető mezőket beteszi a this.#valaszthatoSzeleMezo listába
        this.#valaszthatoMezokLista = [];
        let lehetsegesLepesElore = index + this.#kiKovetkezik * 3;
        if (this.#lista[lehetsegesLepesElore] === " ") {
            this.#valaszthatoMezokLista.push(lehetsegesLepesElore);
        }
        //Fehér bábuval feketét ütünk
        this.#valaszthatoSzeleMezo(index, 2, "♟", "♙", 1); //jobbra
        this.#valaszthatoSzeleMezo(index, 0, "♟", "♙", -1); //balra
        //Fekete bábuval fehéret ütünk
        this.#valaszthatoSzeleMezo(index, 2, "♙", "♟", +1); //jobbra
        this.#valaszthatoSzeleMezo(index, 0, "♙", "♟", -1); //balra
    }

    gyoztes() {
        let feherGyoztes = this.#lista.join(".").slice(0, 5);
        if (feherGyoztes.includes("♙")) {
            return "♙";
        }
        let feketeGyoztes = this.#lista.join(".").slice(12, 17);
        console.log(feherGyoztes, feketeGyoztes);
        if (feketeGyoztes.includes("♟")) {
            return "♟";
        }
        let aktBabu = this.#babuLista[this.#kiKovetkezik + 1];

        let db = 0;
        this.#lista.forEach((element, index) => {
            if (element == aktBabu) {
                this.#szabadhelyrelep(index);
                db += this.#valaszthatoMezokLista.length;
            }
        });

        if (db === 0) {
            console.log("nyert ", this.#babuLista[this.#kiKovetkezik + 2]);
            return this.#babuLista[this.#kiKovetkezik + 2];
        }
    }
    #valaszthatoSzeleMezo(index, szel, egyikBabu, masikBabu, irany) {
        //megvizsgálja, hogy ha a lépő bábu a tábla szélén áll, akkor mely mezőkre léphet/üthet
        let lehetsegesLepesElore = index + this.#kiKovetkezik * 3;
        if (index % 3 !== szel) {
            //jobbra
            let lehetsegesLepesUtes = lehetsegesLepesElore + irany;
            if (
                this.#lista[lehetsegesLepesUtes] === egyikBabu &&
                this.#lista[index] === masikBabu
            ) {
                this.#valaszthatoMezokLista.push(lehetsegesLepesUtes);
            }
        }
    }
}
export default JatekterModel;
