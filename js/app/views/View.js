class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        throw new Error('O método template deve ser implementado');
    }

    update(model, list, ul, ulSe, idCode) {
        this.template(model, list, ul, ulSe, idCode);
    }

    updateOptions(list, campo) {

        $(`#${campo}`).empty();

        var select = document.getElementById(campo);

        select.innerHTML = '<option selected>Escolher...</option>';

        let array = Object.values(list);

        if (array[0].length == 0) {

            return;
        }


        array.forEach(objetos => {
            objetos.forEach(element => {

                let option = document.createElement('option');

                option.text = element._nome
                option.value = element._tipo;

                select.appendChild(option);
            });
        });
    }

    consoleAddSe(idCode, ul) {

        let code = document.querySelector(`#${idCode}`);

        $(`#${idCode}`).empty();

        let arrayLi = ul.children;
        console.log(arrayLi);
        if (arrayLi.length != 0) {

            code.innerHTML = '<span class="comentario">//Desvio Condicional</span>';
        }

        if (arrayLi.length == 0) {

            return;
        }

        let index = 0;
        for (let element of arrayLi) {
            let texto = ($(element).text());

            let variavel = texto.substr(0, (texto.length - 1));

            let span = document.createElement('span');
            span.id = element.id;

            if (index > 0) {
                span.className = 'identeSe';
            }

            span.innerHTML = (`${variavel}`);

            code.appendChild(span);
            index++;
        }

        let span = document.createElement('span');
        span.innerHTML = ('<span>fimse</span>');
        span.className = 'fimse';
        code.appendChild(span);
    }
}