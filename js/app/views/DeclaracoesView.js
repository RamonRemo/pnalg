class DeclaracoesView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model, list) {

        let ul = document.querySelector('#declaracoes');

        let li = document.createElement("li");
        li.id = model.id;
        li.className = "var componente-variavel-li d-flex justify-content-between align-items-center";

        let obj = document.createTextNode(`${model.tipo} : ${model.nome};`);
        li.appendChild(obj);
        ul.appendChild(li);

        this._addRemovedor(li);
        this.atualizaOptions(list);
    }

    atualizaOptions(list) {

        View.updateOptions(list, 'atribuicao-nome');
        View.updateOptions(list, 'exiba-variavel');
        View.updateOptions(list, 'leia-variavel');
        View.updateOptions(list, 'se-variavel');
        View.updateOptions(list, 'se-variavel-secundaria');
    }

    _addRemovedor(li) {

        let div = document.createElement('div');
        div.innerHTML = '<span class="badge badge-primary badge-pill" onclick="declaracoesController.remove(event);">x</span>';
        li.appendChild(div);
    }
}