function dragstart_handler(ev) {
    var target = $(ev.target).closest('[data-id]');
    if (target.data('id') == "components") {
        ev.dataTransfer.setData("text", ev.target.id);
        ev.dataTransfer.effectAllowed = "copy";
    } else {
        return;
    }
}

function drop_handler(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (document.getElementById(data) == null) {
        return;
    } else {
        var id = document.querySelectorAll('#target button').length;
        var nodeCopy = document.getElementById(data).cloneNode(true);

        switch (nodeCopy.id) {

            case 'componente-declare':
                document.getElementById(data).remove()
                nodeCopy.className = "componente";
                componenteDeclare(nodeCopy);
                break;

            case 'componente-leia':
                nodeCopy.className = "componente";
                break;

            case 'componente-exiba':
                nodeCopy.className = "componente";
                break;

            case 'componente-atribuicao':
                var listVariavel = document.querySelectorAll('#variavel');
                if (listVariavel.length == "0") {
                    bootbox.alert("Declare ao menos uma variável!");
                    return;
                }
                nodeCopy.className = "componente";
                break;

            case 'componente-se':
                nodeCopy.className = "componente";
                break;
        }

        nodeCopy.id = data + "-" + id;

        var modal = nodeCopy.childNodes[1];
        modal.dataset.toggle = "modal";
        document.getElementById('target').appendChild(nodeCopy);
    }
}

function dragover_handler(ev) {
    ev.preventDefault();
}

function componenteDeclare(nodeCopy) {
    var div = document.createElement("div");
    div.setAttribute('id', 'variaveis-declaradas');

    var divVariaveis = document.createElement("div");
    divVariaveis.className = "card mt-1";

    var ul = document.createElement("ul");
    ul.setAttribute('id', 'variaveis');
    ul.className = "list-group list-group-flush";
    divVariaveis.appendChild(ul);

    div.appendChild(divVariaveis);

    nodeCopy.appendChild(div);
}
