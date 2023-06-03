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

        //JatekElem váltja ki az eseményt
        $(window).on("lepes", (event) => {
            //this.#lephetosegEltavolitasa();
            //amikor kiválasztom a bábut, amivel lépni fogok
            this.#jatekterModel.babuValasztas(event.detail);
            this.#jatekterView.lephetoHelyekMegjelenit(
                this.#jatekterModel.valaszthatoMezokLista
            );
        });
        $(window).on("ideLepek", (event) => {
            //már van kiválasztott bábu, meghatározom, hoyg hova lépek vele.
            //let kivElemIndex = event.detail;

            this.#jatekterModel.kivalasztottLepes(event.detail);
            this.#kiKovetkezik = this.#kiKovetkezik * -1;
            this.#jatekterView.aktAllapotMegjelenit(
                this.#jatekterModel.lista,
                this.#kiKovetkezik
            );
        });
    }
}
export default JatekterController;
