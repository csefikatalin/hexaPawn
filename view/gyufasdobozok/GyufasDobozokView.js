import GyufasDobozView from "./GyufasDobozView.js";
class GyufasDobozokView {
    #lista = [];
    constructor(lista) {
        this.#lista = lista;
        this.#init();
    }
    #init() {
        this.#lista.forEach((element,index) => {
           
            new GyufasDobozView(element,index);
        });
    }
}
export default GyufasDobozokView;

