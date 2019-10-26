class ViewAssignments extends View {

    constructor(element) {
        super(element);
    }

    template(model, ul, ulSe, idCode) {
        let li = document.createElement('li');
        li.id = `atribuiCode-${model.id}`;
        li.className = 'componente-variavel-li d-flex justify-content-between align-items-center';

        let obj = document.createTextNode(`${model.name} <− ${model.value};`);
        li.appendChild(obj);

        if (ulSe) {
            ulSe.appendChild(li);
            this._addDeleteButton(li);
            super.codeAddIf(idCode, ulSe);
        } else {
            ul.appendChild(li);
            this._addDeleteButton(li);
            this._codeAdd(idCode, ul);
        }
    }

    _addDeleteButton(li) {
        let span = document.createElement('span');
        span.innerHTML = '<span class="badge badge-primary badge-pill excluir" onclick="assignmentController.remove(event);">x</span>';

        li.appendChild(span);
    }

    _codeAdd(idCode, ul) {
        let code = document.querySelector(`#${idCode}`);

        $(`#${idCode}`).empty();

        let arrayLi = ul.children;

        if (arrayLi.length !== 0) {
            code.innerHTML = '<span class="comentario">//Atribuicoes de valores</span>';
        }

        if (arrayLi.length === 0) {
            return;
        }

        for (let item of arrayLi) {
            let text = ($(item).text());
            let variable = text.substr(0, (text.length - 1));

            let span = document.createElement('span');
            span.id = `${item.id}-log`;
            span.innerHTML = (`${variable}`);

            code.appendChild(span);
        }
    }

    _codeRemove(element, ul) {
        let amount = ul.children.length;

        if (amount === 0) {
            let node = ul.parentNode;
            node.parentNode.removeChild(node);
        }

        super.codeRemove(element, 'atribuiCode', amount);
    }

    _codeRemoveAll(list, li) {
        super.codeRemoveAll(list, li, 'atribuiCode');
    }
}