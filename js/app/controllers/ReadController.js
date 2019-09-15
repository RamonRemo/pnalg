class ReadController {

    constructor() {
        this._read;
        this._inputName;
        this._inputType;
        this._id = -1;
        this._ul;
        this._ulSe;
        this._idCode = null;
        this._viewRead = new ViewRead();
        this._listRead = new ListRead();
    }

    setId(event) {
        event.preventDefault();

        try {

            this._ul = event.target.parentElement.children[1];
            let li = this._ul.children[0];
            let elemento = Utils.getElement(this._listRead, li.id);
            this._idCode = elemento.idCode;

        } catch {
            return;
        }
    }

    arrowIdComponentSE() {
        this._ulSe = ifController._ul;
        addCode('code-leia');

        let li = this._ulSe.children[0];

        let elemento = Utils.getElement(ifController._listIf, li.id);
        this._idCode = elemento.idCode;
    }

    addVar(event) {
        event.preventDefault();

        let field = document.querySelector('#leia-variavel');
        this._inputName = field.options[field.selectedIndex].text;
        this._inputType = field.options[field.selectedIndex].value;
        this._id = this._id + 1;
    }

    toSave(event) {
        event.preventDefault();

        if (!this._validations()) {
            return;
        }

        this._read = this._newRead();
        this._listRead.add(this._read);

        this._viewRead.update(
            this._read,
            this._ul,
            this._ulSe,
            this._idCode
        );

        this._ulSe = null;

        $('#modalLeia').modal('hide');
    }

    remove(event) {
        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;

        ul.removeChild(li);
        let id = Utils.getNumber(li.id);
        let element = Utils.getElement(this._listRead, id);

        this._listRead.remove(id);
        this._viewRead._codeRemove(element, ul);
    }

    removeAll(element, amount) {
        let li = element.lastChild.firstChild;
        this._viewRead._codeRemoveAll(this._listRead, li);

        for (let index = 0; index < amount; index++) {
            li = element.lastChild.firstChild;
            this._listRead.remove(li.id);

            li.remove();
        }
    }

    _newRead() {
        return new Read(
            this._inputName,
            this._inputType,
            this._id,
            this._idCode
        );
    }

    _validations() {

        if (this._inputName == null || this._inputName == "Escolher...") {
            bootbox.alert({
                message: 'Qual é a váriavel para leitura?  🤷‍♂️ 🤷‍',
                animate: true,
            });

            return false;
        }

        return true;
    }
}