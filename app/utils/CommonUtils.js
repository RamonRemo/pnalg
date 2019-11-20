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
        const declaration = /declaration-code-\d-log/;
        const read = /read-code-\d-log/;
        const showoff = /showoff-code-\d-log/;
        const assignment = /assignment-code-\d-log/;
        const _if = /if-code-\d-log/;
        const endif = /end-if/;

        if (declaration.test(str)) {
            return 'DECLARE';
        }

        if (read.test(str)) {
            return 'LEIA';
        }

        if (showoff.test(str)) {
            return 'EXIBA';
        }

        if (assignment.test(str)) {
            return 'ATRIBUICAO';
        }

        if (_if.test(str)) {
            return 'SE';
        }

        if (endif.test(str)) {
            return 'FIMSE';
        }

        return null;
    }

    static regexTestPetri(str) {
        const declaration = /declaration-code-\d-log-petri/;
        const read = /read-code-\d-log-petri/;
        const showoff = /showoff-code-\d-log-petri/;
        const assignment = /assignment-code-\d-log-petri/;
        const _if = /if-code-\d-log-petri/;
        const endif = /end-if-petri/;

        if (declaration.test(str)) {
            return 'DECLARE';
        }

        if (read.test(str)) {
            return 'LEIA';
        }

        if (showoff.test(str)) {
            return 'EXIBA';
        }

        if (assignment.test(str)) {
            return 'ATRIBUICAO';
        }

        if (_if.test(str)) {
            return 'SE';
        }

        if (endif.test(str)) {
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