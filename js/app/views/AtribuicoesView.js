class AtribuicoesView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model, list) {
        let $ = document.querySelector.bind(document);
        let ul = $('#atribuicoes');

        let li = document.createElement('li');
        li.id = model.id;
        li.className = 'componente-variavel-li d-flex justify-content-between align-items-center';

        let obj = document.createTextNode(`${model.nome} <− ${model.valor};`);
        li.appendChild(obj);
        ul.appendChild(li);

        this._addRemovedor(li);
        this.console(list);
    }

    console(list) {

        let code = document.querySelector('#code-atr');

        $('#code-atr').empty();

        code.innerHTML = '<span id="comentario">//Atribuicoes</span>';

        let array = Object.values(list);

        if (array[0].length == 0) {

            return;
        }

        array.forEach(objetos => {
            objetos.forEach(element => {

                let span = document.createElement('span');

                span.innerHTML = (`${element._nome} <− ${element._valor};`);

                code.appendChild(span);
            });
        });
    }

    _addRemovedor(li) {

        let span = document.createElement('span');
        span.innerHTML = '<span class="badge badge-primary badge-pill" onclick="atribuicoesController.remove(event);">x</span>';
        li.appendChild(span);
    }

}