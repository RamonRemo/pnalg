/**
* Classe responsável por adicionar comandos de declaração de dados no modelo e na base de dados
* referente a declarações feitas pelo usuário.
*
* @class DeclarationController
* @constructor
*/
class DeclarationController {

    constructor() {
        this._inputName;
        this._inputType;
        this._declaration;
        this._id = -1;
        this._ul;
        this._ulSe = null;
        this._idCode = null;
        this._listDeclaration = new ListDeclarations();
        this._directiveDeclaration = new DirectiveDeclaration();
    }

    setId(event) {
        event.preventDefault();

        try {
            this._ul = event.target.parentElement.children[1];
            let li = this._ul.children[0];
            let elemento = CommonUtils.getElement(this._listDeclaration, li.id);
            this._idCode = elemento.idCode;
        } catch {
            return;
        }
    }

    enterComponentIdIf() {
        this._ulSe = ifController._ul;
        let li = this._ulSe.children[0];

        let elemento = CommonUtils.getElement(ifController._listIf, li.id);
        this._idCode = elemento.idCode;
    }

    toSave(event) {
        event.preventDefault();

        this._inputName = document.querySelector('#name-declarations').value;
        this._inputType = document.querySelector('#type-declarations').value;
        this._id = this._id + 1;

        if (!this._validations()) {
            return;
        }

        this._declaration = this._newDeclaration();
        this._listDeclaration.add(this._declaration);

        this._directiveDeclaration.update(
            this._declaration,
            this._listDeclaration,
            this._ul,
            this._ulSe,
            this._idCode
        );

        this._cleanForm();

        $('#modal-declaration').modal('hide');
    }

    remove(event) {
        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;

        ul.removeChild(li);
        let id = CommonUtils.getNumber(li.id);

        let element = CommonUtils.getElement(this._listDeclaration, id);
        this._listDeclaration.remove(id);


        this._directiveDeclaration.updateOptions(this._listDeclaration);
        this._directiveDeclaration._codeRemove(element, ul);
    }

    removeAll(element, amount) {
        let li = element.lastChild.firstChild;
        this._directiveDeclaration._codeRemoveAll(this._listDeclaration, li);

        for (let index = 0; index < amount; index++) {
            li = element.lastChild.firstChild;
            let id = CommonUtils.getNumber(li.id);

            this._listDeclaration.remove(id);
            this._directiveDeclaration.updateOptions(this._listDeclaration);

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
                message: 'O nome da variável não pode ser iniciada com um número! 👨‍🏫',
            });

            return false;
        }

        if (regex.test(this._inputName)) {
            bootbox.alert({
                message: 'Todo nome deve ser composto apenas por letras, números e sublinhado ( ‘_’ ) 🤓',
            });

            this._inputName = this._inputName.replace(/[^a-z0-9_]/gi, '');
        }

        if (this._inputType === 'Escolher...') {
            bootbox.alert({
                message: 'Escolha o tipo da variável! 🧐',
                animate: true,
            });

            return false;
        }

        let array = Object.values(this._listDeclaration);

        if (array[0].length > 0) {
            $.each(array, function (idx, obj) {
                $.each(obj, function (idx, declaration) {
                    array.push(declaration.name.toLowerCase());
                });
            });

            if (array.indexOf(this._inputName.toLowerCase(), 0) != -1) {
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

        document.querySelector('#name-declarations').value = '';
        CommonUtils.focus('modal-declaration', 'name-declarations');
    }
}