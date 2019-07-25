class ListAtribuicoes {

    constructor() {
        this._atribuicoes = [];
    }

    add(atribuicao) {

        this._atribuicoes.push(atribuicao);
    }

    get declaracoes() {

        return [].concat(this._atribuicoes);
    }
}