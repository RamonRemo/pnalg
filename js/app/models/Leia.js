class Leia {

    constructor(nome, tipo, id, idCode) {

        this._nome = nome;
        this._tipo = tipo;
        this._id = id;
        this._idCode = idCode;
        Object.freeze(this);
    }

    get nome() {

        return this._nome;
    }

    get tipo() {

        return this._tipo;
    }

    get id() {

        return this._id;
    }

    get idCode() {

        return this._idCode;
    }
}