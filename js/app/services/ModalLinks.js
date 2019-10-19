$(document).ready(function() {

    $('#body-declaracao').load('modais/declaration.html');
    $('#body-atribuicao').load('modais/assignment.html');
    $('#body-exiba').load('modais/showOff.html');
    $('#body-leia').load('modais/read.html');
    $('#body-se').load('modais/if.html');
    $('#body-rede').load('modais/petris.html');
});

$('#step5').click(function() {
    $('#area-codigo-simulador').html('');

    let petris = $('#area-codigo');
    let elements = petris.children().children();
    for (element of elements) {
        var clone = element.cloneNode(true);
        clone.id = `${element.id}-petri`
        $('#area-codigo-simulador').append(clone).hmtl;
    }
});