import Elem from "./Elem.js";
class JatekElem extends Elem {
    constructor(adat, dataId, szuloElem) {
        super(adat, dataId, szuloElem);
        this.lepheto = false;
        this.elem.on("click", () => {
            if (!this.allapot) {
                this.kattintasTrigger("lepes");
               
            }
            if (this.lepheto) {
                this.kattintasTrigger("ideLepek");
               
            }
        });
        this.elem.on("mouseenter", () => {
            if (!this.allapot) {
                this.elem.css("background-color", "lightgray");
            }
            if (this.lepheto) {
                this.elem.css("background-color", "orange");
            }
        });
        this.elem.on("mouseleave", () => {
           /*  if (!this.allapot) {
               
            }
            if (this.lepheto) {
                this.szinBeallit();
            } */
            this.szinBeallit();
        });
        $(window).on("lephetoCellak", (event) => {
            if (this.dataId === event.detail) {
                this.setLepheto(true);
            }
        });
        $(window).on("lephetoCellakLe", (event) => {
            if (this.dataId === event.detail) {
                this.setLepheto(false);
            }
        });
    }
    setLepheto(ertek) {
        //az adott bábu tud-e lépni erre a cellára.
        this.lepheto = ertek;
    }
    //létrehozunk egy saját eseményt, ami akkor fog kiváltódni, ha a lámpára kattintunk
    //ez azért kell, hogy a főprogram meg tudja hívni a szomszédokat
    kattintasTrigger(esemenyNev) {
        let esemeny = new CustomEvent(esemenyNev, {
            detail: this, //ezzel adok át adatokat
        });
        window.dispatchEvent(esemeny); //a főablakhoz adom az eseményt, ezt tudom majd a script.js-ben elkapni.
    }
}

export default JatekElem;
