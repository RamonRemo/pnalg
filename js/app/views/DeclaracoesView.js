class DeclaracoesView extends View {

    constructor(elemento) {

        super(elemento);
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
        View.updateOptions(list, 'exiba-variavel');
        View.updateOptions(list, 'leia-variavel');
    }

    _addRemovedor(li) {

        let div = document.createElement('div');
        div.innerHTML = '<span class="badge badge-primary badge-pill" onclick="declaracoesController.remove(event);">x</span>';
        li.appendChild(div);
    }
}