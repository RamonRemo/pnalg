class Atribuicoes {
    constructor(nome, tipo, valor) {

        this._nome = nome;
        this._tipo = tipo;
        this._valor = valor;
        Object.freeze(this);
    }
}