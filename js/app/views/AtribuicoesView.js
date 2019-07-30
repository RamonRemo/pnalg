class AtribuicoesView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model) {
        let $ = document.querySelector.bind(document);
        let ul = $('#atribuicoes');

        let li = document.createElement("li");
        li.id = "variavel";
        li.className = "componente-variavel-li d-flex justify-content-between align-items-center";

        let obj = document.createTextNode(`${model.nome} <− ${model.valor};`);
        li.appendChild(obj);
        ul.appendChild(li);

        this._addRemovedor(li);
    }


    _addRemovedor(li) {

        let span = document.createElement('span');
        span.innerHTML = '<span class="badge badge-primary badge-pill" onclick="atribuicoesController.remove(event);">x</span>';
        li.appendChild(span);
    }
}