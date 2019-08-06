class SeView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model) {

        let ul = document.querySelector('#se');

        let li = document.createElement('li');
        li.id = model.id;
        li.className = 'componente-variavel-li d-flex justify-content-between align-items-center';

        let obj = document.createTextNode(`se ${model.var1_nome} ${model.relacionais} ${model.var2_nome} entao`);
        li.appendChild(obj);
        ul.appendChild(li);

        this._addRemovedor(li);
    }

    _addRemovedor(li) {

        let div = document.createElement('div');
        div.innerHTML = '<span class="badge badge-primary badge-pill" onclick="seController.remove(event);">x</span>';
        li.appendChild(div);
    }
}