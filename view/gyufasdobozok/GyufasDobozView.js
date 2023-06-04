import Elem from "../Elem.js";

class GyufasDobozView {
    #allapotLista = [];
    #adat = [];
    #lepesekLista = [];
    #szinLista = ["red", "orange", "blue", "purple"];
    constructor(adat) {
        this.#allapotLista = adat.jatekter;
      
        this.szuloElem = $(`.gyufasdobozok .lepes${adat.lepesszam}`);
        this.#adat = adat;
        this.#lepesekLista = adat.lepesek;
        this.#init();
    }

    #init() {
        this.szuloElem.append(
            "<div class='tabla'><div class='doboz'></div><div class='nyilak'></div></div>"
        );
        this.dobozElem = this.szuloElem
            .children(".tabla:last-child")
            .children(".doboz");
        this.nyilElem = this.szuloElem
            .children(".tabla:last-child")
            .children(".nyilak");
        //tábla megjelenítése
        this.#allapotLista.forEach((element, index) => {
            this.dobozElem.append(`<div class="delem">${element}</div>`);
        });
        this.#lepesekInit();
    }
    #lepesekInit() {
        //nyilak megjelenítése
        this.elem = this.dobozElem.children(".elem:first-child");

        let szelessegPX = this.dobozElem.css("width");

        let szelesseg = szelessegPX.slice(0, szelessegPX.length - 2) / 3;

        this.#lepesekLista.forEach((element, index) => {
            let sor = Math.floor(element[0] / 3);
            let oszlop = element[0] % 3;
            let top = szelesseg * sor;
            let left = szelesseg * oszlop + szelesseg / 2 + 5;
            let kulonbseg = element[1] - element[0] - 3;

            let fok =
                Math.abs(element[1] - element[0]) == 3
                    ? 90
                    : 90 - 45 * kulonbseg;
            this.nyilElem.append(
                `<div class=nyil style=color:${
                    this.#szinLista[index]
                };top:${top}px;left:${left}px;rotate:${fok}deg;width:${szelesseg}px;font-size:${szelesseg}px;>→</div>`
            );
        });
    }
}
export default GyufasDobozView;
