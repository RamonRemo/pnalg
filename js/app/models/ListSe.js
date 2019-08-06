class ListSe {

    constructor() {
        this._se = [];
    }

    add(se) {

        this._se.push(se);
    }

    apaga(id) {

        if (id > -1) {

            return this._se.splice(id, 1);
        }
    }

    get se() {

        return [].concat(this._se);
    }
}