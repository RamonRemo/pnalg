class Leia {

    constructor(nome, tipo, id) {

        this._nome = nome;
        this._tipo = tipo;
        this._id = id;
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
}