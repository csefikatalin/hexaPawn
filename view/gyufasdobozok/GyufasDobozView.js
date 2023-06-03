import Elem from "../Elem.js";
/* console.log = function() {} */
class GyufasDobozView {
    #allapotLista = [];
    #adat = [];
    constructor(adat, dataId, szuloElem) {
        this.#allapotLista = adat.jatekter;
        this.szuloElem = szuloElem;
        this.#adat = adat;
        this.#init();
    }

    #init() {
        this.szuloElem.append("<div class='doboz'></div>");

        this.#allapotLista.forEach((element, index) => {
            new GyufasDobozElemView(
                element,
                index,
                this.szuloElem.children(".doboz:last-child")
            );
        });
    }
}
export default GyufasDobozView;
class GyufasDobozElemView extends Elem {
    constructor(adat, dataId, szuloElem) {
        super(adat, dataId, szuloElem);
      
    }
}
