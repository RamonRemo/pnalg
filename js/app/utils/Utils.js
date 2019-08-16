class Utils {

    constructor() {

        throw new Error('Utils não pode ser instanciada');
    }

    static focus(id, campo) {

        $(`#${id}`).on('shown.bs.modal', function () {
            $(`#${campo}`).focus();
        });
    }

    static elementDeclare() {
        return `<div id='componente-declare' ondragstart='dragStartHandler(event);' draggable='true'>
                    <button id='btn-declare' type='button' class='list-group-item btn' data-target='#modalDeclare'>
                        Declare
                    </button>
                </div>`
    }

    static elementExiba() {
        return `<div id='componente-exiba' ondragstart='dragStartHandler(event);' draggable='true'>
                    <button id='btn-exiba' type='button' class='list-group-item btn' data-target='#modalExiba'>
                        Exiba
                    </button>
                </div>`
    }

    static elementAtribuicao() {
        return `<div id='componente-atribuicao' ondragstart='dragStartHandler(event);' draggable='true'>
                    <button id='btn-atribuicao' type='button' class='list-group-item btn' data-target='#modalAtribuicao'>
                        Atribuição
                    </button>
                </div>`
    }

    static elementSe() {
        return `<div id='componente-se' ondragstart='dragStartHandler(event);' draggable='true'>
                    <button id='btn-se' type='button' class='list-group-item btn' data-target='#modalSe'>
                        Se
                    </button>
                </div>`
    }

    static elementFimSe() {
        return `<div id='componente-fim-se' ondragstart='dragStartHandler(event);' draggable='true'>
                    <button id='btn-fim-se' type='button' class='list-group-item btn'>
                        Fim se
                    </button>
                </div>`
    }
}