class InfoView {
    constructor(szuloElem) {
     
        szuloElem.html(
            `
            <p class='kovjatekos'>A következő játékos: ♙</p>
            <div><button class="ujjatek">Új játék</button></div>
          
            `
        );
       
        this.kovjatekosElem = $(".kovjatekos");
     
    
        this.ujjatekElem = $(".ujjatek");
        this.ujjatekElem.hide();
        this.ujjatekElem.on("click", () => {
            this.#trigger("ujjatek");
        });
    }
  
    setKovJatekosElem(ertek) {
        this.kovjatekosElem.text(ertek);
        //this.kovJatekosElem.html(ertek);
    }
   
    #trigger(esemenyNev) {
        let esemeny = new Event(esemenyNev);
        window.dispatchEvent(esemeny); //a főablakhoz adom az eseményt, ezt tudom majd a script.js-ben elkapni.
    }
}

export default InfoView;
