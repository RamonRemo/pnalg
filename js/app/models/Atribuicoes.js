class Atribuicoes {

    constructor(nome, tipo, valor, id, idCode) {

        this._nome = nome;
        this._tipo = tipo;
        this._valor = valor;
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

    get valor() {

        return this._valor;
    }

    get id() {

        return this._id;
    }

    get idCode() {

        return this._idCode;
    }
}