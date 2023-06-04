import  GyufasDobozModell  from "../model/GyufasDobozModell.js";
import  GyufasDobozokView  from "../view/gyufasdobozok/GyufasDobozokView.js"
class GyufasDobozController {
    #gyufasdDobozModel;
    #gyufasDobozokView;
    constructor() {
        this.#gyufasdDobozModel = new GyufasDobozModell();
        this.#gyufasDobozokView = new GyufasDobozokView(this.#gyufasdDobozModel.gyufasdDobozLista,this.#gyufasdDobozModel.okosGyDobozLista);
    }
    
}
export default GyufasDobozController;
