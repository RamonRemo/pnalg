class SeController {

    constructor() {

        this._se;
        this._var1_nome;
        this._var1_tipo;
        this._var2_nome;
        this._var2_tipo;
        this._relacional;
        this._id = -1;
        this._ul;
        this._idCode = null;
        this._seView = new SeView();
        this._listSe = new ListSe();
    }

    setId(event) {

        event.preventDefault();

        try {
            this._ul = event.target.parentElement.children[1];
            let li = this._ul.children[0];

            let elemento = Utils.getElement(this._listSe, li.id);
            this._idCode = elemento.idCode;
        } catch{
            return;
        }
    }

    adiciona(event) {

        event.preventDefault();

        this._setaVar();

        if (!this._validacoes()) {

            return;
        }

        this._se = this._newSe();
        this._listSe.add(this._se);

        this._seView.update(this._se, this._ul, this._idCode);
    }

    remove(event) {

        event.preventDefault();

        let li = event.target.parentNode.parentNode;

        li.parentNode.removeChild(li);

        let elemento = Utils.getElement(this._listSe, li.id);
        this._listSe.apaga(li.id);
        this._seView._consoleRemove(elemento);
    }

    habilitaButtons(event) {

        event.preventDefault();

        $(event.target).attr('disabled', 'disabled');
        $('#open-modal').find('.btn').removeAttr('disabled');

        this.adiciona(event);
    }

    _setaVar() {

        let campo = document.querySelector('#se-variavel');

        this._var1_nome = campo.options[campo.selectedIndex].text;
        this._var1_tipo = campo.options[campo.selectedIndex].value;

        let campo2 = document.querySelector('#se-variavel-secundaria');

        this._var2_nome = campo2.options[campo2.selectedIndex].text;
        this._var2_tipo = campo2.options[campo2.selectedIndex].value;

        let relacional = document.querySelector('#se-relacionais');

        this._relacional = relacional.options[relacional.selectedIndex].text;

        this._id = this._id + 1;
    }

    _newSe() {

        return new Se(
            this._var1_nome,
            this._var1_tipo,
            this._var2_nome,
            this._var2_tipo,
            this._relacional,
            this._id,
            this._ul,
            this._idCode
        );
    }

    _validacoes() {

        if (
            (this._var1_nome == null || this._var1_nome == "Escolher...") ||
            (this._var2_nome == null || this._var2_nome == "Escolher...") ||
            (this._relacional == null || this._relacional == "Escolher...")
        ) {

            bootbox.alert({
                message: 'O que iremos comparar? 🤷‍🤷‍',
                animate: true,
            });

            return false;
        }

        return true;
    }
}