function cleanAlg(event) {
    event.preventDefault();

    let qtd = document.getElementById('target').childElementCount;

    for (let i = 0; i < qtd; i++) {
        let element = document.getElementById('target').firstElementChild;

        if (typeof element.id !== 'undefined') {
            removeList(element.id, element);
            element.remove();
        }
    }
}

function removeList(str, element) {
    const declare = /declaration-component-\d/;
    const leia = /reading-component-\d/;
    const exiba = /display-component-\d/;
    const assignment = /attribution-component-\d/;
    const se = /conditional-branch-component-\d/;
    let qtd = element.lastChild.childNodes.length;

    if (declare.test(str)) {
        declarationController.removeAll(element, qtd);
        return;
    }

    if (leia.test(str)) {
        readController.removeAll(element, qtd);
        return;
    }

    if (exiba.test(str)) {
        showOffController.removeAll(element, qtd);
        return;
    }

    if (assignment.test(str)) {
        assignmentController.removeAll(element, qtd);
        return;
    }

    if (se.test(str)) {
        let span = $(`#${element.id}`).find('#area-if').find('.badge');
        let array = $.makeArray(span);

        array.forEach(element => {
            $(element).trigger('click');
        });

        return;
    }
}