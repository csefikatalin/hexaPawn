import GyufasDobozView from "./GyufasDobozView.js";
class GyufasDobozokView {
    #lista = [];
    constructor(lista) {
        this.#lista = lista;
        this.#init();
       
    }
    #init() {
        this.#lista.forEach((element,index) => {
            let szuloElem= $(`.gyufasdobozok .lepes${element.lepesszam}`)
           
            new GyufasDobozView(element,index, szuloElem);
        });
    }
}
export default GyufasDobozokView;
/*
 let szuloElem2 = ".gyufasdobozok .lepes2";
let szuloElem4 = ".gyufasdobozok .lepes4";
let szuloElem6 = ".gyufasdobozok .lepes6";
let szuloElem= $(`.gyufasdobozok .lepes${this.#adat.lepesszam}`)
           
console.log(szuloElem) */