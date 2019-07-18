var adicionarDeclaracoes = document.querySelector("#adiciona-declaracoes");
adicionarDeclaracoes.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-declare");
    var tipoVariavel = form.tipo.value;
    var nomeVariavel = form.nome.value;
    form.nome.value = "";

    var variaveisOptions = document.querySelector('#variaveis-options');
    var options = document.createElement('option');
    options.appendChild(document.createTextNode(nomeVariavel));
    variaveisOptions.appendChild(options);

    var variavelDeclarada = document.createTextNode(tipoVariavel + ": " + nomeVariavel + ";");

    var ul = document.querySelector("#variaveis");
    var li = document.createElement("li");
    li.id = "variavel";
    li.appendChild(variavelDeclarada);
    ul.appendChild(li);
    $("#modalDeclare").modal('hide');
});