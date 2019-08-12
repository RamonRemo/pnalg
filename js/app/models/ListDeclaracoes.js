class ListDeclaracoes {

    constructor() {
        this._declaracoes = [];
    }

    add(declaracao) {

        this._declaracoes.push(declaracao);
    }

    apaga(id) {
        
        let index;

        if (id > -1) {

            this._declaracoes.forEach(element => {

                if (element.id == id) {

                    index = this._declaracoes.indexOf(element);
                }
            });

            return this._declaracoes.splice(index, 1);
        }
    }

    get declaracoes() {

        return [].concat(this._declaracoes);
    }
}