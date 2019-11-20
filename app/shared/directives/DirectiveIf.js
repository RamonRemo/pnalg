class DirectiveIf extends Directive {

    constructor(element) {
        super(element);
    }

    template(model, ul, idCode) {
        let li = document.createElement('li');
        li.id = `if-code-${model.id}`;
        li.className = 'component-variable-li d-flex justify-content-between align-items-center';

        let obj = document.createTextNode(`SE (${model.var1_name} ${model.conditional} ${model.var2_name}) ENTAO`);
        li.appendChild(obj);
        ul.appendChild(li);

        this._addDeleteButton(li);
        this._codeAdd(idCode, ul);
    }

    _addDeleteButton(li) {
        let div = document.createElement('div');
        div.innerHTML = '<span class="badge badge-primary badge-pill delete" onclick="ifController.remove(event);">x</span>';

        li.appendChild(div);
    }

    _codeAdd(idCode, ul) {
        let code = document.querySelector(`#${idCode}`);

        $(`#${idCode}`).empty();

        let arrayLi = ul.children;

        if (arrayLi.length !== 0) {
            code.innerHTML = '<span class="comment">//Desvio Condicional</span>';
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

    _codeRemove(element) {
        let idCode = element.idCode;
        let code = $(`#${idCode}`).find('span');

        code.remove();
    }
}