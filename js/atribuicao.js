var nomeDaVariavel;
var tipoDaVariavel;

var comboVar = document.getElementById("variaveisOptions");
comboVar.addEventListener("click", function (event) {
    event.preventDefault();

    var tipoVariavel = comboVar.options[comboVar.selectedIndex].value;
    var nomeVariavel = comboVar.options[comboVar.selectedIndex].text;

    nomeDaVariavel = nomeVariavel;
    tipoDaVariavel = tipoVariavel;

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

});

var adicionarAtribuicao = document.querySelector("#adciona-atribuicoes");
adicionarAtribuicao.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-atribuicao");
    var valor;
    switch (tipoDaVariavel) {

        case 'inteiro':
            valor = form.valorInteiro.value;
            break;

        case 'real':
            valor = form.valorReal.value;
            break;

        case 'caractere':
            valor = form.valorCaractere.value;
            break;

        case 'logico':
            valor = form.valorLogico.value;
            break;
    }

    criaComponente(valor);
    $("#modalAtribuicao").modal('hide');
});

function criaComponente(valor) {
    var variavelDeclarada = document.createTextNode(nomeDaVariavel + " <− " + valor + ";");
    var ul = document.querySelector("#atribuicoes");
    var li = document.createElement("li");
    li.id = "variavel";
    li.className = "componente-variavel-li";
    li.appendChild(variavelDeclarada);
    ul.appendChild(li);
}

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
