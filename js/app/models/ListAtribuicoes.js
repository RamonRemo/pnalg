class ListAtribuicoes {

    constructor() {
        this._atribuicoes = [];
    }

    add(atribuicao) {

        this._atribuicoes.push(atribuicao);
    }

    apaga(id) {

        if (id > -1) {

            return this._atribuicoes.splice(id, 1);
        }
    }

    get declaracoes() {

        return [].concat(this._atribuicoes);
    }

}