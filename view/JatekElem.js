import Elem from "./Elem.js";
class JatekElem extends Elem {
    #lepheto;

    constructor(adat, dataId, szuloElem) {
        super(adat, dataId, szuloElem);
        this.#lepheto = false;
        this.elem.on("click", () => {
            if (!this.allapot) {
                this.#trigger("lepes", this.dataId);
            }
            if (this.#lepheto) {
                this.#trigger("ideLepek", this.dataId);
                console.log(this.#lepheto)
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
            "background-color": "rgb(115, 226, 81)",
            cursor: "grab",
            border: "0.5px solid lightgray",
        });
    }

    #mouseEnter() {
        //this.#trigger("lehetsegeslepesek", this.dataId);
        if (!this.allapot) {
            this.elem.css({
                "background-color": "rgb(198, 231, 188)",
                cursor: "grab",
            });
        }
       /*  if (this.#lepheto) {
            this.elem.css({
                "background-color": "rgb(115, 226, 81)",
                cursor: "grab",
            });
        } */
    }
    #mouseLeave() {
        this.szinBeallit();
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
