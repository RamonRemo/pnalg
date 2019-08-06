class ListExiba {

    constructor() {
        this._exiba = [];
    }

    add(exiba) {

        this._exiba.push(exiba);
    }

    apaga(id) {

        if (id > -1) {

            return this._exiba.splice(id, 1);
        }
    }

    get exiba() {

        return [].concat(this._exiba);
    }
}