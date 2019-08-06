class ExibaController {

    constructor() {

        this._saidaCampo;
        this._exiba;
        this._id;
        this._inputNome;
        this._exibaView = new ExibaView();
        this._listExiba = new ListExiba();
    }

    captura(event) {

        event.preventDefault();
        this._saidaCampo = document.querySelector('#exiba-saida')
        this._saidaCampo.innerHTML = "\"" + event.target.value + "\"";
    }

    addVar(event) {

        event.preventDefault();

        let campo = document.querySelector('#exiba-variavel');
        this._inputNome = campo.options[campo.selectedIndex].text;

        this._saidaCampo.innerHTML = this._saidaCampo.value + ',' + this._inputNome;
    }

    adiciona(event) {

        event.preventDefault();
        this._id = document.getElementById('exiba').children.length;
        this._exiba = this._newExiba();
        this._listExiba.add(this._exiba);

        this._exibaView.update(this._exiba);
        this._limpaForm();

        $('#modalExiba').modal('hide');
    }

    remove(event) {

        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        li.parentNode.removeChild(li);

        this._listExiba.apaga(li.id);
    }

    _newExiba() {

        return new Exiba(this._saidaCampo.value, this._id);
    }

    _limpaForm() {

        this._saidaCampo.innerHTML = '';
        Utils.focus('modalExiba', 'exiba-texto');
    }
}