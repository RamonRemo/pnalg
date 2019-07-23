var adicionarAtribuicoes = document.querySelector("#btn-atribuicao");
adicionarAtribuicoes.addEventListener("click", function (event) {
    event.preventDefault();
    var variavel = document.querySelectorAll("#variavel");
    console.log(variavel);
    $("#modalDeclare").modal('hide');

    if (tipoVariavel == "caractere") {
        nomeVar.style.display = "block";
    }
});