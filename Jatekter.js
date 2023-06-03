import JatekElem from "./JatekElem.js";
class Jatekter {
    #valaszthatoMezokLista = [];
    #kivalasztottBabu;
    #kivalasztottBabuIndex;
    #kiKovetkezik;
    #elemLista;
    #lista = [];
    constructor() {
        this.#kivalasztottBabu = "";
        this.#kivalasztottBabuIndex = 0;
        this.#kiKovetkezik = -1; //-1 - fehér +1 fekete
        this.#lista = ["♟", "♟", "♟", "", "", "", "♙", "♙", "♙"];
        this.#elemLista = [];
        this.#jatekter(); //inicializálja a játékteret
        this.#valaszthatoMezokLista = [];
        //elkapjuk az elem kapcsolas eseményét
        $(window).on("lepes", (event) => {
            this.#lephetosegEltavolitasa()
            //amikor kiválasztom a bábut, amivel lépni fogok
            this.#kivalasztottBabuIndex = event.detail;
            this.#kivalasztottBabu = this.#lista[this.#kivalasztottBabuIndex];
            this.#szabadhelyrelep(
                this.#kivalasztottBabu,
                this.#kivalasztottBabuIndex
            );
          
        });
        $(window).on("ideLepek", (event) => {
            //már van kiválasztott bábu, meghatározom, hoyg hova lépek vele.
            let kivElemIndex = event.detail;
            this.#lista[kivElemIndex] = this.#kivalasztottBabu;
            this.#lista[this.#kivalasztottBabuIndex] = "";
            this.#kiKovetkezik = this.#kiKovetkezik * -1;
            this.#aktAllapotMegjelenit();
        });
    }
    #aktAllapotMegjelenit() {
        //megjeleníti a modell / játék aktuális állapotát a játéktéren
        //előkészíti a következő állapothoz a játékteret
        this.#lista.forEach((elem, index) => {
            this.#elemLista[index].setErtek(elem);
            this.#elemLista[index].setAllapot(true);
            if (this.#kiKovetkezik === 1 && elem === "♟") {
                this.#elemLista[index].setAllapot(false);
            }
            if (this.#kiKovetkezik === -1 && elem === "♙") {
                this.#elemLista[index].setAllapot(false);
            }
        });
       this.#lephetosegEltavolitasa()
    }

    #lephetosegEltavolitasa(){
         //Az összes eddigi mezőről levesszük a léphetőcellaságot.
         this.#valaszthatoMezokLista.forEach((lepesIndex) => {
           // this.#trigger("lephetoCellakLe", lepesIndex);
           this.#elemLista[lepesIndex].setLepheto(false);
        });
    }
    #jatekter() {
        let szuloElem = $("article"); //itt lesznek a kártyák
        for (let index = 0; index < this.#lista.length; index++) {
            //új elem létrehozása
            const elem = new JatekElem(this.#lista[index], index, szuloElem); //Kártya osztály példányosítása
            this.#elemLista.push(elem);
        }
    }
    #szabadhelyrelep(aktErtek, index) {
        this.#lephetosegEltavolitasa()
        //beállítja azokat a mezőket, melyekre az adott indexű mezőről az adott bábu léphet
        //a léphető mezőket beteszi a this.#valaszthatoSzeleMezo listába
        this.#valaszthatoMezokLista = [];
        let lehetsegesLepesElore = index + this.#kiKovetkezik * 3;
        if (this.#lista[lehetsegesLepesElore] === "") {
            this.#valaszthatoMezokLista.push(lehetsegesLepesElore);
        }
        //Fehér bábuval feketét ütünk
        this.#valaszthatoSzeleMezo(index, 2, "♟", "♙", 1); //jobbra
        this.#valaszthatoSzeleMezo(index, 0, "♟", "♙", -1); //balra
        //Fekete bábuval fehéret ütünk
        this.#valaszthatoSzeleMezo(index, 2, "♙", "♟", +1); //jobbra
        this.#valaszthatoSzeleMezo(index, 0, "♙", "♟", -1); //balra
        console.log(this.#valaszthatoMezokLista);

        this.#valaszthatoMezokLista.forEach((lepesIndex) => {
            //this.#trigger("lephetoCellak", lepesIndex);
           
            this.#elemLista[lepesIndex].setLepheto(true);
        });
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

    #trigger(esemenyNev, i) {
        //az i mondja meg,hogy melyik elem esetében kell aktiválni az eseményt
        let esemeny = new CustomEvent(esemenyNev, { detail: i });
        window.dispatchEvent(esemeny);
    }
}
export default Jatekter;
