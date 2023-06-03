import JatekElem from "./JatekElem.js";
class Jatekter {
    #valaszthatoMezokLista = [];
    #kivalasztottBabu;
    #kivalasztottBabuIndex;
    #kiKovetkezik;
    #elemLista
    constructor() {
        this.#kivalasztottBabu = "";
        this.#kivalasztottBabuIndex = 0;
        this.#kiKovetkezik = -1; //-1 - fehér +1 fekete
        this.lista = ["♟", "♟", "♟", "", "", "", "♙", "♙", "♙"];
        this.#elemLista = [];
        this.jatekter();
        this.#valaszthatoMezokLista = [];
        //elkapjuk az elem kapcsolas eseményét
        $(window).on("lepes", (event) => {
            this.#kivalasztottBabuIndex = event.detail.dataId;
            this.#kivalasztottBabu = this.lista[this.#kivalasztottBabuIndex];
            this.szabadhelyrelep(
                this.#kivalasztottBabu,
                this.#kivalasztottBabuIndex
            );
        });
        $(window).on("ideLepek", (event) => {
            let kivElemIndex = event.detail.dataId;
            let cserebabu = this.lista[kivElemIndex];
            this.lista[kivElemIndex] = this.#kivalasztottBabu;
            this.lista[this.#kivalasztottBabuIndex] = "";
            console.log(this.lista);
            this.#kiKovetkezik=this.#kiKovetkezik * -1;
            this.aktAllapotMegjelenit();
        });
    }
    aktAllapotMegjelenit() {
        this.lista.forEach((elem, index) => {
            this.#elemLista[index].setErtek(elem);
            this.#elemLista[index].setAllapot(true);
            console.log(this.#kiKovetkezik, elem)
            if (this.#kiKovetkezik === 1 && elem ==="♟" ) {
                this.#elemLista[index].setAllapot(false);
            }
            if (this.#kiKovetkezik === -1 && elem ==="♙" ) {
                this.#elemLista[index].setAllapot(false);
            }
        });
        //Az összes eddigi mezőről levesszük a léphetőcellaságot.
        this.#valaszthatoMezokLista.forEach((lepesIndex) => {
            this.kattintasTrigger("lephetoCellakLe", lepesIndex);
        });
    }
    jatekter() {
        let szuloElem = $("article"); //itt lesznek a kártyák
        for (let index = 0; index < this.lista.length; index++) {
            //új elem létrehozása
            const elem = new JatekElem(this.lista[index], index, szuloElem); //Kártya osztály példányosítása
            this.#elemLista.push(elem);
        }
    }
    szabadhelyrelep(aktErtek, index) {
        let lepesIndex;
        this.valaszthatomezok(index, aktErtek);
        this.#valaszthatoMezokLista.forEach((lepesIndex) => {
            this.kattintasTrigger("lephetoCellak", lepesIndex);
        });
    }
    valaszthatomezok(index, babu) {
        //Az összes eddigi mezőről levesszük a léphetőcellaságot.
        this.#valaszthatoMezokLista.forEach((lepesIndex) => {
            this.kattintasTrigger("lephetoCellakLe", lepesIndex);
        });
        this.#valaszthatoMezokLista = [];
        let irany = 1;
        if (babu === "♙") {
            irany = -1;
        }
        let lehetsegesLepesElore = index + irany * 3;
        if (this.lista[lehetsegesLepesElore] === "") {
            this.#valaszthatoMezokLista.push(lehetsegesLepesElore);
        }
        //Fehér bábuval feketét ütünk

        if (index % 3 !== 2) {
            //jobbra
            let lehetsegesLepesUtes = lehetsegesLepesElore + 1;
            if (
                this.lista[lehetsegesLepesUtes] === "♟" &&
                this.lista[index] === "♙"
            ) {
                this.#valaszthatoMezokLista.push(lehetsegesLepesUtes);
            }
        }
        if (index % 3 !== 0) {
            //balra
            let lehetsegesLepesUtes = lehetsegesLepesElore - 1;
            if (
                this.lista[lehetsegesLepesUtes] === "♟" &&
                this.lista[index] === "♙"
            ) {
                this.#valaszthatoMezokLista.push(lehetsegesLepesUtes);
            }
        }
        //Fekete bábuval fehéret ütünk

        if (index % 3 !== 2) {
            //jobbra
            let lehetsegesLepesUtes = lehetsegesLepesElore + 1;
            if (
                this.lista[index] === "♟" &&
                this.lista[lehetsegesLepesUtes] === "♙"
            ) {
                this.#valaszthatoMezokLista.push(lehetsegesLepesUtes);
            }
        }
        if (index % 3 !== 0) {
            //balra
            let lehetsegesLepesUtes = lehetsegesLepesElore - 1;
            if (
                this.lista[index] === "♟" &&
                this.lista[lehetsegesLepesUtes] === "♙"
            ) {
                this.#valaszthatoMezokLista.push(lehetsegesLepesUtes);
            }
        }
        console.log(this.#valaszthatoMezokLista);
    }

    kattintasTrigger(esemenyNev, i) {
        let esemeny = new CustomEvent(esemenyNev, {
            detail: i, //ezzel adok át adatokat
        });
        window.dispatchEvent(esemeny); //a főablakhoz adom az eseményt, ezt tudom majd a script.js-ben elkapni.
    }
}
export default Jatekter;
