class DeclaracoesController {

    constructor() {

        this._inputNome;
        this._inputTipo;
        this._declaracao;
        this._declaracoesView = new DeclaracoesView();
        this._listDeclaracoes = new ListDeclaracoes();
    }

    adiciona(event) {

        event.preventDefault();

        this._inputNome = document.querySelector('#declaracoes-nome').value;
        this._inputTipo = document.querySelector('#declaracoes-tipo').value;

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
        View.updateOptions(this._listDeclaracoes, 'exiba-variavel');
        View.updateOptions(this._listDeclaracoes, 'leia-variavel');

        let li = event.target.parentNode.parentNode;
        li.parentNode.removeChild(li);
    }

    _newDeclaracoes() {

        return new Declaracoes(this._inputNome, this._inputTipo);
    }

    _limpaForm() {

        this._inputNome = '';
        Utils.focus('modalDeclare', 'declaracoes-nome');
    }
}