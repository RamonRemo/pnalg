class ListAtribuicoes {

    constructor() {
        this._atribuicoes = [];
    }

    add(atribuicao) {

        this._atribuicoes.push(atribuicao);
    }

    apaga(id) {
        
        let index;

        if (id > -1) {

            this._atribuicoes.forEach(element => {

                if (element.id == id) {

                    index = this._atribuicoes.indexOf(element);
                }
            });

            return this._atribuicoes.splice(index, 1);
        }
    }


    get declaracoes() {

        return [].concat(this._atribuicoes);
    }
}