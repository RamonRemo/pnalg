class Views {

    static updateOptions(model, campo) {

        $(`#${campo}`).empty();

        var select = document.getElementById(campo);

        let array = Object.values(model);

        array.forEach(objetos => {
            objetos.forEach(element => {

                let option = document.createElement('option');

                option.text = element._nome
                option.value = element._tipo;

                select.appendChild(option);
            });
        });
    }

    static createRemoveLi(model, ul, li) {
        let span = document.createElement('span');
        span.className = 'badge badge-primary badge-pill';

        let excluir = document.createTextNode("x");

        span.addEventListener('click', function () {
            ul.removeChild(li);
        })

        span.appendChild(excluir);
        li.appendChild(span);
    }
}