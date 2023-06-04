class JatekModell {
    #feherNyer;
    #feketeNyer;
    #jatekSzama;
    constructor() {
        this.#jatekSzama = 1;
        console.log(localStorage.getItem("gyozelmek"));
        if (localStorage.getItem("gyozelmek") !== null) {
            const obj = JSON.parse(localStorage.getItem("gyozelmek"));
            this.#feherNyer = obj.feherNyer;
            this.#feketeNyer = obj.feketeNyer;
        } else {
            this.#feherNyer = 0;
            this.#feketeNyer = 0;
        }
    }
    kovJatek() {
        this.#jatekSzama++;
    }
    get jatekSzama() {
        return this.#jatekSzama;
    }
    nyeresSzamBeallit(gyoztes) {
        if (gyoztes == "♙") {
            this.#feherNyer++;
        } else {
            this.#feketeNyer++;
        }
        this.#localStoregebaMent();
    }
    #localStoregebaMent() {
        localStorage.setItem("gyozelmek",JSON.stringify( {
            feherNyer: this.#feherNyer,
            feketeNyer: this.#feketeNyer,
        }));
    }
    get feherNyer() {
        return this.#feherNyer;
    }
    get feketeNyer() {
        return this.#feketeNyer;
    }
}
export default JatekModell;
