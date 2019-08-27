class Exiba {

    constructor(saida, id, idCode) {

        this._saida = saida;
        this._id = id;
        this._idCode = idCode;
        Object.freeze(this);
    }

    get saida() {

        return this._saida;
    }


    get id() {

        return this._id;
    }

    get idCode() {

        return this._idCode;
    }
}