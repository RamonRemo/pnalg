class ExibaController {

    constructor() {

        this._saidaCampo;
        this._exiba;
        this._id = -1;
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

        if (this._inputNome == "Escolher...") {
            return;
        }

        this._saidaCampo.innerHTML = this._saidaCampo.value + ',' + this._inputNome;
    }

    adiciona(event) {

        event.preventDefault();

        if (!this._validacoes()) {

            return;
        }

        this._id = this._id + 1;
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

    _validacoes() {

        if (!this._saidaCampo || !this._saidaCampo.value) {

            bootbox.alert({
                message: 'O que iremos exibir? 🤷‍🤷‍',
                animate: true,
            });

            return false;
        }

        return true;
    }

    _limpaForm() {

        this._saidaCampo.innerHTML = '';
        Utils.focus('modalExiba', 'exiba-texto');
    }
}