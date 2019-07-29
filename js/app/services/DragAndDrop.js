function dragstartHandler(ev) {

    let target = $(ev.target).closest('[data-id]');

    if (target.data('id') != "components") {
        return;
    }

    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.effectAllowed = "copy";
}

function dropHandler(ev) {

    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");

    if (document.getElementById(data) == null) {
        return;
    }

    let nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.className = "componente";

    if (!valida(data, nodeCopy)) {
        return;
    }

    let id = document.querySelectorAll('#target button').length;
    nodeCopy.id = data + "-" + id;

    let modal = nodeCopy.childNodes[1];
    modal.dataset.toggle = "modal";

    document.getElementById('target').appendChild(nodeCopy);
}

function dragoverHandler(ev) {

    ev.preventDefault();
}


function valida(data, nodeCopy) {

    let listVariavel = document.querySelectorAll('#variavel');

    switch (nodeCopy.id) {

        case 'componente-declare':
            document.getElementById(data).remove();
            return true;

        case 'componente-leia':
            if (listVariavel.length == "0") {
                bootbox.alert("Declare ao menos uma variável!");
                return false;
            }
            return true;

        case 'componente-exiba':
            return true;

        case 'componente-atribuicao':
            if (listVariavel.length == "0") {
                bootbox.alert("Declare ao menos uma variável!");
                return false;
            }

            document.getElementById(data).remove()
            return true;

        case 'componente-se':
            return true;
    }
}
