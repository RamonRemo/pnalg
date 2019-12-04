class ListPetris {

    constructor() {
        this._petri = new Petris(50, 0, 0, false, true, 0);
    }

    add(petri) {
        this._petri.splice(0, 1);
        this._petri.push(petri);
    }

    get petri() {
        return [].concat(this._petri);
    }
}