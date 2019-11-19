async function stracking(comand) {
    let text = document.querySelector(`#${comand}`).textContent;
    let results;

    switch (CommonUtils.regexTestPetri(comand)) {
        case 'DECLARE':
            results = _declaration(text);
            _createTr(results.name, results.type, results.value);

            break;

        case 'ATRIBUICAO':
            results = _assignment(text);
            _appendTr(results.name, results.value);

            break;

        case 'LEIA':
            results = _read(text);
            let value = await _reading(results);

            _appendTr(results.name, value);

            break;

        case 'EXIBA':
            await _show(text);
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

    async function _show(text) {
        let variable = text.split('(');
        let tmp = variable[1].substr(0, (variable[1].length - 2));
        let command = tmp.split(',');
        let str;

        if (command.length > 1) {
            let text = CommonUtils.replaceAll(command[0], '"', "").trim();
            let keyword = CommonUtils.replaceAll(command[1], '"', "").trim();

            results = _search(keyword);

            str = `${text} ${results.value}`;

            await Swal.fire(str);

            return;
        }

        let keyword = CommonUtils.replaceAll(command[0], '"', "").trim();
        results = _search(keyword);

        str = (results.value ? results.value : results.name);

        await Swal.fire(str);
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
                value = await promptWindow(
                    'number',
                    'Insira um valor:',
                    results.name
                );
                break;

            case 'real':
                value = await promptWindow(
                    'number',
                    'Insira um valor:',
                    results.name
                );
                break;

            case 'caractere':
                value = await promptWindow(
                    'text',
                    'Insira uma cadeia de caracteres:',
                    results.name
                );
                value = `"${value}"`;
                break;

            case 'logico':
                value = await promptWindow(
                    'select',
                    '',
                    results.name
                );
                break;
        }

        return value;
    }

    async function promptWindow(type, placeholder, name) {
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

    async function promptWindow(type, placeholder, name) {
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