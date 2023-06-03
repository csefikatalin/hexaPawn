import JatekElem from "./JatekElem.js";

class JatekterView {
    #elemLista = [];

    constructor(lista) {
        this.#elemLista = []; //az egyes sakktábla cella objektumokat tároljuk itt
        this.#jatekterAlapallapot(lista);
    }
    #jatekterAlapallapot(lista) {
        //inicializálja a játékteret
        let szuloElem = $("article"); //itt lesznek a kártyák
        for (let index = 0; index < lista.length; index++) {
            //új elem létrehozása
            const elem = new JatekElem(lista[index], index, szuloElem); //Kártya osztály példányosítása
            this.#elemLista.push(elem);
        }
    }
    aktAllapotMegjelenit(lista, kikovetkezik) {
        //megjeleníti a modell / játék aktuális állapotát a játéktéren
        //előkészíti a következő állapothoz a játékteret

        lista.forEach((elem, index) => {
            this.#elemLista[index].setErtek(elem);
            this.#elemLista[index].setAllapot(true);
            if (kikovetkezik === 1 && elem === "♟") {
                this.#elemLista[index].setAllapot(false);
            }
            if (kikovetkezik === -1 && elem === "♙") {
                this.#elemLista[index].setAllapot(false);
            }
        });
        this.#lephetosegEltavolitasa();
    }

    #lephetosegEltavolitasa() {
        //Az összes eddigi mezőről levesszük a léphetőcellaságot.
        this.#elemLista.forEach((elem) => {
            elem.setLepheto(false);
        });
    }

    lephetoHelyekMegjelenit(lista) {
        this.#lephetosegEltavolitasa();

        lista.forEach((lepesIndex) => {
            //this.#trigger("lephetoCellak", lepesIndex);
            this.#elemLista[lepesIndex].setLepheto(true);
        });
    }
}
export default JatekterView;
