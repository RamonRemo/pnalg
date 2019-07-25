let campo = document.querySelector('#atribuicao-nome');
campo.addEventListener("click", function (event) {
    event.preventDefault();

    let tipo = campo.options[campo.selectedIndex].value;

    switch (tipo) {

        case 'inteiro':
            let tipoInt = document.getElementById("inteiro");
            dysplayNone(tipoInt);
            break;

        case 'real':
            let tipoReal = document.getElementById("real");
            dysplayNone(tipoReal);
            break;

        case 'caractere':
            let tipoCaractere = document.getElementById("caractere");
            dysplayNone(tipoCaractere);
            break;

        case 'logico':
            let tipoLogico = document.getElementById("logico");
            dysplayNone(tipoLogico);
            break;
    }

});


function dysplayNone(tipo) {
    let $ = document.querySelector.bind(document);

    tipoInt = $('#inteiro');
    tipoReal = $('#real');
    tipoCaractere = $('#caractere');
    tipoLogico = $('#logico');

    tipoInt.style.display = 'none';
    tipoReal.style.display = 'none';
    tipoCaractere.style.display = 'none';
    tipoLogico.style.display = 'none';

    tipo.style.display = 'block';
}