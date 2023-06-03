class Elem {
    #adat;
   
    constructor(adat, dataId, szuloElem) {
        this.#adat = adat;

        this.dataId = dataId;
        szuloElem.append(`<div class="elem" id=${dataId}>${adat}</div>`);
        this.elem = $(".elem:last-child");
        if (this.#adat === "♙") {
            this.setAllapot(false);
        } else {
            this.setAllapot(true);
        }
        this.szinBeallit();
    }
    setErtek(adat) {
        this.elem.html(adat);
        this.#adat = adat;
    }
    setAllapot(ertek) {
        this.allapot = ertek; //true, ha kattinthato, false ha nem
    }
    szinBeallit() {
        if (this.dataId % 2 == 0) {
            this.elem.css({
                "background-color": "gray",
                "cursor": "pointer",
                "border":"none"
            });
            
        } else {
            this.elem.css({
                "background-color": "white",
                "cursor": "pointer",
                "border":"none"
            });
          
        }
    }
}

export default Elem;
