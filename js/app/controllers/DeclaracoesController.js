class DeclaracoesController {

    constructor() {

        this._inputNome;
        this._inputTipo;
        this._id = -1;
        this._declaracao;
        this._ul;
        this._ulSe = null;
        this._idCode = null;
        this._declaracoesView = new DeclaracoesView();
        this._listDeclaracoes = new ListDeclaracoes();
    }

    setId(event) {

        event.preventDefault();

        try {
            this._ul = event.target.parentElement.children[1];
            let li = this._ul.children[0];

            let elemento = Utils.getElement(this._listDeclaracoes, li.id);
            this._idCode = elemento.idCode;
        } catch{
            return;
        }
    }

    setIdComponenteSe() {

        this._ulSe = seController._ul;
        let li = this._ulSe.children[0];

        let elemento = Utils.getElement(seController._listSe, li.id);
        this._idCode = elemento.idCode;
    }

    adiciona(event) {

        event.preventDefault();

        this._inputNome = document.querySelector('#declaracoes-nome').value;
        this._inputTipo = document.querySelector('#declaracoes-tipo').value;
        this._id = this._id + 1;

        if (!this._validacoes()) {

            return;
        }

        this._declaracao = this._newDeclaracoes();
        this._listDeclaracoes.add(this._declaracao);

        this._declaracoesView.update(
            this._declaracao,
            this._listDeclaracoes,
            this._ul,
            this._ulSe,
            this._idCode);

        this._limpaForm();

        $('#modalDeclare').modal('hide');
    }

    remove(event) {

        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        li.parentNode.removeChild(li);

        let elemento = Utils.getElement(this._listDeclaracoes, li.id);
        this._listDeclaracoes.apaga(li.id);

        this._declaracoesView.atualizaOptions(this._listDeclaracoes);
        this._declaracoesView._consoleRemove(elemento);
    }

    removeAll(elemento, qtd) {

        let li = elemento.lastChild.firstChild;
        this._declaracoesView._consoleRemoveAll(this._listDeclaracoes, li);

        for (let index = 0; index < qtd; index++) {

            li = elemento.lastChild.firstChild;

            this._listDeclaracoes.apaga(li.id);
            this._declaracoesView.atualizaOptions(this._listDeclaracoes);
            li.remove();
        }
    }

    _newDeclaracoes() {

        return new Declaracoes(this._inputNome, this._inputTipo, this._id, this._idCode);
    }

    _validacoes() {

        const regex = /\W/;
        const isDigit = /^\d+$/;

        if (isDigit.test(this._inputNome[0])) {

            bootbox.alert({
                message: 'O nome da variavel não pode ser iniciada com um número! 👨‍🏫',
            });

            return false;
        }

        if (regex.test(this._inputNome)) {

            bootbox.alert({
                message: 'Todo nome deve ser composto apenas por letras, números e sublinhado ( ‘_’ ) 🤓',
            });

            this._inputNome = this._inputNome.replace(/[^a-z0-9_]/gi, '');
        }

        if (this._inputTipo == "Escolher...") {

            bootbox.alert({
                message: 'Escolha o tipo da variavel! 🧐',
                animate: true,
            });

            return false;
        }

        let array = Object.values(this._listDeclaracoes);

        if (array[0].length > 0) {

            $.each(array, function (idx, obj) {
                $.each(obj, function (idx, declaracoes) {

                    array.push(declaracoes.nome);
                });
            });

            if (array.indexOf(this._inputNome, 0) != -1) {

                bootbox.alert({
                    message: 'Você já declarou uma váriavel com este nome! 🕵️‍',
                    animate: true,
                });

                return false;
            }
        }

        return true;
    }

    _limpaForm() {

        this._ulSe = null;
        document.querySelector('#declaracoes-nome').value = '';
        Utils.focus('modalDeclare', 'declaracoes-nome');
    }
}