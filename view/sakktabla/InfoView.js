class InfoView {
    constructor(szuloElem) {
        szuloElem.append(
            `<p class='sorszam'>Az aktuális játék száma: <span>0</span></p>
            <p class='kovjatekos'>A következő játékos: <span>♙</span></p>
            <p class='nyertes'>A nyertes: <span>Még nincs nyertes</span></p>`
        );
        this.sorszamElem = $(".sorszam span");
        this.kovjatekosElem = $(".kovjatekos span");
        this.nyertesElem = $(".nyertes span");
    }
    setKovJatekosElem(ertek) {
        this.kovjatekosElem.text(ertek);
        //this.kovJatekosElem.html(ertek);
    }
    setSorszamElem(ertek) {
        this.sorszamElem.text(ertek);
        //this.kovJatekosElem.html(ertek);
    }
    setNyertesElem(ertek) {
        this.nyertesElem.text(ertek);
        //this.kovJatekosElem.html(ertek);
    }
}

export default InfoView;
