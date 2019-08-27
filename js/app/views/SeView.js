class SeView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model, ul, idCode) {

        let li = document.createElement('li');
        li.id = model.id;
        li.className = 'componente-variavel-li d-flex justify-content-between align-items-center';

        let obj = document.createTextNode(`se (${model.var1_nome} ${model.relacionais} ${model.var2_nome}) entao`);
        li.appendChild(obj);
        ul.appendChild(li);

        this._addRemovedor(li);
        this._consoleAdd(idCode, ul);
    }

    _consoleAdd(idCode, ul) {

        let code = document.querySelector(`#${idCode}`);

        $(`#${idCode}`).empty();

        let arrayLi = ul.children;

        if (arrayLi.length != 0) {

            code.innerHTML = '<span class="comentario">//Desvio Condicional</span>';
        }

        if (arrayLi.length == 0) {

            return;
        }

        for (let item of arrayLi) {
            let texto = ($(item).text());
            let variavel = texto.substr(0, (texto.length - 1));

            let span = document.createElement('span');
            span.id = item.id;
            span.innerHTML = (`${variavel}`);

            code.appendChild(span);
        }
    }

    _consoleRemove(element) {

        let idCode = element.idCode;
        let id = element.id;
        let code = $(`#${idCode}`).find('span');

        for (let item of code) {
            if (item.id == id) {

                item.remove();
            }
        }
    }

    _addRemovedor(li) {

        let div = document.createElement('div');
        div.innerHTML = '<span class="badge badge-primary badge-pill" onclick="seController.remove(event);">x</span>';
        li.appendChild(div);
    }
}