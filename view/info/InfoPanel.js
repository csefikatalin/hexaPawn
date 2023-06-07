class InfoPanel {
    #tartalom = [];
    constructor(cim, tartalom, szuloElem) {
        let text = ` <div class="infopanel">
                        <button>❌</button>
                        <h3>${cim}</h3>
                       
                    `;

        tartalom.forEach((element) => {
            text += ` <p>${element}</p> `;
        });
        text += `</div>`;
        szuloElem.append(text);
        this.infoElem = $(".infopanel");
        this.bezarElem = $(".infopanel button");
        this.bezarElem.on("click", () => this.infoElem.hide());

        $(".infoGomb").on("click",()=>{
            this.infoElem.show()
        })
    }
}
export default InfoPanel;