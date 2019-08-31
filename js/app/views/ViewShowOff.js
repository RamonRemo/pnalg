class ViewShowOff extends View {

    constructor(element) {
        super(element);
    }

    template(model, ul, ulSe, idCode) {
        let li = document.createElement('li');
        li.id = `exibaCode-${model.id}`;
        li.className = 'componente-variavel-li d-flex justify-content-between align-items-center';

        let obj = document.createTextNode(`escreval(${model.output});`);
        li.appendChild(obj);

        if (ulSe) {
            ulSe.appendChild(li);
            this._addDeleteButton(li);
            super.consoleAddSe(idCode, ulSe);
        } else {
            ul.appendChild(li);
            this._addDeleteButton(li);
            this._codeAdd(idCode, ul);
        }
    }

    _addDeleteButton(li) {
        let div = document.createElement('div');
        div.innerHTML = '<span class="badge badge-primary badge-pill" onclick="showOffController.remove(event);">x</span>';

        li.appendChild(div);
    }

    _codeAdd(idCode, ul) {
        let code = document.querySelector(`#${idCode}`);

        $(`#${idCode}`).empty();

        let arrayLi = ul.children;

        if (arrayLi.length != 0) {
            code.innerHTML = '<span class="comentario">//Exibicao</span>';
        }

        if (arrayLi.length == 0) {
            return;
        }

        for (let item of arrayLi) {
            let text = ($(item).text());
            let variable = text.substr(0, (text.length - 1));

            let span = document.createElement('span');
            span.id = item.id;
            span.innerHTML = (`${variable}`);

            code.appendChild(span);
        }
    }

    _codeRemove(element) {
        let idCode = element.idCode;
        let id = element.id;
        let code = $(`#${idCode}`).find('span');

        for (let codes of code) {
            if (codes.id == `exibaCode-${id}`) {
                codes.remove();
            }
        }
    }

    _codeRemoveAll(list, li) {
        let array = Object.values(list);

        array.forEach(objetos => {
            objetos.forEach(element => {

                if (li == null) {
                    return;
                }

                if (`exibaCode-${element.id}` == li.id) {
                    let code = element.idCode;
                    $(`#${code}`).empty();
                }
            });
        });
    }
}