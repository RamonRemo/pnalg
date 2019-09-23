class Utils {

    constructor() {
        throw new Error('Utils não pode ser instanciada');
    }

    static focus(id, campo) {
        $(`#${id}`).on('shown.bs.modal', function() {
            $(`#${campo}`).focus();
        });
    }

    static getElement(list, id) {
        let array = Object.values(list);
        let variable;

        array.forEach(objetos => {
            objetos.forEach(element => {
                if (element.id == id) {
                    variable = element;
                }
            });
        });

        return variable;
    }

    static getNumber(string) {
        var numsStr = string.replace(/[^0-9]/g, '');
        return parseInt(numsStr);
    }

    static regexTest(str) {
        const declare = /declareCode-\d/;
        const leia = /leiaCode-\d/;
        const exiba = /exibaCode-\d/;
        const atribuicao = /atribuiCode-\d/;
        const se = /\d/;
        const codeSe = /fimse/;

        if (declare.test(str)) {
            return 'DECLARE';
        }

        if (leia.test(str)) {
            return 'LEIA';
        }

        if (exiba.test(str)) {
            return 'EXIBA';
        }

        if (atribuicao.test(str)) {
            return 'ATRIBUICAO';
        }

        if (se.test(str)) {
            return 'SE';
        }

        if (codeSe.test(str)) {
            return 'FIMSE';
        }

        return null;
    }
}