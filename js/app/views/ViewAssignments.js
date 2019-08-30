class ViewAssignments extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model, ul, ulSe, idCode) {

        let li = document.createElement('li');
        li.id = `atribuiCode-${model.id}`;
        li.className = 'componente-variavel-li d-flex justify-content-between align-items-center';

        let obj = document.createTextNode(`${model.name} <− ${model.value};`);
        li.appendChild(obj);

        if (ulSe) {
            ulSe.appendChild(li);
            this._addRemovedor(li);
            super.consoleAddSe(idCode, ulSe);
        } else {
            ul.appendChild(li);
            this._addRemovedor(li);
            this._consoleAdd(idCode, ul);
        }
    }

    _consoleAdd(idCode, ul) {
        let code = document.querySelector(`#${idCode}`);

        $(`#${idCode}`).empty();

        let arrayLi = ul.children;

        if (arrayLi.length != 0) {
            code.innerHTML = '<span class="comentario">//Atribuicoes de valores</span>';
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

        for (let codes of code) {
            if (codes.id == `atribuiCode-${id}`) {
                codes.remove();
            }
        }
    }

    _consoleRemoveAll(list, li) {
        let array = Object.values(list);

        array.forEach(objetos => {
            objetos.forEach(element => {

                if (li == null) {
                    return;
                }

                if (`atribuiCode-${element.id}` == li.id) {
                    let code = element.idCode;
                    $(`#${code}`).empty();
                }
            });
        });
    }

    _addRemovedor(li) {
        let span = document.createElement('span');
        span.innerHTML = '<span class="badge badge-primary badge-pill" onclick="assignmentsController.remove(event);">x</span>';

        li.appendChild(span);
    }

}