import JatekterModel from "../model/JatekterModel.js";
import JatekterView from "../view/sakktabla/JatekterView.js";
import InfoView from "../view/info/InfoView.js";
class JatekterController {
    #kiKovetkezik;
    #jatekSzama;
    #jatekterView;
    #jatekterModel;
    #infoView;
    #babuLista = [];
    constructor(jatekSzama) {
        this.#jatekSzama = jatekSzama;
        this.#babuLista = ["♙", "♟", "♟"];
        this.#jatekterModel = new JatekterModel();
        this.#jatekterView = new JatekterView(this.#jatekterModel.lista);
        this.#infoView = new InfoView($(".info1"));
        this.#kiKovetkezik = -1;
        this.blocked = false;
        //JatekElem váltja ki az eseményt
        $(window).on("lepes", (event) => {
            //this.#lephetosegEltavolitasa();
            //amikor kiválasztom a bábut, amivel lépni fogok
            this.#lehetsegesLepesek(event.detail, "lepes");

            this.blocked = true;
        });

        $(window).on("ideLepek", (event) => {
            //már van kiválasztott bábu, meghatározom, hoyg hova lépek vele.
            this.#jatekterModel.kivalasztottLepes(event.detail);
            this.#kiKovetkezik = this.#kiKovetkezik * -1;
            this.#kovetkezoLepesElokeszites();

            this.blocked = false;
            if (this.#kiKovetkezik == 1) {
                //A gép lépései

                //$("*").off();
                setTimeout(() => {
                    //Itt lép a gép, és adott idő múlva jön a játékos
                    this.#gepLepes();
                    console.log("Te jössz!");

                    this.#kovetkezoLepesElokeszites();
                    this.#jatekvege();
                    // $("*").on();
                }, 1000);
            }
            this.#infoView.setKovJatekosElem(
                `A következő játékos: ${
                    this.#babuLista[this.#kiKovetkezik + 1]
                }`
            );

            this.#jatekvege();
        });
    }
    #gepLepes() {
        this.#kiKovetkezik = this.#kiKovetkezik * -1;
        this.#jatekterModel.gepLepes();
        console.log("A gép lépett");
    }
    #kovetkezoLepesElokeszites() {
        this.#jatekterView.aktAllapotMegjelenit(
            this.#jatekterModel.lista,
            this.#kiKovetkezik
        );
    }
    #jatekvege() {
        if (this.#jatekterModel.jatekVege) {
            this.#infoView.setKovJatekosElem(
                `Vége! A nyertes: ${this.#jatekterModel.gyoztesBabu}`
            );
            this.#infoView.ujjatekElem.show();
            this.#jatekterView.aktAllapotMegjelenit(
                this.#jatekterModel.lista,
                "Vége"
            );
            $(".elem").off();
            this.#trigger("jatekVege", this.#jatekterModel.gyoztesBabu);
        }
    }
    #lehetsegesLepesek(index) {
        this.#jatekterModel.babuValasztas(index);
        this.#jatekterView.lephetoHelyekMegjelenit(
            this.#jatekterModel.valaszthatoMezokLista
        );
    }
    #trigger(esemenyNev, adat) {
        let esemeny = new CustomEvent(esemenyNev, {
            detail: adat, //ezzel adok át adatokat
        });
        window.dispatchEvent(esemeny); //a főablakhoz adom az eseményt, ezt tudom majd a script.js-ben elkapni.
    }
}
export default JatekterController;
