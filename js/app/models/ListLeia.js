class ListLeia {

    constructor() {
        this._leia = [];
    }

    add(leia) {

        this._leia.push(leia);
    }

    apaga(remover) {

        var index = this._leia.indexOf(remover);

        if (index > -1) {

            return this._leia.splice(index, 1);
        }
    }

    get leia() {

        return [].concat(this._leia);
    }
}