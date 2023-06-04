import JatekterController from "./JatekterController.js";
import GyufasDobozController from "./GyufasDobozController.js";
import InfoJatekView from "../view/sakktabla/InfoJatekView.js";
import JatekModell from "../model/JatekModell.js";
class JatekController {
    constructor() {
        this.infoJatekView = new InfoJatekView($(".info2"), 1);
        this.jatekModell = new JatekModell();
        this.#init();      
       
    }
    #init() {
        $(window).off()
        this.infoJatekView.setSorszamElem(this.jatekModell.jatekSzama);
        new JatekterController();
        new GyufasDobozController();
        this.#nyeresBeallit()
        $(window).on("jatekVege", (event) => {
            this.jatekModell.nyeresSzamBeallit(event.detail);
           this.#nyeresBeallit()
        });
        $(window).on("ujjatek", (event) => {
            this.jatekModell.kovJatek();
            this.#init();
        });
    }
    #nyeresBeallit(){
       
        this.infoJatekView.setGyozelemAllitas(this.jatekModell.feketeNyer,this.jatekModell.feherNyer)
      
    }
}
export default JatekController;
