class DeclaracoesController {

    constructor() {

        this._inputNome;
        this._inputTipo;
        this._id;
        this._declaracao;
        this._declaracoesView = new DeclaracoesView();
        this._listDeclaracoes = new ListDeclaracoes();
    }

    adiciona(event) {

        event.preventDefault();

        this._inputNome = document.querySelector('#declaracoes-nome').value;
        this._inputTipo = document.querySelector('#declaracoes-tipo').value;
        this._id = this._listDeclaracoes.declaracoes.length;

        this._declaracao = this._newDeclaracoes();
        this._listDeclaracoes.add(this._declaracao);
        this._declaracoesView.update(this._declaracao, this._listDeclaracoes);
        this._limpaForm();

        $("#modalDeclare").modal('hide');
    }

    remove(event) {

        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        li.parentNode.removeChild(li);
        
        this._listDeclaracoes.apaga(li.id);
        this._declaracoesView.atualizaOptions(this._listDeclaracoes);
    }

    _newDeclaracoes() {

        return new Declaracoes(this._inputNome, this._inputTipo, this._id);
    }

    _limpaForm() {

        document.querySelector('#declaracoes-nome').value = '';
        Utils.focus('modalDeclare', 'declaracoes-nome');
    }
}