class AtribuicoesView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model, list, ul) {
        
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

        let code = document.querySelector('#code-atribuicao');

        $('#code-atribuicao').empty();

        if (list._atribuicoes.length != 0) {

            code.innerHTML = '<span id="comentario">//Atribuicoes de valores</span>';
        }

        let array = Object.values(list);

        if (array[0].length == 0) {

            return;
        }

        array.forEach(objetos => {
            objetos.forEach(element => {

                let span = document.createElement('span');

                span.innerHTML = (`${element.nome} <− ${element.valor};`);

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