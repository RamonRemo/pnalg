class ListAtribuicoes {

    constructor() {
        this._atribuicoes = [];
    }

    add(atribuicao) {

        this._atribuicoes.push(atribuicao);
    }

    apaga(remover) {

        var index = this._atribuicoes.indexOf(remover);

        if (index > -1) {

            return this._atribuicoes.splice(index, 1);
        }
    }

    get declaracoes() {

        return [].concat(this._atribuicoes);
    }

}