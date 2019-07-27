class ListDeclaracoes {

    constructor() {
        this._declaracoes = [];
    }

    add(declaracao) {

        this._declaracoes.push(declaracao);
    }

    get declaracoes() {

        return [].concat(this._declaracoes);
    }

    apaga() {

        return [].concat(this._declaracoes[this._declaracoes--]);
    }
}