class AssignmentController {

    constructor() {
        this._inputName;
        this._inputType;
        this._inputValue;
        this._idElement = -1;
        this._ul;
        this._ulSe = null;
        this._idCode = null;
        this._listAssignments = new ListAssignments();
        this._viewAssignments = new ViewAssignments();
    }

    setId(event) {
        event.preventDefault();

        try {
            this._ul = event.target.parentElement.children[1];
            let li = this._ul.children[0];
            let element = Utils.getElement(this._listAssignments, li.id);
            this._idCode = element.idCode;
        } catch {
            return;
        }
    }

    arrowIdComponentSE() {
        this._ulSe = ifController._ul;
        addCode('code-atribuicao');

        let li = this._ulSe.children[0];
        let element = Utils.getElement(ifController._listIf, li.id);

        this._idCode = element.idCode;
    }

    toSave(event) {
        event.preventDefault();

        let field = document.querySelector('#atribuicao-nome');

        this._inputName = field.options[field.selectedIndex].text;
        this._inputType = field.options[field.selectedIndex].value;
        this._inputValue = this._getValor();
        this._idElement = this._idElement + 1;

        if (!this._validations()) {
            return;
        }

        let assignment = this._newAssignments();
        this._listAssignments.add(assignment);

        this._viewAssignments.update(
            assignment,
            this._ul,
            this._ulSe,
            this._idCode
        );

        this._cleanForm();

        $('#modalAtribuicao').modal('hide');
    }

    remove(event) {
        event.preventDefault();

        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;

        ul.removeChild(li);
        let id = Utils.getNumber(li.id);

        let element = Utils.getElement(this._listAssignments, id);
        this._listAssignments.remove(element.id);

        this._viewAssignments._codeRemove(element, ul);
    }

    removeAll(element, amount) {
        let li = element.lastChild.firstChild;
        this._viewAssignments._codeRemoveAll(this._listAssignments, li);

        for (let index = 0; index < amount; index++) {
            li = element.lastChild.firstChild;
            let id = Utils.getNumber(li.id);
            this._listAssignments.remove(id);

            li.remove();
        }
    }

    openForm(event) {
        event.preventDefault();

        let field = document.querySelector('#atribuicao-nome');
        let type = field.options[field.selectedIndex].value;

        switch (type) {
            case 'inteiro':
                let typeInt = document.getElementById('inteiro');
                this._dysplayNone(typeInt);
                break;

            case 'real':
                let typeFloat = document.getElementById('real');
                this._dysplayNone(typeFloat);
                break;

            case 'caractere':
                let typeChar = document.getElementById('caractere');
                this._dysplayNone(typeChar);
                break;

            case 'logico':
                let typeBoolean = document.getElementById('logico');
                this._dysplayNone(typeBoolean);
                break;
        }
    }

    _getValor() {
        let $ = document.querySelector.bind(document);

        switch (this._inputType) {
            case 'inteiro':
                return $('#atribuicaoValorInt');

            case 'real':
                return $('#atribuicaoValorFloat');

            case 'caractere':
                return $('#atribuicaoValorChar');

            case 'logico':
                return $('#atribuicaoValorBoolean');
        }
    }

    _newAssignments() {
        return new Assignment(
            this._inputName,
            this._inputType,
            this._inputValue.value,
            this._idElement,
            this._idCode
        );
    }

    _validations() {
        if (this._inputName == "Escolher...") {
            bootbox.alert({
                message: 'Qual é a váriavel para atribuir o valor? 🤷‍♂️ 🤷‍',
                animate: true,
            });

            return false;
        }

        if (!this._inputValue.value) {
            bootbox.alert({
                message: 'Qual é o valor para atribuição? 🤷‍♂️🤷‍',
                animate: true,
            });

            return false;
        }

        return true;
    }

    _cleanForm() {
        this._ulSe = null;
        this._inputValue.value = '';

        Utils.focus('modalAtribuicao', 'atribuicao-nome');
    }

    _dysplayNone(type) {
        let $ = document.querySelector.bind(document);

        let typeInt = $('#inteiro');
        let typeFloat = $('#real');
        let typeChar = $('#caractere');
        let typeBoolean = $('#logico');

        typeInt.style.display = 'none';
        typeFloat.style.display = 'none';
        typeChar.style.display = 'none';
        typeBoolean.style.display = 'none';

        type.style.display = 'block';
    }
}