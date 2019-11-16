class PetriStracking {

    constructor() {
        throw new Error('PetriStracking não pode ser instanciada');
    }

    static stracking(comand) {
        let str = Utils.regexTestPetri(comand);

        if (str === 'DECLARE') {
            let component = document.querySelector(`#${comand}`);

            let text = component.textContent;
            let variable = text.split(" : ");

            let type = variable[0].substr(0, (variable[0].length));
            let name = variable[1].substr(0, (variable[1].length - 1));

            let tr = createTr(type, name, 'null')
            let tbody = document.querySelector('tbody');
            tbody.appendChild(tr);
        }
    }
}

function createTr(type, name, value) {
    let tr = document.createElement('tr');

    let td = `<tr>
                <td>${name}</td>
                <td>${type}</td>
                <td>${value}</td>
            </tr>`

    tr.innerHTML = td;

    return tr;
}