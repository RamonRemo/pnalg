function declaration(id, nodeCopy) {
    addUl(id, nodeCopy, 'declaracoes');
    let idCode = addCode(id, 'code-declaracao');
    declarationController._idCode = idCode;

    return '#modalDeclare';
}

function showOff(id, nodeCopy) {
    addUl(id, nodeCopy, 'exiba');
    let idCode = addCode(id, 'code-exiba');
    showOffController._idCode = idCode;

    return '#modalExiba';
}

function read(id, nodeCopy, listVariable) {
    if (listVariable.length === 0) {
        bootbox.alert('Declare ao menos uma variável!');
        return null;
    }

    addUl(id, nodeCopy, 'leia');
    let idCode = addCode(id, 'code-leia');
    readController._idCode = idCode;

    return '#modalLeia';
}

function assignment(id, nodeCopy, listVariable) {
    if (listVariable.length === 0) {
        bootbox.alert('Declare ao menos uma variável!');
        return null;
    }

    addUl(id, nodeCopy, 'atribuicoes');
    let idCode = addCode(id, 'code-atribuicao');
    assignmentController._idCode = idCode;

    return '#modalAtribuicao';
}

function iff(id, nodeCopy, listVariable) {
    if (listVariable.length === 0) {
        bootbox.alert('Declare ao menos uma variável!');
        return null;
    }

    let se = nodeCopy.childNodes[3];
    se.className = 'area-se';

    let fimse = document.createElement('button');
    fimse.id = 'btn-fim-se'
    fimse.className = 'list-group-item btn btn-fim-se'
    fimse.textContent = 'Fim se';
    nodeCopy.appendChild(fimse);

    $('#salva-alteracoes').find('.btn').removeAttr('disabled');

    let idCode = addCode(id, 'code-se');
    ifController._idCode = idCode;

    return '#modalSe';
}

function addUl(id, nodeCopy, name) {
    let ul = document.createElement('ul');
    ul.setAttribute('id', `${name}-${id}`);
    ul.className = 'list-group list-group-flush mt-2 componente-variavel-ul';

    nodeCopy.appendChild(ul);
}

function addCode(id, name) {
    let codeArea = document.querySelector('#area-codigo');
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
    const declare = /componente-declare-\d/;
    const leia = /componente-leia-\d/;
    const exiba = /componente-exiba-\d/;
    const atribuicao = /componente-atribuicao-\d/;
    const se = /componente-se-\d/;
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

    if (atribuicao.test(str)) {
        assignmentController.removeAll(element, qtd);
        return;
    }

    if (se.test(str)) {
        let span = $(`#${element.id}`).find('#area-se').find('.badge');
        let array = $.makeArray(span);

        array.forEach(element => {
            $(element).trigger('click');
        });

        return;
    }
}