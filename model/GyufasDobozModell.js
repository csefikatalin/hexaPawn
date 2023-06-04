import { gyufasDobozLista } from "./gyufasdobozlista.js";
class GyufasDobozModell {
    #lepesLista = [];
    #gyufasdDobozLista = [];
    constructor() {
        this.#gyufasdDobozLista = gyufasDobozLista;
      
    }
    get gyufasdDobozLista() {
        return this.#gyufasdDobozLista;
    }
    setGyufasDobozLista(index) {
        console.log("beállítom az aktuális doboz állapotát");
    }
    allapotKeres(lista) {
     
        let minta = lista.join();
        let index = 0;
        let elem = this.#gyufasdDobozLista[0];
        while (elem.jatekter.join() !== minta) {
            index++;
            elem = this.#gyufasdDobozLista[index];
        }
        //console.log(index, this.#gyufasdDobozLista[index])
        let lepesek = this.#gyufasdDobozLista[index].lepesek;
        let lepesIndex = Math.floor(Math.random() * lepesek.length);
        console.log(lepesek[lepesIndex]);
        let aktLepes = {
            dobozSzam: index,
            lepesSzam: lepesIndex,
            lepes: lepesek[lepesIndex],
        };
        this.#lepesLista.push(aktLepes);
        console.log(this.#lepesLista);
        return lepesek[lepesIndex];
    }
    veresegKezelese() {
        let utolsolepes = this.#lepesLista.pop();
        console.log(utolsolepes);
        let utolsoDobozIndex = utolsolepes.dobozSzam;
        let utolsoLepesIndex = utolsolepes.lepes;
        
        console.log(this.#gyufasdDobozLista[utolsoDobozIndex].lepesek);
        this.#gyufasdDobozLista[utolsoDobozIndex].lepesek.splice(utolsoLepesIndex, 1);
        console.log(this.#gyufasdDobozLista[utolsoDobozIndex].lepesek);
    }
}
export default GyufasDobozModell;
