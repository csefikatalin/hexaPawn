import JatekterModel from "../model/JatekterModel.js";
import JatekterView from "../view/sakktabla/JatekterView.js";
import InfoView from "../view/sakktabla/InfoView.js";
class JatekterController {
    #kiKovetkezik;

    #jatekterView;
    #jatekterModel;
    #infoView;
    #babuLista=[]
    constructor() {
        this.#babuLista=["♙","♟","♟"]
        this.#jatekterModel = new JatekterModel();
        this.#jatekterView = new JatekterView(this.#jatekterModel.lista);
        this.#infoView = new InfoView($(".info"));
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
            this.#kiKovetkezik = this.#kiKovetkezik * -1;
            this.#jatekterView.aktAllapotMegjelenit(
                this.#jatekterModel.lista,
                this.#kiKovetkezik
            );
            this.blocked = false;
            console.log(this.#babuLista,this.#kiKovetkezik+1)
            this.#infoView.setKovJatekosElem(this.#babuLista[this.#kiKovetkezik+1])

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
