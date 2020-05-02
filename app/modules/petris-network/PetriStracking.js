async function stracking(comand) {
    let text = document.querySelector(`#${comand}`).textContent;
    let results;

    switch (CommonUtils.regexTestPetri(comand)) {
        case 'DECLARE':
            results = _declaration(text);
            _createTr(results.name, results.type, results.value);

            return true;

        case 'ATRIBUICAO':
            results = _assignment(text);
            _appendTr(results.name, results.value);

            return true;

        case 'LEIA':
            results = _read(text);
            let value = await _reading(results);
            _appendTr(results.name, value);

            return true;

        case 'EXIBA':
            await _show(text);
            return true;

        case 'SE':
            return await _if(text);

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

            await displayOnScreen(str);

            return;
        }

        let keyword = CommonUtils.replaceAll(command[0], '"', "").trim();
        results = _search(keyword);

        str = (results.value ? results.value : results.name);

        await displayOnScreen(str);
    }

    async function _if(text) {
        let variable = text.split("(");
        variable = variable[1].split(")");
        variable = variable[0].split(" ");

        let nameOne = variable[0];
        let conditional = variable[1];
        let nameTwo = variable[2];

        let resultsOne = _search(nameOne);
        let resultsTwo = _search(nameTwo);

        if ((resultsOne.type === 'inteiro' || resultsOne.type === 'real')
            && (resultsTwo.type === 'inteiro' || resultsTwo.type === 'real')) {
            return _logicTest(resultsOne.value, resultsTwo.value, conditional);
        }

        if (resultsOne.type !== resultsTwo.type) {
            await Swal.fire({
                title: 'Atenção',
                text: 'Variáveis de diferentes tipos!',
                type: 'warning'
            });

            return false;
        }

        return _logicTest(resultsOne.value, resultsTwo.value, conditional);
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
        let type = null, value = null;

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
            position: 'top',
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

    async function displayOnScreen(srt) {
        let { value: data } = await Swal.fire({
            position: 'top',
            text: srt
        });

        return data;
    }

    function _logicTest(operatorOne, operatorTwo, conditional) {
        switch (conditional) {
            case "≠":
                return operatorOne !== operatorTwo ? true : false;

            case "==":
                return operatorOne === operatorTwo ? true : false;

            case ">":
                return Number(operatorOne) > Number(operatorTwo) ? true : false;

            case "<":
                return Number(operatorOne) < Number(operatorTwo) ? true : false;

            case "≤":
                return Number(operatorOne) <= Number(operatorTwo) ? true : false;

            case "≥":
                return Number(operatorOne) >= Number(operatorTwo) ? true : false;
        }
    }
}