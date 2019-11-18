class PetriStracking {

    constructor() {
        throw new Error('PetriStracking não pode ser instanciada');
    }

    static stracking(comand) {
        let text = document.querySelector(`#${comand}`).textContent;
        let results;

        switch (Utils.regexTestPetri(comand)) {
            case 'DECLARE':
                results = this._declaration(text);
                this._createTr(results.name, results.type, results.value);

                break;

            case 'ATRIBUICAO':
                results = this._assignment(text);
                this._appendTr(results.name, results.value);

                break;

            case 'LEIA':
                results = this._read(text);
                let value = this._reading(results);

                this._appendTr(results.name, value);

                break;

            default:
                return;
        }
    }

    static _declaration(text) {
        let variable = text.split(" : ");

        let name = variable[1].substr(0, (variable[1].length - 1));
        let type = variable[0].substr(0, (variable[0].length));
        let value = "null";

        return { name, type, value };
    }

    static _assignment(text) {
        let variable = text.split(' <− ');

        let name = variable[0].substr(0, (variable[0].length));
        let value = variable[1].substr(0, (variable[1].length - 1));

        return { name, value };
    }

    static _read(text) {
        let variable = text.split('(');

        let name = variable[1].substr(0, (variable[1].length - 2));

        let values = this._search(name);

        return values;
    }

    static _createTr(name, type, value) {
        let tr = document.createElement('tr');

        let td = `<tr>
                    <td>${name}</td>
                    <td>${type}</td>
                    <td>${value}</td>
                </tr>`

        tr.innerHTML = td;

        let tbody = document.querySelector('tbody');
        tbody.appendChild(tr);
    }

    static _appendTr(name, value) {
        let tds = document.getElementsByTagName("td");

        for (let i = 0; i < tds.length; i++) {
            if (tds[i].textContent === name) {
                tds[i + 2].textContent = value;
            }
        }
    }

    static _search(name) {
        let tds = document.getElementsByTagName("td");
        let type = null,
            value = null;

        for (let i = 0; i < tds.length; i++) {
            if (tds[i].textContent === name) {
                type = tds[i + 1].textContent;
                value = tds[i + 2].textContent;

                break;
            }
        }

        return { name, type, value };
    }

    static _reading(results) {
        let value;

        switch (results.type) {
            case 'inteiro':
                while (!value) {
                    value = Number(window.prompt("Digite um valor do tipo real:", ""));
                }
                break;

            case 'real':
                while (!value) {
                    value = Number(window.prompt("Digite um valor do tipo real:", ""));
                }

                break;

            case 'caractere':
                while (!value) {
                    value = window.prompt("Digite uma valor do tipo caractere:", "");
                }

                value = `"${value}"`;

                break;

            case 'logico':
                while (!value) {
                    value = window.prompt("Digite uma valor do tipo lógico:", "");
                }

                break;
        }

        return value;
    }
}