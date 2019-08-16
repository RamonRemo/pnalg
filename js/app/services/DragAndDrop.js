function dragStartHandler(ev) {

    let target = $(ev.target).closest('[data-id]');

    if (target.data('id') != 'components') {
        return;
    }

    ev.dataTransfer.setData('text', ev.target.id);
    ev.dataTransfer.effectAllowed = 'copy';
}

function dropHandler(ev) {

    ev.preventDefault();

    let data = ev.dataTransfer.getData('text');

    if (document.getElementById(data) == null) {

        return;
    }

    let nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.className = 'componente';

    if (!valida(data, nodeCopy)) {

        return;
    }

    let id = document.querySelectorAll('#target button').length;
    nodeCopy.id = data + '-' + id;

    let modal = nodeCopy.childNodes[1];
    modal.dataset.toggle = 'modal';

    document.getElementById('target').appendChild(nodeCopy);
}

function dragoverHandler(ev) {

    ev.preventDefault();
}


function valida(data, nodeCopy) {

    let listVariavel = document.querySelectorAll('.var');

    switch (nodeCopy.id) {

        case 'componente-declare':
            return declare(nodeCopy, data);

        case 'componente-leia':
            return leia(nodeCopy, data, listVariavel);

        case 'componente-exiba':
            return exiba(nodeCopy, data);

        case 'componente-atribuicao':
            return atribuicao(nodeCopy, data, listVariavel);

        case 'componente-se':
            return se(nodeCopy, data, listVariavel);

        default:
            document.getElementById(data).remove();
            return true;
    }
}


function declare(nodeCopy, data) {

    addUl(nodeCopy, 'declaracoes');
    addCode('code-declaracao');
    document.getElementById(data).remove();

    return true;
}

function leia(nodeCopy, data, listVariavel) {

    if (listVariavel.length == '0') {
        bootbox.alert('Declare ao menos uma variável!');
        return false;
    }

    addUl(nodeCopy, 'leia');
    addCode('code-leia');
    document.getElementById(data).remove();

    return true;
}

function exiba(nodeCopy, data) {

    addUl(nodeCopy, 'exiba');
    addCode('code-exiba');
    document.getElementById(data).remove();

    return true;
}

function atribuicao(nodeCopy, data, listVariavel) {

    if (listVariavel.length == '0') {
        bootbox.alert('Declare ao menos uma variável!');
        return false;
    }

    addUl(nodeCopy, 'atribuicoes');
    addCode('code-atribuicao');
    document.getElementById(data).remove();

    return true;
}

function se(nodeCopy, data, listVariavel) {

    if (listVariavel.length == '0') {
        bootbox.alert('Declare ao menos uma variável!');
        return false;
    }

    addUl(nodeCopy, 'se');
    addCode('code-se');
    document.getElementById(data).remove();

    return true;
}

function addUl(nodeCopy, nome) {

    let ul = document.createElement('ul');
    ul.setAttribute('id', nome);
    ul.className = 'list-group list-group-flush mt-2 componente-variavel-ul';

    nodeCopy.appendChild(ul);
}

function addCode(nome) {

    let araeCodigo = document.querySelector('#area-codigo');
    let code = document.createElement('code');
    code.setAttribute('id', nome);

    araeCodigo.appendChild(code);
}

function h() {
    if (target.data('id') === 'area') {
        let data = ev.dataTransfer.getData('text');
        let element = document.getElementById(data);
        let elemento = Utils.elementDeclare();
        componente = document.getElementById('components-drop');
        componente.insertAdjacentHTML('beforeend', elemento);
        element.remove();
        return;
    }
}