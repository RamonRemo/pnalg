class Utils {

    constructor() {

        throw new Error('Utils não pode ser instanciada');
    }

    static focus(id, campo) {

        $(`#${id}`).on('shown.bs.modal', function () {
            $(`#${campo}`).focus();
        });
    }
}