class DeclarationController {

    constructor() {
        this._inputName;
        this._inputType;
        this._declaration;
        this._id = -1;
        this._ul;
        this._ulSe = null;
        this._idCode = null;
        this._viewDeclaration = new ViewDeclaration();
        this._listDeclaration = new ListDeclarations();
    }

    setId(event) {

        event.preventDefault();

        try {

            this._ul = event.target.parentElement.children[1];
            let li = this._ul.children[0];
            let elemento = Utils.getElement(this._listDeclaration, li.id);
            this._idCode = elemento.idCode;

        } catch {
            return;
        }
    }

    arrowIdComponentSE() {
        this._ulSe = ifController._ul;
        let li = this._ulSe.children[0];

        let elemento = Utils.getElement(ifController._listIf, li.id);
        this._idCode = elemento.idCode;
    }

    toSave(event) {
        event.preventDefault();

        this._inputName = document.querySelector('#declaracoes-nome').value;
        this._inputType = document.querySelector('#declaracoes-tipo').value;
        this._id = this._id + 1;

        if (!this._validations()) {
            return;
        }

        this._declaration = this._newDeclaration();
        this._listDeclaration.add(this._declaration);

        this._viewDeclaration.update(
            this._declaration,
            this._listDeclaration,
            this._ul,
            this._ulSe,
            this._idCode
        );

        this._cleanForm();

        $('#modalDeclare').modal('hide');
    }

    remove(event) {
        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;

        ul.removeChild(li);
        let id = Utils.getNumber(li.id);

        let element = Utils.getElement(this._listDeclaration, id);
        this._listDeclaration.remove(id);


        this._viewDeclaration.updateOptions(this._listDeclaration);
        this._viewDeclaration._codeRemove(element, ul);
    }

    removeAll(element, amount) {
        let li = element.lastChild.firstChild;
        this._viewDeclaration._codeRemoveAll(this._listDeclaration, li);

        for (let index = 0; index < amount; index++) {
            li = element.lastChild.firstChild;
            let id = Utils.getNumber(li.id);

            this._listDeclaration.remove(id);
            this._viewDeclaration.updateOptions(this._listDeclaration);

            li.remove();
        }
    }

    _newDeclaration() {
        return new Declaration(
            this._inputName,
            this._inputType,
            this._id,
            this._idCode
        );
    }

    _validations() {
        const regex = /\W/;
        const isDigit = /^\d+$/;

        if (isDigit.test(this._inputName[0])) {
            bootbox.alert({
                message: 'O nome da variavel não pode ser iniciada com um número! 👨‍🏫',
            });

            return false;
        }

        if (regex.test(this._inputName)) {
            bootbox.alert({
                message: 'Todo nome deve ser composto apenas por letras, números e sublinhado ( ‘_’ ) 🤓',
            });

            this._inputName = this._inputName.replace(/[^a-z0-9_]/gi, '');
        }

        if (this._inputType === "Escolher...") {
            bootbox.alert({
                message: 'Escolha o tipo da variavel! 🧐',
                animate: true,
            });

            return false;
        }

        let array = Object.values(this._listDeclaration);
        if (array[0].length > 0) {

            $.each(array, function(idx, obj) {
                $.each(obj, function(idx, declaration) {
                    array.push(declaration.name);
                });
            });

            if (array.indexOf(this._inputName, 0) != -1) {
                bootbox.alert({
                    message: 'Você já declarou uma váriavel com este nome! 🕵️‍',
                    animate: true,
                });

                return false;
            }
        }

        return true;
    }

    _cleanForm() {
        this._ulSe = null;
        document.querySelector('#declaracoes-nome').value = '';

        Utils.focus('modalDeclare', 'declaracoes-nome');
    }
}