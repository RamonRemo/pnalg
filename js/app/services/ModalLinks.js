$(document).ready(function () {

    $('#body-declaracao').load('modais/declaration.html');
    $('#body-atribuicao').load('modais/assignment.html');
    $('#body-exiba').load('modais/showOff.html');
    $('#body-leia').load('modais/read.html');
    $('#body-se').load('modais/if.html');
    $('#body-rede').load('modais/petris.html');
});


$('#step5').click(function () {
    $('.petris-code').html('');
    $('.petris-code').append($('#areaCode').html());
});