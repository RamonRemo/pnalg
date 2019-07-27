class AtribuicoesView {

    static exiba(model, nome, valor) {

        let $ = document.querySelector.bind(document);
        let ul = $('#atribuicoes');

        let li = document.createElement("li");
        li.id = "variavel";
        li.className = "componente-variavel-li d-flex justify-content-between align-items-center";

        let obj = document.createTextNode(`${nome} <− ${valor};`);

        li.appendChild(obj);

        Views.createRemoveLi(model, ul, li);

        ul.appendChild(li);
    }
}