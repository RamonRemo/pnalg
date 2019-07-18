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

        if (nodeCopy.id == "componente-declare") {
            nodeCopy.className = "componente-declare";
            componenteDeclare(nodeCopy);
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

    var divItens = document.createElement("div");
    divItens.className = "card mt-1";

    var ul = document.createElement("ul");
    ul.setAttribute('id', 'itens');
    ul.className = "list-group list-group-flush";
    divItens.appendChild(ul);

    div.appendChild(divItens);

    nodeCopy.appendChild(div);
}