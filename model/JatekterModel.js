class JatekterModel {
    #valaszthatoMezokLista = [];
    #kiKovetkezik;
    #kivalasztottBabu;
    #kivalasztottBabuIndex;
    #lista = [];
    constructor() {
        this.#kiKovetkezik = -1; //-1 - fehér +1 fekete
        this.#jatekter(); //inicializálja a játékteret
        this.#valaszthatoMezokLista = [];
        this.#kivalasztottBabu = "";
        this.#kivalasztottBabuIndex = 0;
    }
    #jatekter() {
        this.#lista = ["♟", "♟", "♟", "", "", "", "♙", "♙", "♙"];
    }
    babuValasztas(index) {
        //amikor kiválasztom a bábut, amivel lépni fogok
     
        this.#kivalasztottBabu = this.#lista[index];
        this.#kivalasztottBabuIndex = index;
        this.#szabadhelyrelep();
    }
    kivalasztottLepes(index) {
      
        this.#lista[index] = this.#kivalasztottBabu;
        this.#lista[this.#kivalasztottBabuIndex] = "";
        this.#kiKovetkezik = this.#kiKovetkezik * - 1;

    }
    get lista() {
        return this.#lista;
    }
    get valaszthatoMezokLista() {
        return this.#valaszthatoMezokLista;
    }
    #szabadhelyrelep() {
       
        //beállítja azokat a mezőket, melyekre az adott indexű mezőről az adott bábu léphet
        //a léphető mezőket beteszi a this.#valaszthatoSzeleMezo listába
        this.#valaszthatoMezokLista = [];
        let lehetsegesLepesElore =  this.#kivalasztottBabuIndex + this.#kiKovetkezik * 3;
        if (this.#lista[lehetsegesLepesElore] === "") {
            this.#valaszthatoMezokLista.push(lehetsegesLepesElore);
        }
        //Fehér bábuval feketét ütünk
        this.#valaszthatoSzeleMezo( this.#kivalasztottBabuIndex, 2, "♟", "♙", 1); //jobbra
        this.#valaszthatoSzeleMezo( this.#kivalasztottBabuIndex, 0, "♟", "♙", -1); //balra
        //Fekete bábuval fehéret ütünk
        this.#valaszthatoSzeleMezo( this.#kivalasztottBabuIndex, 2, "♙", "♟", +1); //jobbra
        this.#valaszthatoSzeleMezo( this.#kivalasztottBabuIndex, 0, "♙", "♟", -1); //balra
     
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
