class Atribuicoes {

    constructor(nome, tipo, valor, id) {

        this._nome = nome;
        this._tipo = tipo;
        this._valor = valor;
        this._id = id;
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
}