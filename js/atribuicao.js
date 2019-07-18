var adicionarAtribuicoes =document.querySelector("#btn-atribuicao");
adicionarAtribuicoes.addEventListener("click", function (event) {
    event.preventDefault();

    var ul = document.querySelector("#atribuicoes");
    var li = document.createElement("li");
    li.id = "atribuicao";

    ul.appendChild(li);
    $("#modalDeclare").modal('hide');

    if (tipoVariavel == "caractere") {
        nomeVar.style.display = "block";
    }
});