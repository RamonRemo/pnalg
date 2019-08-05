class Leia {

    constructor(nome, tipo) {

        this._nome = nome;
        this._tipo = tipo;
        Object.freeze(this);
    }

    get nome() {

        return this._nome;
    }

    get tipo() {

        return this._tipo;
    }
}