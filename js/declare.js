var adicionarDeclaracoes = document.querySelector("#adiciona-declaracoes");
adicionarDeclaracoes.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-declare");
    var tipoVariavel = form.tipo.value;
    var nomeVariavel = form.nome.value;
    form.nome.value = "";

    criaVariavel(tipoVariavel, nomeVariavel);
    insereEmOptions(nomeVariavel);

    $("#modalDeclare").modal('hide');
});

function criaVariavel(tipoVariavel, nomeVariavel) {
    var variavelDeclarada = document.createTextNode(tipoVariavel + ": " + nomeVariavel + ";");
    var ul = document.querySelector("#variaveis");
    var li = document.createElement("li");
    li.id = "variavel";
    li.className = "componente-variavel-li";
    li.appendChild(variavelDeclarada);
    ul.appendChild(li);
}

function insereEmOptions(nomeVariavel) {
    var variaveisOptions = document.querySelector('#variaveis-options');
    var options = document.createElement('option');
    options.appendChild(document.createTextNode(nomeVariavel));
    variaveisOptions.appendChild(options);
}
