class ExibaView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model) {

        let ul = document.querySelector("#exiba");

        let li = document.createElement("li");
        li.id = model.id;
        li.className = "componente-variavel-li d-flex justify-content-between align-items-center";

        let obj = document.createTextNode(`escreval(${model.saida});`);
        li.appendChild(obj);
        ul.appendChild(li);

        this._addRemovedor(li);
    }

    _addRemovedor(li) {

        let div = document.createElement('div');
        div.innerHTML = '<span class="badge badge-primary badge-pill" onclick="exibaController.remove(event);">x</span>';
        li.appendChild(div);
    }
}