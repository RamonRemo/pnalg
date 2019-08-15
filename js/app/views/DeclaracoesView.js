class DeclaracoesView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model, list) {

        let ul = document.querySelector('#declaracoes');

        let li = document.createElement('li');
        li.id = model.id;
        li.className = 'var componente-variavel-li d-flex justify-content-between align-items-center';

        let obj = document.createTextNode(`${model.tipo} : ${model.nome};`);

        li.appendChild(obj);
        ul.appendChild(li);

        this._addRemovedor(li);
        this.atualizaOptions(list);

        this._console(list);
    }

    atualizaOptions(list) {

        View.updateOptions(list, 'atribuicao-nome');
        View.updateOptions(list, 'exiba-variavel');
        View.updateOptions(list, 'leia-variavel');
        View.updateOptions(list, 'se-variavel');
        View.updateOptions(list, 'se-variavel-secundaria');

        this._console(list);
    }

    _addRemovedor(li) {

        let div = document.createElement('div');
        div.innerHTML = '<span class="badge badge-primary badge-pill" onclick="declaracoesController.remove(event);">x</span>';
        li.appendChild(div);
    }

    _console(list) {

        let code = document.querySelector('#code-declaracao');

        $('#code-declaracao').empty();

        code.innerHTML = '<span id="comentario">//Declaracoes de variaveis</span>';

        let array = Object.values(list);

        if (array[0].length == 0) {

            return;
        }

        array.forEach(objetos => {
            objetos.forEach(element => {

                let span = document.createElement('span');

                span.innerHTML = (`${element.tipo} : ${element.nome};`);

                code.appendChild(span);
            });
        });
    }
}