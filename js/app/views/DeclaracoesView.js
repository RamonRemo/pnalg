class DeclaracoesView {
    
    static exiba(model, nome, tipo) {

        let $ = document.querySelector.bind(document);
        let ul = $('#declaracoes');

        let li = document.createElement("li");
        li.id = "variavel";
        li.className = "componente-variavel-li d-flex justify-content-between align-items-center";

        let obj = document.createTextNode(`${tipo.value} : ${nome.value};`);

        li.appendChild(obj);

        Views.createRemoveLi(model, ul, li);

        ul.appendChild(li);
    }
}