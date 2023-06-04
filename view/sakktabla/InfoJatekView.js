class InfoJatekView {
    #gyozelmekallasaElem 
    #sorszamElem
    constructor(szuloElem,jatekszama) {

        szuloElem.html(
            `<p class='sorszam'>Az aktuális játék száma: <span>${jatekszama}.</span></p>
           <p style="font-size:10pt">Eddigi győzelmek</p>
            <div class="gyozelmekallasa"><span style="color:whitesmoke">SÖTÉT</span><span>VILÁGOS</span></div>
            `
        );
        this.#sorszamElem = $(".sorszam span");
       
        this.#gyozelmekallasaElem = $(".gyozelmekallasa");
      
      
    }
    setGyozelemAllitas(fekete, feher) {
        console.log(fekete, feher);
        let feketeSzazalek = (fekete * 100) / (fekete + feher) + "%";
        let feherSzazalek = (feher * 100) / (fekete + feher) + "%";
        this.#gyozelmekallasaElem.css(
            "grid-template-columns",
            `${feketeSzazalek} ${feherSzazalek}`
        );
    }
   
    setSorszamElem(ertek) {
        this.#sorszamElem.text(ertek);
     
    }
   
}

export default InfoJatekView;
