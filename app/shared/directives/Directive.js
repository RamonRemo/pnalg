class Directive {

    constructor(element) {
        this._element = element;
    }

    template() {
        throw new Error('O método template deve ser implementado');
    }

    update(model, list, ul, ulSe, idCode) {
        this.template(model, list, ul, ulSe, idCode);
    }

    updateOptions(list, field) {
        $(`#${field}`).empty();

        let select = document.getElementById(field);
        select.innerHTML = '<option selected>Escolher...</option>';

        let array = Object.values(list);

        if (array[0].length === 0) {
            return;
        }

        array.forEach(objetos => {
            objetos.forEach(element => {
                let option = document.createElement('option');

                option.text = element.name
                option.value = element.type;

                select.appendChild(option);
            });
        });
    }

    codeAddIf(idCode, ul) {
        let code = document.querySelector(`#${idCode}`);

        $(`#${idCode}`).empty();

        let arrayLi = ul.children;

        if (arrayLi.length != 0) {
            code.innerHTML = '<span class="comment">//Desvio Condicional</span>';
        }

        if (arrayLi.length === 0) {
            return;
        }

        let index = 0;

        for (let element of arrayLi) {
            let text = ($(element).text());
            let variable = text.substr(0, (text.length - 1));

            let span = document.createElement('span');
            span.id = `${element.id}-log`;

            if (index > 0) {
                span.className = 'identify-component-if';
            }

            span.innerHTML = (`${variable}`);

            code.appendChild(span);
            index++;
        }

        let span = document.createElement('span');
        span.innerHTML = ('<span>FIMSE</span>');
        span.className = 'end-if';
        span.id = 'end-if';

        code.appendChild(span);
    }

    codeRemove(element, name, amount) {
        let idCode = element.idCode;
        let id = `${element.id}-log`;
        let codes = $(`#${idCode}`).find('span');

        if (amount === 0) {
            $(`#${idCode}`).remove();
        }

        for (let code of codes) {
            if (code.id === `${name}-${id}`) {
                code.remove();
            }
        }
    }

    codeRemoveAll(list, li, name) {
        let array = Object.values(list);

        array.forEach(objetos => {
            objetos.forEach(element => {

                if (li == null) {
                    return;
                }

                if (`${name}-${element.id}` === li.id) {
                    let code = element.idCode;
                    $(`#${code}`).remove();
                }
            });
        });
    }
}