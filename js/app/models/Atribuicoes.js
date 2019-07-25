class Atribuicoes {
    constructor(nome, tipo, valor) {

        this._nome = nome;
        this._tipo = tipo;
        this._valor = valor;
        Object.freeze(this);
    }

    printObject() {

        let $ = document.querySelector.bind(document);
        let ul = $('#atribuicoes');
        let li = document.createElement("li");
        li.id = "variavel";
        li.className = "componente-variavel-li";

        let obj = document.createTextNode(`${this._nome} <− ${this._valor};`);
        li.appendChild(obj);
        ul.appendChild(li);
    }
}