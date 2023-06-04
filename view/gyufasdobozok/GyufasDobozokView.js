import GyufasDobozView from "./GyufasDobozView.js";
class GyufasDobozokView {
    #lista = [];
    #okosLista = [];
    constructor(lista, okosLista) {
        this.#lista = lista;
        this.#okosLista = okosLista;
        this.#init(".gyufasdobozok", this.#lista);
        console.log(this.#okosLista)
        if (this.#okosLista !== null) {
            this.#init(".okosdobozok", this.#okosLista);
        }
    }
    #init(szulo, lista) {
        // gyufásdobozok megjelenítése
        let szuloElem = $(`${szulo} .lepes2`);
        szuloElem.empty();
        szuloElem = $(`${szulo} .lepes4`);
        szuloElem.empty();
        szuloElem = $(`${szulo} .lepes6`);
        szuloElem.empty();
        lista.forEach((element, index) => {
            new GyufasDobozView(element, index, $(`${szulo}`));
        });
    }
}
export default GyufasDobozokView;
