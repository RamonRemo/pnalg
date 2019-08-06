class ListLeia {

    constructor() {
        this._leia = [];
    }

    add(leia) {

        this._leia.push(leia);
    }

    apaga(id) {

        if (id > -1) {

            return this._leia.splice(id, 1);
        }
    }

    get leia() {

        return [].concat(this._leia);
    }
}