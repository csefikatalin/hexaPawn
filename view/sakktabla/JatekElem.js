import Elem from "../Elem.js";
class JatekElem extends Elem {
    #lepheto;
    #adat;
    constructor(adat, dataId, szuloElem) {
        super(adat, dataId, szuloElem);
        this.#adat = adat;
        this.#lepheto = false;
        this.elem.on("click", () => {
           //ha a gép ellen játszunk, akkor fekete bábura nem kattinthatunk. 
          /*   if (this.#adat == "♟" && this.allapot) {
                return;
            } */
            if (!this.allapot) {
                this.#trigger("lepes", this.dataId);
                this.elem.css({
                    "background-color": "var(--vilagoszold)",
                    cursor: "grab",
                });
            }

            if (this.#lepheto) {
                this.#trigger("ideLepek", this.dataId);
            }
        });

        this.elem.on("mouseenter", () => {
            this.#mouseEnter();
        });

        this.elem.on("mouseleave", () => {
            this.#mouseLeave();
        });
    }
    #setLephetoCellaMutat(ertek) {
        //kiszínezi azokat a cellákat, ahova léphet a kiválasztott bábu.

        this.elem.css({
            "background-color": "var(--zold)",
            cursor: "grab",
            border: "0.5pt solid var(--vilagosbarna)",
        });
    }

    #mouseEnter() {
        if (this.#adat == "♟") {
            return;
        }
        if (!this.allapot) {
            this.#trigger("lepes", this.dataId);
            this.elem.css({
                "background-color": "var(--vilagoszold)",
                cursor: "grab",
            });
        }
        //ha üres cellára lépek szedje le a formázásokat - csak az adott bábut nézi
    }
    #mouseLeave() {
        // this.szinBeallit();
    }
    setLepheto(ertek) {
        //az adott bábu tud-e lépni erre a cellára.
        this.#lepheto = ertek;
        if (this.#lepheto) {
            this.#setLephetoCellaMutat();
        } else {
            this.szinBeallit();
        }
    }
    //létrehozunk egy saját eseményt, ami akkor fog kiváltódni, ha a cellára kattintunk
    //ez azért kell, hogy a főprogram tudja, hogy melyik bábuval akarunk lépni
    #trigger(esemenyNev, adat) {
        let esemeny = new CustomEvent(esemenyNev, {
            detail: adat, //ezzel adok át adatokat
        });
        window.dispatchEvent(esemeny); //a főablakhoz adom az eseményt, ezt tudom majd a script.js-ben elkapni.
    }
}

export default JatekElem;
