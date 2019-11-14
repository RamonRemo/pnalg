$(document).ready(function() {
    $('#body-declaracao').load('app/modules/declaration/Declaration.html');
    $('#body-atribuicao').load('app/modules/assignment/Assignment.html');
    $('#body-exiba').load('app/modules/show-off/ShowOff.html');
    $('#body-leia').load('app/modules/read/Read.html');
    $('#body-se').load('app/modules/if/If.html');
    $('#body-rede').load('app/modules/petris-network/Petris.html');
});

$('#step4').click(function() {
    $('#area-codigo-simulador').html('');

    let petris = $('#area-codigo');
    let elements = petris.children().children();

    for (element of elements) {
        let clone = element.cloneNode(true);
        clone.id = `${element.id}-petri`

        $('#area-codigo-simulador').append(clone).hmtl;
    }
});

$('#step4').on("click", function() {
    var spinner = $('.loading-spinner');
    spinner.addClass('active');

    setTimeout(function() {
        spinner.removeClass('active');
        $('#modalRede').modal({ show: true })
    }, 3000);
});