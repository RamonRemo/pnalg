class AtribuicoesController {

    constructor() {

        this._inputNome;
        this._inputTipo;
        this._inputValor;
        this._listAtribuicoes = new ListAtribuicoes();
    }

    adiciona(event) {
        event.preventDefault();

        let campo = document.querySelector('#atribuicao-nome');
        this._inputNome = campo.options[campo.selectedIndex].text;
        this._inputTipo = campo.options[campo.selectedIndex].value;
        this._inputValor = this._getValor();

        let atribuicao = this._newAtribuicoes();

        this._listAtribuicoes.add(atribuicao);
        console.log(this._listAtribuicoes);
        this._limpaForm();

        $("#modalAtribuicao").modal('hide');
        atribuicao.printObject();
    }

    _getValor() {

        let $ = document.querySelector.bind(document);

        switch (this._inputTipo) {

            case 'inteiro':
                return $('#atribuicaoValorInt');

            case 'real':
                return $('#atribuicaoValorFloat');

            case 'caractere':
                return $('#atribuicaoValorChar');

            case 'logico':
                return $('#atribuicaoValorBoolean');
        }
    }

    _newAtribuicoes() {

        return new Atribuicoes(this._inputNome, this._inputTipo, this._inputValor.value);
    }

    _limpaForm() {

        this._inputValor.value = '';
        Utils.focus('modalAtribuicao', 'atribuicao-nome');
    }
}