function dragstartHandler(ev) {

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

    document.getElementById('target').appendChild(nodeCopy);
}

function dragoverHandler(ev) {

    ev.preventDefault();
}


function valida(data, nodeCopy) {

    let listVariavel = document.querySelectorAll('#variavel');
    let url = nodeCopy.childNodes[1];
    switch (nodeCopy.id) {

        case 'componente-declare':
            let node = nodeCopy.childNodes[1];
            node.setAttribute('url', 'modais/declare.html');
            addUl(nodeCopy, 'declaracoes');
            document.getElementById(data).remove();
            return true;

        case 'componente-leia':
            if (listVariavel.length == '0') {
                bootbox.alert('Declare ao menos uma variável!');
                return false;
            }
            url.setAttribute('url', 'modais/leia.html');
            addUl(nodeCopy, 'leia');
            document.getElementById(data).remove();
            return true;

        case 'componente-exiba':
            url.setAttribute('url', 'modais/exiba.html');
            addUl(nodeCopy, 'exiba');
            document.getElementById(data).remove();
            return true;

        case 'componente-atribuicao':
            if (listVariavel.length == '0') {
                bootbox.alert('Declare ao menos uma variável!');
                return false;
            }
            url.setAttribute('url', 'modais/atribuicao.html');
            addUl(nodeCopy, 'atribuicoes');
            document.getElementById(data).remove();
            return true;

        case 'componente-se':
            url.setAttribute('url', 'modais/se.html');
            addUl(nodeCopy, 'se');
            document.getElementById(data).remove();
            return true;
    }
}

function addUl(nodeCopy, nome) {
    var ul = document.createElement('ul');
    ul.setAttribute('id', nome);
    ul.className = 'list-group list-group-flush mt-2 componente-variavel-ul';
    nodeCopy.appendChild(ul);
}