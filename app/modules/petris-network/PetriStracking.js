async function stracking(comand) {
    let text = document.querySelector(`#${comand}`).textContent;
    let results;

    switch (Utils.regexTestPetri(comand)) {
        case 'DECLARE':
            results = _declaration(text);
            _createTr(results.name, results.type, results.value);

            break;

        case 'ATRIBUICAO':
            awaitresults = _assignment(text);
            _appendTr(results.name, results.value);

            break;

        case 'LEIA':
            results = _read(text);
            let value = await _reading(results);

            _appendTr(results.name, value);

            break;

        case 'EXIBA':
            _show(text);
            break;

        default:
            return;
    }

    function _declaration(text) {
        let variable = text.split(" : ");

        let name = variable[1].substr(0, (variable[1].length - 1));
        let type = variable[0].substr(0, (variable[0].length));
        let value = "null";

        return { name, type, value };
    }

    function _assignment(text) {
        let variable = text.split(' <− ');

        let name = variable[0].substr(0, (variable[0].length));
        let value = variable[1].substr(0, (variable[1].length - 1));

        return { name, value };
    }

    function _read(text) {
        let variable = text.split('(');

        let name = variable[1].substr(0, (variable[1].length - 2));

        let values = _search(name);

        return values;
    }

    function _show(text) {
        let variable = text.split('(');
        let tmp = variable[1].substr(0, (variable[1].length - 2));
        let command = tmp.split(',');

        if (command.length > 2) {
            command.forEach(element => {
                console.log(element);
            });
        }

        console.log(command);
    }

    function _createTr(name, type, value) {
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

    function _appendTr(name, value) {
        let tds = document.getElementsByTagName("td");

        for (let i = 0; i < tds.length; i++) {
            if (tds[i].textContent === name) {
                tds[i + 2].textContent = value;
            }
        }
    }

    function _search(name) {
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

    async function _reading(results) {
        let value;

        switch (results.type) {
            case 'inteiro':
                value = await prompt(
                    'number',
                    'Insira um valor:',
                    results.name
                );
                break;

            case 'real':
                value = await prompt(
                    'number',
                    'Insira um valor:',
                    results.name
                );
                break;

            case 'caractere':
                value = await prompt(
                    'text',
                    'Insira uma cadeia de caracteres:',
                    results.name
                );
                value = `"${value}"`;
                break;

            case 'logico':
                value = await prompt(
                    'select',
                    '',
                    results.name
                );
                break;
        }

        return value;
    }

    async function prompt(type, placeholder, name) {
        let { value: data } = await Swal.fire({
            title: `Leitura da Variável: ${name}`,
            input: type,
            inputPlaceholder: placeholder,
            inputOptions: {
                true: 'true',
                false: 'false'
            },
            inputValidator: (value) => {
                if (!value) {
                    return 'Valor Obrigatório!';
                }
            }
        });

        return data;
    }
}