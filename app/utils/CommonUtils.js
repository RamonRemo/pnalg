class CommonUtils {

    constructor() {
        throw new Error('CommonUtils não pode ser instanciada');
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
                if (element.id == CommonUtils.getNumber(id)) {
                    variable = element;
                }
            });
        });

        return variable;
    }

    static replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    static getNumber(string) {
        let numsStr = string.toString().replace(/[^0-9]/g, '');
        return parseInt(numsStr);
    }

    static arithmeticOperation(x, y, operation) {
        switch (operation) {
            case 'sum':
                return x + y;

            case 'subtraction':
                return x - y;

            case 'multiplication':
                return x * y;

            default:
                return x / y;
        }
    }

    static regexTest(str) {
        const declare = /declareCode-\d-log/;
        const leia = /leiaCode-\d-log/;
        const exiba = /exibaCode-\d-log/;
        const atribuicao = /atribuiCode-\d-log/;
        const se = /ifCode-\d-log/;
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

    static regexTestPetri(str) {
        const declare = /declareCode-\d-log-petri/;
        const leia = /leiaCode-\d-log-petri/;
        const exiba = /exibaCode-\d-log-petri/;
        const atribuicao = /atribuiCode-\d-log-petri/;
        const se = /ifCode-\d-log-petri/;
        const fimse = /fimse-petri/;

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

        if (fimse.test(str)) {
            return 'FIMSE';
        }

        return null;
    }

    static sleep = async ms => {
        await this._control(ms);
    }

    static _control = ms => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}