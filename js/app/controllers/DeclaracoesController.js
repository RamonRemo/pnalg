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

        if (!this._validacoes()) {

            return;
        }

        this._declaracao = this._newDeclaracoes();
        this._listDeclaracoes.add(this._declaracao);
        this._declaracoesView.update(this._declaracao, this._listDeclaracoes);
        this._limpaForm();

        $('#modalDeclare').modal('hide');
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

    _validacoes() {

        const regex = /\W|_/;

        if (regex.test(this._inputNome)) {

            bootbox.alert({
                message: 'Todo nome deve ser composto apenas por letras, números e sublinhado ( ‘_’ ) 🤓',
            });

            this._inputNome = this._inputNome.replace(/[^a-z0-9]/gi, '');
        }

        if (this._inputTipo == "Escolher...") {

            bootbox.alert({
                message: 'Escolha o tipo da variavel 🧐',
                animate: true,
            });

            return false;
        }

        return true;
    }

    _limpaForm() {

        document.querySelector('#declaracoes-nome').value = '';
        Utils.focus('modalDeclare', 'declaracoes-nome');
    }
}