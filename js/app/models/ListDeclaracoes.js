class ListDeclaracoes {

    constructor() {
        this._declaracoes = [];
    }

    add(declaracao) {

        this._declaracoes.push(declaracao);
    }

    apaga(id) {

        if (id > -1) {

            return this._declaracoes.splice(id, 1);
        }
    }

    get declaracoes() {

        return [].concat(this._declaracoes);
    }
}