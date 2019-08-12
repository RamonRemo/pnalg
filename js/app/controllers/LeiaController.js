class LeiaController {

    constructor() {

        this._leia;
        this._inputNome;
        this._inputTipo;
        this._id = -1;
        this._leiaView = new LeiaView();
        this._listLeia = new ListLeia();
    }

    addVar(event) {

        event.preventDefault();

        let campo = document.querySelector('#leia-variavel');
        this._inputNome = campo.options[campo.selectedIndex].text;
        this._inputTipo = campo.options[campo.selectedIndex].value;
        this._id = this._id + 1;
    }

    adiciona(event) {

        event.preventDefault();

        if (!this._validacoes()) {

            return;
        }

        console.log(this._inputNome);

        this._leia = this._newLeia();
        this._listLeia.add(this._leia);

        this._leiaView.update(this._leia);

        $('#modalLeia').modal('hide');
    }

    remove(event) {

        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        li.parentNode.removeChild(li);

        this._listLeia.apaga(li.id);
    }

    _newLeia() {

        return new Leia(this._inputNome, this._inputTipo, this._id);
    }

    _validacoes() {

        if (this._inputNome == null || this._inputNome == "Escolher...") {

            bootbox.alert({
                message: 'Qual é a váriavel para leitura?  🤷‍♂️ 🤷‍',
                animate: true,
            });

            return false;
        }

        return true;
    }
}