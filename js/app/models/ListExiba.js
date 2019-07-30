class ListExiba {

    constructor() {
        this._exiba = [];
    }

    add(exiba) {

        this._exiba.push(exiba);
    }

    apaga(remover) {

        var index = this._exiba.indexOf(remover);

        if (index > -1) {

            return this._exiba.splice(index, 1);
        }
    }

    get exiba() {

        return [].concat(this._exiba);
    }
}