class Utils {

    constructor() {

        throw new Error('Utils não pode ser instanciada');
    }

    static focus(id, campo) {

        $(`#${id}`).on('shown.bs.modal', function () {
            $(`#${campo}`).focus();
        });
    }

    static getElement(list, id) {

        let array = Object.values(list);
        let variavel;

        array.forEach(objetos => {
            objetos.forEach(element => {

                if (element.id == id) {

                    variavel = element;
                }
            });
        });

        return variavel;
    }
}