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
        nodeCopy.id = data + "-" + id;
        document.getElementById('target').appendChild(nodeCopy);
    }
}

function dragover_handler(ev) {
    ev.preventDefault();
}