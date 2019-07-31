class LeiaController {

    constructor() {

        this._leia;
        this._inputNome;
        this._inputTipo;
        this._leiaView = new LeiaView();
        this._listLeia = new ListLeia();
    }

    addVar(event) {

        event.preventDefault();

        let campo = document.querySelector('#leia-variavel');
        this._inputNome = campo.options[campo.selectedIndex].text;
        this._inputTipo = campo.options[campo.selectedIndex].value;
    }

    adiciona(event) {

        event.preventDefault();

        this._leia = this._newLeia();
        this._listLeia.add(this._leia);

        this._leiaView.update(this._leia);

        $("#modalLeia").modal('hide');
    }

    remove(event) {

        event.preventDefault();

        this._listLeia.apaga(this._leia);

        let li = event.target.parentNode.parentNode;
        li.parentNode.removeChild(li);
    }

    _newLeia() {

        return new Leia(this._inputNome, this._inputTipo);
    }
}