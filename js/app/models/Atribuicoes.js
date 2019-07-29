class Atribuicoes {
    constructor(nome, tipo, valor) {

        this._nome = nome;
        this._tipo = tipo;
        this._valor = valor;
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
}