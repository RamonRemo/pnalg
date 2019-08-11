class AtribuicoesController {

    constructor() {

        this._inputNome;
        this._inputTipo;
        this._inputValor;
        this._id;
        this._listAtribuicoes = new ListAtribuicoes();
        this._atribuicoesView = new AtribuicoesView();
    }

    adiciona(event) {
        event.preventDefault();

        let campo = document.querySelector('#atribuicao-nome');

        this._inputNome = campo.options[campo.selectedIndex].text;
        this._inputTipo = campo.options[campo.selectedIndex].value;
        this._inputValor = this._getValor();
        this._id = document.getElementById('atribuicoes').children.length;

        if (!this._validacoes()) {

            return;
        }

        let atribuicao = this._newAtribuicoes();
        this._listAtribuicoes.add(atribuicao);

        this._atribuicoesView.update(atribuicao, this._listAtribuicoes);
        this._limpaForm();

        $('#modalAtribuicao').modal('hide');
    }

    remove(event) {

        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        li.parentNode.removeChild(li);

        this._listAtribuicoes.apaga(li.id);
    }

    abreForm(event) {

        event.preventDefault();

        let campo = document.querySelector('#atribuicao-nome');
        let tipo = campo.options[campo.selectedIndex].value;

        switch (tipo) {

            case 'inteiro':
                let tipoInt = document.getElementById('inteiro');
                this._dysplayNone(tipoInt);
                break;

            case 'real':
                let tipoReal = document.getElementById('real');
                this._dysplayNone(tipoReal);
                break;

            case 'caractere':
                let tipoCaractere = document.getElementById('caractere');
                this._dysplayNone(tipoCaractere);
                break;

            case 'logico':
                let tipoLogico = document.getElementById('logico');
                this._dysplayNone(tipoLogico);
                break;
        }
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

        return new Atribuicoes(this._inputNome, this._inputTipo, this._inputValor.value, this._id);
    }

    _validacoes() {

        if (this._inputNome == "Escolher...") {

            bootbox.alert({
                message: 'Qual é a váriavel para atribuir o valor? 🤷‍♂️ 🤷‍',
                animate: true,
            });

            return false;
        }

        if (!this._inputValor.value) {

            bootbox.alert({
                message: 'Qual é o valor para atribuição? 🤷‍♂️🤷‍',
                animate: true,
            });

            return false;
        }

        return true;
    }

    _limpaForm() {

        this._inputValor.value = '';
        Utils.focus('modalAtribuicao', 'atribuicao-nome');
    }

    _dysplayNone(tipo) {
        let $ = document.querySelector.bind(document);

        let tipoInt = $('#inteiro');
        let tipoReal = $('#real');
        let tipoCaractere = $('#caractere');
        let tipoLogico = $('#logico');

        tipoInt.style.display = 'none';
        tipoReal.style.display = 'none';
        tipoCaractere.style.display = 'none';
        tipoLogico.style.display = 'none';

        tipo.style.display = 'block';
    }
}