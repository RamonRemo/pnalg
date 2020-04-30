/**
* Classe responsável por adicionar comandos de exibição de dados no modelo e na base de dados
* referente a exibições feitas pelo usuário.
*
* @class ShowOffController
* @constructor
*/
class ShowOffController {

    constructor() {
        this._outputField = null;
        this._showOff;
        this._inputName;
        this._text;
        this._id = -1;
        this._ul;
        this._ulSe;
        this._idCode = null;
        this._listShowOff = new ListShowOff();
        this._directiveShowOff = new DirectiveShowOff();
    }

    setId(event) {
        event.preventDefault();

        try {
            this._ul = event.target.parentElement.children[1];
            let li = this._ul.children[0];
            let elemento = CommonUtils.getElement(this._listShowOff, li.id);
            this._idCode = elemento.idCode;
        } catch {
            return;
        }
    }

    enterComponentIdIf() {
        this._ulSe = ifController._ul;
        addCode('code-exiba');

        let li = this._ulSe.children[0];

        let elemento = CommonUtils.getElement(ifController._listIf, li.id);
        this._idCode = elemento.idCode;
    }

    catch(event) {
        event.preventDefault();

        this._outputField = document.querySelector('#show-off');

        if (!event.target.value) {
            this._text = null;
            return;
        }

        this._text = `"${event.target.value}"`;
        this._outputField.innerHTML = this._text;
    }

    addVar(event) {
        event.preventDefault();

        this._outputField = document.querySelector('#show-off');
        this._outputField.innerHTML = ' ';

        let field = document.querySelector('#display-variable');
        this._inputName = field.options[field.selectedIndex].text;

        if (this._inputName === 'Escolher...') {
            return;
        }

        if (!this._outputField) {
            this._outputField = document.querySelector('#show-off')
            this._outputField.innerHTML = this._inputName;
            return;
        }

        if (this._text) {
            this._outputField.innerHTML = `${this._text}, ${this._inputName}`;
            return;
        }

        this._outputField.innerHTML = this._inputName;
    }

    toSave(event) {
        event.preventDefault();

        if (!this._validations()) {
            return;
        }

        this._id = this._id + 1;
        this._showOff = this._newShowOff();
        this._listShowOff.add(this._showOff);

        this._directiveShowOff.update(
            this._showOff,
            this._ul,
            this._ulSe,
            this._idCode
        );

        this._cleanForm();

        $('#modal-display').modal('hide');
    }

    remove(event) {
        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;

        ul.removeChild(li);
        let id = CommonUtils.getNumber(li.id);
        let element = CommonUtils.getElement(this._listShowOff, id);

        this._listShowOff.remove(id);

        this._directiveShowOff._codeRemove(element, ul);
    }

    removeAll(element, amount) {
        let li = element.lastChild.firstChild;
        this._directiveShowOff._codeRemoveAll(this._listShowOff, li);

        for (let index = 0; index < amount; index++) {
            li = element.lastChild.firstChild;

            let id = CommonUtils.getNumber(li.id);
            this._listShowOff.remove(id);

            li.remove();
        }
    }

    _newShowOff() {
        return new ShowOff(
            this._outputField.value,
            this._id,
            this._idCode
        );
    }

    _validations() {
        if (!this._outputField || !this._outputField.value) {
            bootbox.alert({
                message: 'O que iremos exibir? 🤷‍🤷‍',
                animate: true,
            });

            return false;
        }

        return true;
    }

    _cleanForm() {
        this._ulSe = null;
        this._outputField.innerHTML = '';
        this._outputField = null;

        CommonUtils.focus('modal-display', 'display-text');
    }
}