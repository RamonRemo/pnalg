class Declaracoes {

    constructor(nome, tipo) {

        this._nome = nome;
        this._tipo = tipo;
        Object.freeze(this);
    }
}