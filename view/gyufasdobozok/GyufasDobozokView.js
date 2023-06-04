import GyufasDobozView from "./GyufasDobozView.js";
class GyufasDobozokView {
    #lista = [];
    constructor(lista) {
        this.#lista = lista;
        this.#init();
    }
    #init() {
        let szuloElem = $(`.gyufasdobozok .lepes2`);
        szuloElem.empty();
        szuloElem = $(`.gyufasdobozok .lepes4`);
        szuloElem.empty();
        szuloElem = $(`.gyufasdobozok .lepes6`);
        szuloElem.empty();
        this.#lista.forEach((element, index) => {
            new GyufasDobozView(element, index);
        });
    }
}
export default GyufasDobozokView;
