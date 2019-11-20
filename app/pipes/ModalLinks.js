$(document).ready(function() {
    $('#declaration-body').load('app/modules/declaration/Declaration.html');
    $('#body-assignment').load('app/modules/assignment/Assignment.html');
    $('#body-display').load('app/modules/show-off/ShowOff.html');
    $('#body-read').load('app/modules/read/Read.html');
    $('#body-conditional-deviation').load('app/modules/if/If.html');
    $('#body-petri-net').load('app/modules/petris-network/Petris.html');
});

$.fn.modal.Constructor.prototype._enforceFocus = function() {};

$('#step4').click(function() {
    $('#pseudocode-area-simulation').html('');

    let petris = $('#pseudocode-area');
    let elements = petris.children().children();

    if (elements.length === 0) {
        alert();
        return;
    }

    for (element of elements) {
        let clone = element.cloneNode(true);
        clone.id = `${element.id}-petri`;

        $('#pseudocode-area-simulation').append(clone).hmtl;
    }

    loading();
});

function loading() {
    var spinner = $('.loading-spinner');
    spinner.addClass('active');

    setTimeout(function() {
        spinner.removeClass('active');
        document.querySelector('tbody').innerHTML = '';
        $('#modal-petri-net').modal({ show: true });
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