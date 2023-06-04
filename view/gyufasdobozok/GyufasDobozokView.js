import GyufasDobozView from "./GyufasDobozView.js";
class GyufasDobozokView {
    #lista = [];
    constructor(lista) {
        this.#lista = lista;
        this.#init();
    }
    #init() {
        this.#lista.forEach((element) => {
           
            new GyufasDobozView(element);
        });
    }
}
export default GyufasDobozokView;

