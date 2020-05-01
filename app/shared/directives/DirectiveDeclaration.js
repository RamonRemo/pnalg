class DirectiveDeclaration extends Directive {

    constructor(element) {
        super(element);
    }

    template(model, list, ul, ulSe, idCode) {
        let li = document.createElement('li');
        li.id = `declaration-code-${model.id}`;
        li.className = 'var component-variable-li d-flex justify-content-between align-items-center';

        let obj = document.createTextNode(`${model.type} : ${model.name};`);
        li.appendChild(obj);

        if (ulSe) {
            this.updateOptions(list);
            ulSe.appendChild(li);
            this._addDeleteButton(li);
            super.codeAddIf(idCode, ulSe);

            return;
        }

        this.updateOptions(list);
        ul.appendChild(li);
        this._addDeleteButton(li);
        this._codeAdd(idCode, ul);
    }

    updateOptions(list) {
        super.updateOptions(list, 'assignment-name');
        super.updateOptions(list, 'display-variable');
        super.updateOptions(list, 'read-variable');
        super.updateOptions(list, 'variable-if');
        super.updateOptions(list, 'if-secondary-variable');
    }

    _addDeleteButton(li) {
        let div = document.createElement('div');
        div.innerHTML = '<span class="badge badge-primary badge-pill delete" onclick="declarationController.remove(event);">x</span>';

        li.appendChild(div);
    }

    _codeAdd(idCode, ul) {
        let code = document.querySelector(`#${idCode}`);

        $(`#${idCode}`).empty();

        let arrayLi = ul.children;

        if (arrayLi.length !== 0) {
            code.innerHTML = '<span class="comment">//Declaracoes de variáveis</span>';
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

        super.codeRemove(element, 'declaration-code', amount);
    }

    _codeRemoveAll(list, li) {
        super.codeRemoveAll(list, li, 'declaration-code');
    }
}