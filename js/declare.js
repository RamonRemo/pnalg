var adicionarDeclaracoes = document.querySelector("#adciona-declaracoes");
adicionarDeclaracoes.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-declare");
    var tipoVariavel = form.tipo.value;
    var nomeVariavel = form.nome.value;
    form.nome.value = "";

    var variavelDeclarada = document.createTextNode(tipoVariavel + ": " + nomeVariavel + ";");

    var ul = document.querySelector("#itens");
    var li = document.createElement("li");

    li.appendChild(variavelDeclarada);
    ul.appendChild(li);
    $("#modalDeclare").modal('hide');
});