class DeclaracoesView extends View {

    constructor(elemento, el) {

        super(elemento, el);
    }

    template(model, list) {
        
        let ul = document.querySelector('#declaracoes');;

        let li = document.createElement("li");
        li.id = "variavel";
        li.className = "componente-variavel-li d-flex justify-content-between align-items-center";

        let obj = document.createTextNode(`${model.tipo} : ${model.nome};`);
        li.appendChild(obj);
        ul.appendChild(li);

        this._addRemovedor(li);
        View.updateOptions(list, 'atribuicao-nome');
    }

    _addRemovedor(li) {

        let span = document.createElement('span');
        span.innerHTML = '<span class="badge badge-primary badge-pill" onclick="declaracoesController.remove(event);">x</span>';
        li.appendChild(span);
    }
}