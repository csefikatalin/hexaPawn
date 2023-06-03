import JatekterModel from "../model/JatekterModel.js";
import JatekterView from "../view/JatekterView.js";
class JatekterController {
    #kiKovetkezik;

    #jatekterView;
    #jatekterModel;
    constructor() {
        this.#jatekterModel = new JatekterModel();
        this.#jatekterView = new JatekterView(this.#jatekterModel.lista);
        this.#kiKovetkezik = -1;
        this.blocked = false;
        //JatekElem váltja ki az eseményt
        $(window).on("lepes", (event) => {
            //this.#lephetosegEltavolitasa();
            //amikor kiválasztom a bábut, amivel lépni fogok
            this.#lehetsegesLepesek(event.detail, "lepes");
            console.log(event.detail);
            this.blocked = true;
        });
        $(window).on("lehetsegeslepesek", (event) => {
            //amikor a lehetséges a bábuk fölé s viszem az egeret, amivel lépni fogok
           console.log(this.blocked)
            if (this.blocked) {
                this.#lehetsegesLepesek(event.detail, "lehetsegeslepes");
                console.log(event.detail);
            }
        });
        $(window).on("ideLepek", (event) => {
            //már van kiválasztott bábu, meghatározom, hoyg hova lépek vele.
            this.#jatekterModel.kivalasztottLepes(event.detail);
            console.log(event.detail);
            this.#kiKovetkezik = this.#kiKovetkezik * -1;
            this.#jatekterView.aktAllapotMegjelenit(
                this.#jatekterModel.lista,
                this.#kiKovetkezik
            );
            this.blocked = false;
        });
    }
    #lehetsegesLepesek(index) {
        console.log();
        this.#jatekterModel.babuValasztas(index);
        this.#jatekterView.lephetoHelyekMegjelenit(
            this.#jatekterModel.valaszthatoMezokLista
        );
    }
}
export default JatekterController;
