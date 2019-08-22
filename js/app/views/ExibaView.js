class ExibaView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model, list, ul, ulSe) {

        let li = document.createElement('li');
        li.id = model.id;
        li.className = 'componente-variavel-li d-flex justify-content-between align-items-center';

        let obj = document.createTextNode(`escreval(${model.saida});`);
        li.appendChild(obj);
        
        if (ulSe) {

            ulSe.appendChild(li);
        } else {

            ul.appendChild(li);
        }

        this._addRemovedor(li);
        this.console(list);
    }

    console(list) {

        let code = document.querySelector('#code-exiba');

        $('#code-exiba').empty();
        
        if (list._exiba.length != 0) {
            
            code.innerHTML = '<span id="comentario">//Exibicao</span>';
        }
        
        let array = Object.values(list);

        if (array[0].length == 0) {

            return;
        }

        array.forEach(objetos => {
            objetos.forEach(element => {

                let span = document.createElement('span');

                span.innerHTML = (`escreval(${element.saida});`);

                code.appendChild(span);
            });
        });
    }

    _addRemovedor(li) {

        let div = document.createElement('div');
        div.innerHTML = '<span class="badge badge-primary badge-pill" onclick="exibaController.remove(event);">x</span>';
        li.appendChild(div);
    }
}