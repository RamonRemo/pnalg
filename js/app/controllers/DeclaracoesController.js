class DeclaracoesController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputNome = $('#declaracoes-nome');
        this._inputTipo = $('#declaracoes-tipo');
        this._declaracao;
        this._declaracoesView = new DeclaracoesView();
        this._listDeclaracoes = new ListDeclaracoes();
    }

    adiciona(event) {

        event.preventDefault();

        this._declaracao = this._newDeclaracoes();
        this._listDeclaracoes.add(this._declaracao);

        this._declaracoesView.update(this._declaracao, this._listDeclaracoes);
        this._limpaForm();

        $("#modalDeclare").modal('hide');
    }

    remove(event) {

        event.preventDefault();
        this._listDeclaracoes.apaga(this._declaracao);
        View.updateOptions(this._listDeclaracoes, 'atribuicao-nome');

        let li = event.target.parentNode.parentNode;
        li.parentNode.removeChild(li);
    }

    _newDeclaracoes() {

        return new Declaracoes(this._inputNome.value, this._inputTipo.value);
    }

    _limpaForm() {

        this._inputNome.value = '';
        Utils.focus('modalDeclare', 'declaracoes-nome');
    }
}