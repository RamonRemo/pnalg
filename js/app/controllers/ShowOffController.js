class ShowOffController {

    constructor() {
        this._outputField = null;
        this._showOff;
        this._inputName;
        this._id = -1;
        this._ul;
        this._ulSe;
        this._idCode = null;
        this._viewShowOff = new ViewShowOff();
        this._listShowOff = new ListShowOff();
    }

    setId(event) {
        event.preventDefault();

        try {

            this._ul = event.target.parentElement.children[1];
            let li = this._ul.children[0];
            let elemento = Utils.getElement(this._listShowOff, li.id);
            this._idCode = elemento.idCode;

        } catch {
            return;
        }
    }

    arrowIdComponentSE() {
        this._ulSe = ifController._ul;
        addCode('code-exiba');

        let li = this._ulSe.children[0];

        let elemento = Utils.getElement(ifController._listIf, li.id);
        this._idCode = elemento.idCode;
    }

    catch (event) {
        event.preventDefault();
        this._outputField = document.querySelector('#exiba-saida')
        this._outputField.innerHTML = `"${event.target.value}"`;
    }

    addVar(event) {
        event.preventDefault();

        let field = document.querySelector('#exiba-variavel');
        this._inputName = field.options[field.selectedIndex].text;

        if (this._inputName === "Escolher...") {
            return;
        }

        if (!this._outputField) {
            this._outputField = document.querySelector('#exiba-saida')
            this._outputField.innerHTML = this._inputName;
        } else {
            this._outputField.innerHTML = this._outputField.value + ',' + this._inputName;
        }

    }

    toSave(event) {
        event.preventDefault();

        if (!this._validations()) {
            return;
        }

        this._id = this._id + 1;
        this._showOff = this._newShowOff();
        this._listShowOff.add(this._showOff);

        this._viewShowOff.update(
            this._showOff,
            this._ul,
            this._ulSe,
            this._idCode
        );

        this._cleanForm();

        $('#modalExiba').modal('hide');
    }

    remove(event) {
        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;

        ul.removeChild(li);
        let id = Utils.getNumber(li.id);
        let element = Utils.getElement(this._listShowOff, id);

        this._listShowOff.remove(id);
        this._viewShowOff._codeRemove(element, ul);
    }

    removeAll(element, amount) {

        let li = element.lastChild.firstChild;
        this._viewShowOff._codeRemoveAll(this._listShowOff, li);

        for (let index = 0; index < amount; index++) {
            li = element.lastChild.firstChild;

            let id = Utils.getNumber(li.id);
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

        Utils.focus('modalExiba', 'exiba-texto');
    }
}