var dragID;
var dropID;

function dragStartHandler(ev) {

    let target = $(ev.target).closest('[data-id]');

    dragID = target.data('id');

    ev.dataTransfer.setData('text', ev.target.id);
    ev.dataTransfer.effectAllowed = 'copy';
}

function dropHandler(ev) {

    ev.preventDefault();

    let data = ev.dataTransfer.getData('text');

    let target = $(ev.target).closest('[data-id]');
    dropID = target.data('id');

    if (!removeElement(data)) {

        return;
    }

    if (document.getElementById(data) == null) {

        return;
    }


    let nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.className = 'componente';

    let id = document.querySelectorAll('#target button').length;

    if (!valida(id, nodeCopy)) {

        return;
    }

    nodeCopy.id = data + '-' + id;

    let modal = nodeCopy.childNodes[1];
    modal.dataset.toggle = 'modal';

    document.getElementById('target').appendChild(nodeCopy);
}

function dragoverHandler(ev) {

    ev.preventDefault();
}


function valida(id, nodeCopy) {

    let listVariavel = document.querySelectorAll('.var');

    switch (nodeCopy.id) {

        case 'componente-declare':
            return declare(id, nodeCopy);

        case 'componente-leia':
            return leia(id, nodeCopy, listVariavel);

        case 'componente-exiba':
            return exiba(id, nodeCopy);

        case 'componente-atribuicao':
            return atribuicao(id, nodeCopy, listVariavel);

        case 'componente-se':
            return se(id, nodeCopy, listVariavel);

        default:
            return true;
    }
}


function declare(id, nodeCopy) {

    addUl(id, nodeCopy, 'declaracoes');
    addCode('code-declaracao');

    return true;
}

function leia(id, nodeCopy, listVariavel) {

    if (listVariavel.length == '0') {
        bootbox.alert('Declare ao menos uma variável!');
        return false;
    }

    addUl(id, nodeCopy, 'leia');
    addCode('code-leia');

    return true;
}

function exiba(id, nodeCopy) {

    addUl(id, nodeCopy, 'exiba');
    addCode('code-exiba');

    return true;
}

function atribuicao(id, nodeCopy, listVariavel) {

    if (listVariavel.length == '0') {
        bootbox.alert('Declare ao menos uma variável!');
        return false;
    }

    addUl(id, nodeCopy, 'atribuicoes');
    addCode('code-atribuicao');

    return true;
}

function se(id, nodeCopy, listVariavel) {

    if (listVariavel.length == '0') {
        bootbox.alert('Declare ao menos uma variável!');
        return false;
    }

    addUl(id, nodeCopy, 'se');
    addCode('code-se');

    return true;
}

function addUl(id, nodeCopy, nome) {

    let ul = document.createElement('ul');
    ul.setAttribute('id', `${nome}-${id}`);
    ul.className = 'list-group list-group-flush mt-2 componente-variavel-ul';

    nodeCopy.appendChild(ul);
}

function addCode(nome) {

    let araeCodigo = document.querySelector('#area-codigo');
    let code = document.createElement('code');
    code.setAttribute('id', nome);

    araeCodigo.appendChild(code);
}

function removeElement(data) {

    if (dragID === 'components' && dropID === 'area') {

        return true;
    }

    if (dragID === 'area' && dropID === 'area') {

        return false;
    }

    if (dragID === 'components' && dropID === 'components') {

        return false;
    }

    let element = document.getElementById(data);
    element.remove();

    return false;
}
