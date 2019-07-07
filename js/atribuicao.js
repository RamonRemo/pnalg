var adicionarTipo = document.querySelector("#form-tipo");
var nomeVar = document.querySelector("#div-tipo");
adicionarTipo.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-declare");
    var tipoVariavel = form.tipo.value;

    if (tipoVariavel == "Caractere") {
        nomeVar.style.display = "block";
    }
});