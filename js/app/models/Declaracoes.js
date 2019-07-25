class Declaracoes {

    constructor(nome, tipo) {

        this._nome = nome;
        this._tipo = tipo;
        Object.freeze(this);
    }

    printObject() {

        let $ = document.querySelector.bind(document);
        let ul = $('#declaracoes');
        let li = document.createElement("li");
        li.id = "variavel";
        li.className = "componente-variavel-li";

        let obj = document.createTextNode(`${this._tipo} : ${this._nome};`);
        li.appendChild(obj);
        ul.appendChild(li);
    }

    insereEmAtribuicoesOptions() {

        let $ = document.querySelector.bind(document);
        let variaveisOptions = $('#atribuicao-nome');

        let options = document.createElement('option');

        options.text = this._nome;
        options.value = this._tipo;

        variaveisOptions.appendChild(options);
    }
}