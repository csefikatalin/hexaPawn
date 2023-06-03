import { gyufasDobozLista } from "./gyufasdobozlista.js";
class GyufasDobozModell {
    #gyufasdDobozLista;
    constructor() {
        this.#gyufasdDobozLista = gyufasDobozLista;
    }
    get gyufasdDobozLista() {
        return this.#gyufasdDobozLista;
    }
    set gyufasDobozLista(index){
        console.log("beállítom az aktuális doboz állapotát")
    }
}
export default GyufasDobozModell
