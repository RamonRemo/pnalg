$(document).ready(function() {
    $('#body-declaracao').load('app/modules/declaration/Declaration.html');
    $('#body-atribuicao').load('app/modules/assignment/Assignment.html');
    $('#body-exiba').load('app/modules/show-off/ShowOff.html');
    $('#body-leia').load('app/modules/read/Read.html');
    $('#body-se').load('app/modules/if/If.html');
    $('#body-rede').load('app/modules/petris-network/Petris.html');
});

$.fn.modal.Constructor.prototype._enforceFocus = function() {};

$(document).ready(function() {
    $('#open-modal, button').click(function() {
        let target = $(this).attr('data-target');

        $(`${target}`).modal({
            show: true
        })
    });

    $(document).on('show.bs.modal', '.modal', function(event) {
        let zIndex = 1040 + (10 * $('.modal:visible').length);

        $(this).css('z-index', zIndex);

        setTimeout(function() {
            $('.modal-backdrop')
                .not('.modal-stack')
                .css('z-index', zIndex - 1)
                .addClass('modal-stack');
        }, 0);
    });
});

$('#step4').click(function() {
    $('#area-codigo-simulador').html('');

    let petris = $('#area-codigo');
    let elements = petris.children().children();

    if (elements.length === 0) {
        alert();
        return;
    }

    for (element of elements) {
        let clone = element.cloneNode(true);
        clone.id = `${element.id}-petri`;

        $('#area-codigo-simulador').append(clone).hmtl;
    }

    loading();
});

function loading() {
    var spinner = $('.loading-spinner');
    spinner.addClass('active');

    setTimeout(function() {
        spinner.removeClass('active');
        document.querySelector('tbody').innerHTML = '';
        $('#modalRede').modal({ show: true });
    }, 1500);
}

function alert() {
    Swal.fire({
        title: 'Atenção',
        text: 'Não há dados para criar o modelo!',
        type: 'warning',
        closeOnConfirm: false
    });
}