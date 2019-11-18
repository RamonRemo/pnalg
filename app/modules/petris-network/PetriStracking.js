async function stracking(comand) {
    let text = document.querySelector(`#${comand}`).textContent;
    let results;

    switch (Utils.regexTestPetri(comand)) {
        case 'DECLARE':
            results = await _declaration(text);
            await _createTr(results.name, results.type, results.value);

            break;

        case 'ATRIBUICAO':
            awaitresults = await _assignment(text);
            await _appendTr(results.name, results.value);

            break;

        case 'LEIA':
            results = await _read(text);
            let value = await _reading(results);

            await _appendTr(results.name, value);

            break;

        default:
            return;
    }

    async function _declaration(text) {
        let variable = text.split(" : ");

        let name = variable[1].substr(0, (variable[1].length - 1));
        let type = variable[0].substr(0, (variable[0].length));
        let value = "null";

        return { name, type, value };
    }

    async function _assignment(text) {
        let variable = text.split(' <− ');

        let name = variable[0].substr(0, (variable[0].length));
        let value = variable[1].substr(0, (variable[1].length - 1));

        return { name, value };
    }

    async function _read(text) {
        let variable = text.split('(');

        let name = variable[1].substr(0, (variable[1].length - 2));

        let values = _search(name);

        return values;
    }

    async function _createTr(name, type, value) {
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

    async function _appendTr(name, value) {
        let tds = document.getElementsByTagName("td");

        for (let i = 0; i < tds.length; i++) {
            if (tds[i].textContent === name) {
                tds[i + 2].textContent = value;
            }
        }
    }

    async function _search(name) {
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
                    'Insira um valor válido:',
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