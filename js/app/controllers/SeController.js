class SeController {

    constructor() {

        this._se;
        this._var1_nome;
        this._var1_tipo;
        this._var2_nome;
        this._var2_tipo;
        this._relacional;
        this._id;
        this._seView = new SeView();
        this._listSe = new ListSe();
    }

    adiciona(event) {

        event.preventDefault();

        this._setaVar();
        this._se = this._newSe();
        this._listSe.add(this._se);

        this._seView.update(this._se);

        $('#modalSe').modal('hide');
    }

    remove(event) {

        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        li.parentNode.removeChild(li);

        this._listSe.apaga(li.id);
    }

    _setaVar() {

        let campo = document.querySelector('#se-variavel');
        this._var1_nome = campo.options[campo.selectedIndex].text;
        this._var1_tipo = campo.options[campo.selectedIndex].value;
        console.log(this._var1_nome);
        let campo2 = document.querySelector('#se-variavel-secundaria');
        this._var2_nome = campo2.options[campo2.selectedIndex].text;
        this._var2_tipo = campo2.options[campo2.selectedIndex].value;

        let relacional = document.querySelector('#se-relacionais');
        this._relacional = relacional.options[relacional.selectedIndex].text;

        this._id = document.getElementById('se').children.length;
    }

    _newSe() {

        return new Se(this._var1_nome, this._var1_tipo, this._var2_nome, this._var2_tipo, this._relacional, this._id);
    }
}