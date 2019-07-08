function dragstart_handler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.effectAllowed = "copy";
}

function drop_handler(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.data = "newId";
    ev.target.appendChild(nodeCopy);
}

function dragover_handler(ev) {
    ev.preventDefault();
}