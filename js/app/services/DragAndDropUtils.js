
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

function leia(id, nodeCopy, listVariavel) {
    if (listVariavel.length == '0') {
        bootbox.alert('Declare ao menos uma variável!');
        return null;
    }

    addUl(id, nodeCopy, 'leia');
    let idCode = addCode(id, 'code-leia');
    leiaController._idCode = idCode;

    return '#modalLeia';
}

function assignment(id, nodeCopy, listVariavel) {
    if (listVariavel.length == '0') {
        bootbox.alert('Declare ao menos uma variável!');
        return null;
    }

    addUl(id, nodeCopy, 'atribuicoes');
    let idCode = addCode(id, 'code-atribuicao');
    assignmentController._idCode = idCode;

    return '#modalAtribuicao';
}

function se(id, nodeCopy, listVariavel) {
    if (listVariavel.length == '0') {
        bootbox.alert('Declare ao menos uma variável!');
        return null;
    }

    let se = nodeCopy.childNodes[3];
    let fimSe = nodeCopy.childNodes[5];
    se.className = 'area-se';
    fimSe.className = 'list-group-item btn btn-fim-se';

    $('#salva-alteracoes').find('.btn').removeAttr('disabled');

    let idCode = addCode(id, 'code-se');
    seController._idCode = idCode;

    return '#modalSe';
}

function addUl(id, nodeCopy, nome) {
    let ul = document.createElement('ul');
    ul.setAttribute('id', `${nome}-${id}`);
    ul.className = 'list-group list-group-flush mt-2 componente-variavel-ul';

    nodeCopy.appendChild(ul);
}

function addCode(id, nome) {

    let areaCodigo = document.querySelector('#area-codigo');
    let code = document.createElement('code');
    code.setAttribute('id', `${nome}-${id}`);

    areaCodigo.appendChild(code);

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


    let elemento = document.getElementById(data);
    removeList(data, elemento);
    elemento.remove();

    return true;
}

function removeList(str, elemento) {
    const declare = /componente-declare-\d/;
    const leia = /componente-leia-\d/;
    const exiba = /componente-exiba-\d/;
    const atribuicao = /componente-atribuicao-\d/;
    const se = /componente-se-\d/;
    let qtd = elemento.lastChild.childNodes.length;

    if (declare.test(str)) {
        declarationController.removeAll(elemento, qtd);
        return;
    }

    if (leia.test(str)) {
        leiaController.removeAll(elemento, qtd);
        return;
    }

    if (exiba.test(str)) {
        showOffController.removeAll(elemento, qtd);
        return;
    }

    if (atribuicao.test(str)) {
        assignmentController.removeAll(elemento, qtd);
        return;
    }

    if (se.test(str)) {
        let span = $(`#${elemento.id}`).find('#area-se').find('.badge');
        let array = $.makeArray(span);

        array.forEach(element => {
            $(element).trigger('click');
        });

        return;
    }
}