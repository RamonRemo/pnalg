class ExibaController {

    constructor() {

        this._saidaCampo = null;
        this._exiba;
        this._id = -1;
        this._inputNome;
        this._ul;
        this._ulSe;
        this._idCode = null;
        this._exibaView = new ExibaView();
        this._listExiba = new ListExiba();
    }

    setId(event) {

        event.preventDefault();

        try {
            this._ul = event.target.parentElement.children[1];
            let li = this._ul.children[0];

            let elemento = Utils.getElement(this._listExiba, li.id);
            this._idCode = elemento.idCode;
        } catch{
            return;
        }
    }

    setIdComponenteSe() {

        this._ulSe = seController._ul;
        addCode('code-exiba');
    }

    captura(event) {

        event.preventDefault();
        this._saidaCampo = document.querySelector('#exiba-saida')
        this._saidaCampo.innerHTML = `"${event.target.value}"`;
    }

    addVar(event) {

        event.preventDefault();

        let campo = document.querySelector('#exiba-variavel');
        this._inputNome = campo.options[campo.selectedIndex].text;

        if (this._inputNome == "Escolher...") {
            
            return;
        }

        if (!this._saidaCampo) {

            this._saidaCampo = document.querySelector('#exiba-saida')
            this._saidaCampo.innerHTML = this._inputNome;
        } else {

            this._saidaCampo.innerHTML = this._saidaCampo.value + ',' + this._inputNome;
        }

    }

    adiciona(event) {

        event.preventDefault();

        if (!this._validacoes()) {

            return;
        }

        this._id = this._id + 1;
        this._exiba = this._newExiba();
        this._listExiba.add(this._exiba);

        this._exibaView.update(
            this._exiba,
            this._ul,
            this._ulSe,
            this._idCode
        );

        this._limpaForm();

        $('#modalExiba').modal('hide');
    }

    remove(event) {

        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        li.parentNode.removeChild(li);

        let elemento = Utils.getElement(this._listExiba, li.id);
        this._listExiba.apaga(li.id);
        this._exibaView._consoleRemove(elemento);
    }

    removeAll(elemento, qtd) {

        let li = elemento.lastChild.firstChild;
        this._exibaView._consoleRemoveAll(this._listExiba, li);

        for (let index = 0; index < qtd; index++) {

            li = elemento.lastChild.firstChild;

            li.remove();
            this._listExiba.apaga(li.id);
        }
    }

    _newExiba() {

        return new Exiba(this._saidaCampo.value, this._id, this._idCode);
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
        this._saidaCampo = null;
        Utils.focus('modalExiba', 'exiba-texto');
    }
}