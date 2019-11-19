function dragStartHandler(ev) {
    let target = $(ev.target).closest('[data-id]');

    let dragID = target.data('id');

    ev.dataTransfer.setData('text', ev.target.id);
    ev.dataTransfer.setData('dragID', dragID);

    ev.dataTransfer.effectAllowed = 'copy';
}

function dropHandler(ev) {
    ev.preventDefault();

    let data = ev.dataTransfer.getData('text');
    let dragID = ev.dataTransfer.getData('dragID');

    let target = $(ev.target).closest('[data-id]');
    let dropID = target.data('id');

    if (removeElement(data, dragID, dropID)) {
        return;
    }

    if (document.getElementById(data) == null) {
        return;
    }

    let nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.className = 'component';

    let id = document.querySelectorAll('#target button').length;

    idModal = validate(id, nodeCopy);

    if (!idModal) {
        return;
    }

    nodeCopy.id = `${data}-${id}`;

    let modal = nodeCopy.childNodes[1];
    modal.dataset.toggle = 'modal';
    modal.dataset.target = idModal;

    document.getElementById('target').appendChild(nodeCopy);
}

function dragoverHandler(ev) {
    ev.preventDefault();
}

function validate(id, nodeCopy) {
    let listVariable = document.querySelectorAll('.var');

    switch (nodeCopy.id) {
        case 'declaration-component':
            return declaration(id, nodeCopy);

        case 'reading-component':
            return read(id, nodeCopy, listVariable);

        case 'display-component':
            return showOff(id, nodeCopy);

        case 'attribution-component':
            return assignment(id, nodeCopy, listVariable);

        case 'conditional-branch-component':
            return iff(id, nodeCopy, listVariable);
    }
}