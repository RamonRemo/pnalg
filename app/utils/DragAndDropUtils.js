function declaration(id, nodeCopy) {
    addUl(id, nodeCopy, 'declaracoes');
    let idCode = addCode(id, 'code-declaracao');
    declarationController._idCode = idCode;

    return '#modal-declaration';
}

function showOff(id, nodeCopy) {
    addUl(id, nodeCopy, 'exiba');
    let idCode = addCode(id, 'code-exiba');
    showOffController._idCode = idCode;

    return '#modal-display';
}

function read(id, nodeCopy, listVariable) {
    if (listVariable.length === 0) {
        bootbox.alert('Declare ao menos uma variável!');
        return null;
    }

    addUl(id, nodeCopy, 'leia');
    let idCode = addCode(id, 'code-leia');
    readController._idCode = idCode;

    return '#modal-read';
}

function assignment(id, nodeCopy, listVariable) {
    if (listVariable.length === 0) {
        bootbox.alert('Declare ao menos uma variável!');
        return null;
    }

    addUl(id, nodeCopy, 'atribuicoes');
    let idCode = addCode(id, 'code-assignment');
    assignmentController._idCode = idCode;

    return '#modal-assignment';
}

function iff(id, nodeCopy, listVariable) {
    if (listVariable.length === 0) {
        bootbox.alert('Declare ao menos uma variável!');
        return null;
    }

    let se = nodeCopy.childNodes[3];
    se.className = 'area-if';

    let fimse = document.createElement('button');
    fimse.id = 'btn-fim-se'
    fimse.className = 'list-group-item btn btn-fim-se'
    fimse.textContent = 'Fim se';
    nodeCopy.appendChild(fimse);

    $('#save-changes').find('.btn').removeAttr('disabled');

    let idCode = addCode(id, 'code-se');
    ifController._idCode = idCode;

    return '#modal-conditional-deviation';
}

function addUl(id, nodeCopy, name) {
    let ul = document.createElement('ul');
    ul.setAttribute('id', `${name}-${id}`);
    ul.className = 'list-group list-group-flush mt-2 component-variavel-ul';

    nodeCopy.appendChild(ul);
}

function addCode(id, name) {
    let codeArea = document.querySelector('#pseudocode-area');
    let code = document.createElement('code');
    code.setAttribute('id', `${name}-${id}`);

    codeArea.appendChild(code);

    return code.id;
}

function removeElement(data, dragID, dropID) {
    if (dragID === 'components' && dropID === 'area') {
        return false;
    }

    if (dragID === 'area' && dropID === 'area') {
        return true;
    }

    if (dragID === 'components' && dropID === 'components') {
        return true;
    }

    if (dragID === 'components' && !dropID) {
        return true;
    }

    let element = document.getElementById(data);
    removeList(data, element);
    element.remove();

    return true;
}

function removeList(str, element) {
    const declare = /declaration-component-\d/;
    const leia = /reading-component-\d/;
    const exiba = /display-component-\d/;
    const assignment = /attribution-component-\d/;
    const se = /conditional-branch-component-\d/;
    let qtd = element.lastChild.childNodes.length;

    if (declare.test(str)) {
        declarationController.removeAll(element, qtd);
        return;
    }

    if (leia.test(str)) {
        readController.removeAll(element, qtd);
        return;
    }

    if (exiba.test(str)) {
        showOffController.removeAll(element, qtd);
        return;
    }

    if (assignment.test(str)) {
        assignmentController.removeAll(element, qtd);
        return;
    }

    if (se.test(str)) {
        let span = $(`#${element.id}`).find('#area-if').find('.badge');
        let array = $.makeArray(span);

        array.forEach(element => {
            $(element).trigger('click');
        });

        return;
    }
}