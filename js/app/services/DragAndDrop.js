function dragstart_handler(ev) {
    let target = $(ev.target).closest('[data-id]');
    if (target.data('id') == "components") {
        ev.dataTransfer.setData("text", ev.target.id);
        ev.dataTransfer.effectAllowed = "copy";
    } else {
        return;
    }
}

function drop_handler(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    if (document.getElementById(data) == null) {
        return;
    } else {
        let id = document.querySelectorAll('#target button').length;
        let nodeCopy = document.getElementById(data).cloneNode(true);
        let listVariavel = document.querySelectorAll('#variavel');
        switch (nodeCopy.id) {

            case 'componente-declare':
                document.getElementById(data).remove()
                nodeCopy.className = "componente";
                componentes(nodeCopy, "declaracoes");
                break;

            case 'componente-leia':
                if (listVariavel.length == "0") {
                    bootbox.alert("Declare ao menos uma variável!");
                    return;
                }
                nodeCopy.className = "componente";
                break;

            case 'componente-exiba':
                nodeCopy.className = "componente";
                break;

            case 'componente-atribuicao':
                if (listVariavel.length == "0") {
                    bootbox.alert("Declare ao menos uma variável!");
                    return;
                }
                nodeCopy.className = "componente";
                componentes(nodeCopy, "atribuicoes");
                break;

            case 'componente-se':
                nodeCopy.className = "componente";
                break;
        }

        nodeCopy.id = data + "-" + id;

        let modal = nodeCopy.childNodes[1];
        modal.dataset.toggle = "modal";
        document.getElementById('target').appendChild(nodeCopy);
    }
}

function dragover_handler(ev) {
    ev.preventDefault();
}

function componentes(nodeCopy, nome) {
    let ul = document.createElement("ul");
    ul.setAttribute('id', nome);
    ul.className = "list-group list-group-flush mt-2 componente-variavel-ul";
    nodeCopy.appendChild(ul);
}
