class InfoView {
    constructor(szuloElem) {
        szuloElem.append(
            `<p class='sorszam'>Az aktuális játék száma: <span>1.</span></p>
            <p class='kovjatekos'>A következő játékos: ♙</p>
            <div><button class="ujjatek">Új játék</button></div>
            `
        );
        this.sorszamElem = $(".sorszam span");
        this.kovjatekosElem = $(".kovjatekos");
    }
    setKovJatekosElem(ertek) {
        this.kovjatekosElem.text(ertek);
        //this.kovJatekosElem.html(ertek);
    }
    setSorszamElem(ertek) {
        this.sorszamElem.text(ertek);
        //this.kovJatekosElem.html(ertek);
    }
}

export default InfoView;
