class LeiaController {

    constructor() {

        this._leia;
        this._inputNome;
        this._inputTipo;
        this._id = -1;
        this._ul;
        this._ulSe;
        this._idCode = null;
        this._leiaView = new LeiaView();
        this._listLeia = new ListLeia();
    }

    setId(event) {

        event.preventDefault();

        try {
            this._ul = event.target.parentElement.children[1];
            let li = this._ul.children[0];

            let elemento = Utils.getElement(this._listLeia, li.id);
            this._idCode = elemento.idCode;
        } catch{
            return;
        }
    }

    setIdComponenteSe() {

        this._ulSe = seController._ul;
        addCode('code-leia');
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

        this._leia = this._newLeia();
        this._listLeia.add(this._leia);

        this._leiaView.update(
            this._leia,
            this._ul,
            this._ulSe,
            this._idCode
        );

        $('#modalLeia').modal('hide');
    }

    remove(event) {

        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        li.parentNode.removeChild(li);

        let elemento = Utils.getElement(this._listLeia, li.id);
        this._listLeia.apaga(li.id);
        this._leiaView._consoleRemove(elemento);
    }

    removeAll(elemento, qtd) {

        let li = elemento.lastChild.firstChild;
        this._leiaView._consoleRemoveAll(this._listLeia, li);

        for (let index = 0; index < qtd; index++) {

            li = elemento.lastChild.firstChild;

            li.remove();
            this._listLeia.apaga(li.id);
        }
    }

    _newLeia() {

        return new Leia(
            this._inputNome,
            this._inputTipo,
            this._id,
            this._idCode
        );
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