class View {

    constructor(elemento, el) {

        this._elemento = elemento;
        this._el = el;
    }

    template() {

        throw new Error('O método template deve ser implementado');
    }

    update(model, list) {
        this.template(model, list);
    }

    static updateOptions(list, campo) {

        $(`#${campo}`).empty();

        var select = document.getElementById(campo);

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
}