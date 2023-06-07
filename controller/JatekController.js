import JatekterController from "./JatekterController.js";
import GyufasDobozController from "./GyufasDobozController.js";
import InfoJatekView from "../view/info/InfoJatekView.js";
import JatekModell from "../model/JatekModell.js";
import InfoPanel from "../view/info/InfoPanel.js";
const tartalom = [
    "A Hexapwn játékot egy 3x3-as sakktáblán játszák,  3-3 gyaloggal. A cél az, hogy eljuttassuk legalább egy saját gyalogunkat a tábla másik oldalára, vagy megakadályozzuk az ellenfelet abban, hogy lépjen. A gyalog a sakkban megszokott módon mozog: előre egyet, illetve oldalirányban tudja ütni az ellenség bábuját.",

    "A játék alkalmas arra, hogy szemléltessünk vele egy mesterséges intelligencia tanulási technikát.",
    "A mesterséges intelligencia működésének szimulációját nem csak számítógéppel lehet megvalósítani, hanem akár gyufásdobozokkal is, ahogy az alábbi videóból is kiderül: <a href='https://youtu.be/1xsY9fPAayw' target=_blank>Öntanuló automata gyufásdobozokból</a>",

    "A videóban bemutatott stratégiával tanul az én automatám is. A tanulási folyamat lényege, hogy a gép minden játék után okul a hibáiból, és elveti azokat a lépéseket, melyek vereséghez vezettek. Így sok játék után egyre nehezebb megverni, egyre többször nyer.",

    'Az itt kipróbálható játékban fehér kezd (a játékos), majd a gép automatikusan választ egyet a számára lehetséges lépések közül. A gép minden páros lépésben következik. A játék lehetséges állásait mutatják a játéktér mellett lévő "gyufásdobozok". Az első oszlopban nyomon követhetjük a  tanulási folyamatot, míg a második oszlopban már a mindig nyerő "okos" gép stratégiáját tanulmányozhatjuk.',
];

class JatekController {
    constructor() {
        this.infoJatekView = new InfoJatekView($(".info2"), 1);
        this.jatekModell = new JatekModell();
        this.#init();
        this.info = new InfoPanel(
            "HexaPawn játék leírása",
            tartalom,
            $("body")
        );
    }
    #init() {
        $(window).off();
        this.infoJatekView.setSorszamElem(this.jatekModell.jatekSzama);
        new JatekterController();
        new GyufasDobozController();
        this.#nyeresBeallit();
        $(window).on("jatekVege", (event) => {
            this.jatekModell.nyeresSzamBeallit(event.detail);
            this.#nyeresBeallit();
        });
        $(window).on("ujjatek", (event) => {
            this.jatekModell.kovJatek();
            this.#init();
        });
    }
    #nyeresBeallit() {
        this.infoJatekView.setGyozelemAllitas(
            this.jatekModell.feketeNyer,
            this.jatekModell.feherNyer
        );
    }
}
export default JatekController;
