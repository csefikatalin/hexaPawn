import { gyufasDobozLista } from "./gyufasdobozlista.js";
class GyufasDobozModell {
    #lepesLista = [];
    #gyufasdDobozLista = [];//itt tárolomm a gyufásdobozokat, amik az adott állapothoz tartozó lehetséges lépéseket tárolják
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
        console.log("Vereségkezelés")
       
        let utolsoDobozIndex=this.#egylepesKivesz()
        while (this.#gyufasdDobozLista[utolsoDobozIndex].lepesek.length===0){
            this.#egylepesKivesz()
        }
        localStorage.setItem("okosDobozok",JSON.stringify(this.#gyufasdDobozLista))
    }
    #egylepesKivesz(){
        let utolsolepes = this.#lepesLista.pop();        
        console.log(utolsolepes);
        let utolsoDobozIndex = utolsolepes.dobozSzam;
        let utolsoLepesIndex = utolsolepes.lepesSzam;
        console.log("dobozSzám",utolsoDobozIndex)
        console.log("lepesSzám",utolsoLepesIndex)      
        console.log("lepes",utolsolepes.lepes)      
        console.log("lépések",this.#gyufasdDobozLista[utolsoDobozIndex].lepesek);
        this.#gyufasdDobozLista[utolsoDobozIndex].lepesek.splice(utolsoLepesIndex, 1);
        console.log(this.#gyufasdDobozLista[utolsoDobozIndex].lepesek);
        return utolsoDobozIndex
    }
}
export default GyufasDobozModell;
