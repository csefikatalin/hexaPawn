import { gyufasDobozLista } from "./gyufasdobozlista.js";
class GyufasDobozModell {
    #gyufasdDobozLista;
    constructor() {
        this.#gyufasdDobozLista = gyufasDobozLista;
        console.log(this.#gyufasdDobozLista);
    }
    get gyufasdDobozLista() {
        return this.#gyufasdDobozLista;
    }
    set gyufasDobozLista(index) {
        console.log("beállítom az aktuális doboz állapotát");
    }
    allapotKeres(lista) {
        let minta = lista.join();
        let index = 0;
        let elem = this.#gyufasdDobozLista[0];
        while ( elem.jatekter.join() !== minta) {
            index++;
            elem = this.#gyufasdDobozLista[index];
        }
        console.log(index, this.#gyufasdDobozLista[index])
        let lepesek=this.#gyufasdDobozLista[index].lepesek
        let lepesIndex=Math.floor(Math.random()*lepesek.length)
        console.log(lepesek[lepesIndex]);
        return lepesek[lepesIndex]
    }
}
export default GyufasDobozModell;
