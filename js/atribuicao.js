var comboVar = document.getElementById("variaveis-options");
comboVar.addEventListener("click", function (event) {
    event.preventDefault();

    var tipoVariavel = comboVar.options[comboVar.selectedIndex].value;
    var nomeVariavel = comboVar.options[comboVar.selectedIndex].text;

    switch (tipoVariavel) {

        case 'inteiro':
            tipoInt = document.getElementById("inteiro");
            dysplayNone(tipoInt);
            break;

        case 'real':
            tipoReal = document.getElementById("real");
            dysplayNone(tipoReal);
            break;

        case 'caractere':
            tipoCaractere = document.getElementById("caractere");
            dysplayNone(tipoCaractere);
            break;

        case 'logico':
            tipoLogico = document.getElementById("logico");
            dysplayNone(tipoLogico);
            break;
    }

    $("#modalDeclare").modal('hide');

});


function dysplayNone(tipo) {
    tipoInt = document.getElementById("inteiro");
    tipoReal = document.getElementById("real");
    tipoCaractere = document.getElementById("caractere");
    tipoLogico = document.getElementById("logico");

    tipoInt.style.display = "none";
    tipoReal.style.display = "none";
    tipoCaractere.style.display = "none";
    tipoLogico.style.display = "none";

    tipo.style.display = "block";
}
