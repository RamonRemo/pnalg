class ListDeclaracoes {

    constructor() {
        this._declaracoes = [];
    }

    add(declaracao) {

        this._declaracoes.push(declaracao);
    }

    apaga(remover) {

        var index = this._declaracoes.indexOf(remover);

        if (index > -1) {

            return this._declaracoes.splice(index, 1);
        }
    }

    get declaracoes() {

        return [].concat(this._declaracoes);
    }

}