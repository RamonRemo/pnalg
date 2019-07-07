var adicionarDeclaracoes = document.querySelector("#adciona-declaracoes");
adicionarDeclaracoes.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-declare");
    var tipoVariavel = form.tipo.value;
    var nomeVariavel = form.nome.value;
    console.log(tipoVariavel);
    console.log(nomeVariavel);
    
});