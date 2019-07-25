class DeclaracoesController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputNome = $('#declaracoes-nome');
        this._inputTipo = $('#declaracoes-tipo');
        this._listDeclaracoes = new ListDeclaracoes();
    }

    adiciona(event) {

        event.preventDefault();

        let declaracao = this._newDeclaracoes();
        this._listDeclaracoes.add(declaracao);
        this._limpaForm();

        $("#modalDeclare").modal('hide');
        declaracao.printObject();
        declaracao.insereEmAtribuicoesOptions();
    }

    _newDeclaracoes() {

        return new Declaracoes(this._inputNome.value, this._inputTipo.value);
    }

    _limpaForm() {

        this._inputNome.value = '';
        Utils.focus('modalDeclare', 'declaracoes-nome');
    }
}