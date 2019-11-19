class IfController {

    constructor() {
        this._if;
        this._var1_name;
        this._var1_type;
        this._var2_name;
        this._var2_type;
        this._conditional;
        this._ul;
        this._id = -1;
        this._idCode = null;
        this._listIf = new ListIf();
        this._directiveIf = new DirectiveIf();
    }

    setId(event) {
        event.preventDefault();

        try {

            this._ul = event.target.parentElement.children[1];
            let li = this._ul.children[0];
            let elemento = CommonUtils.getElement(this._listIf, li.id);
            this._idCode = elemento.idCode;

        } catch {
            return;
        }
    }

    toSave(event) {
        event.preventDefault();

        this._setaVar();

        if (!this._validations()) {
            return;
        }

        this._if = this._newIf();
        this._listIf.add(this._if);

        this._directiveIf.update(
            this._if,
            this._ul,
            this._idCode
        );
    }

    remove(event) {
        event.preventDefault();

        let li = event.target.parentNode.parentNode;

        let element = CommonUtils.getElement(this._listIf, li.id);
        this._listIf.apaga(element.id);

        let spans = li.parentNode.children;
        let array = $.makeArray(spans);
        array = array.splice(1, array.length - 1);

        array.forEach(list => {
            let div = $.makeArray(list.children);

            div.forEach(element => {
                let span = element.children;
                $(span).trigger('click');
            });
        });

        let node = li.parentNode.parentNode;
        node.parentNode.removeChild(node);

        this._directiveIf._codeRemove(element);
    }

    enableButtons(event) {
        event.preventDefault();

        $(event.target).attr('disabled', 'disabled');
        $('#open-modal').find('.btn').removeAttr('disabled');

        this.toSave(event);
    }

    _setaVar() {
        let field = document.querySelector('#se-variavel');
        this._var1_name = field.options[field.selectedIndex].text;
        this._var1_type = field.options[field.selectedIndex].value;

        let field2 = document.querySelector('#se-variavel-secundaria');
        this._var2_name = field2.options[field2.selectedIndex].text;
        this._var2_type = field2.options[field2.selectedIndex].value;

        let conditional = document.querySelector('#se-relacionais');
        this._conditional = conditional.options[conditional.selectedIndex].text;

        this._id = this._id + 1;
    }

    _newIf() {
        return new If(
            this._var1_name,
            this._var1_type,
            this._var2_name,
            this._var2_type,
            this._conditional,
            this._id,
            this._ul,
            this._idCode
        );
    }

    _validations() {
        if ((this._var1_name == null || this._var1_name === 'Escolher...') ||
            (this._var2_name == null || this._var2_name === 'Escolher...') ||
            (this._conditional == null || this._conditional === 'Escolher...')) {

            bootbox.alert({
                message: 'O que iremos comparar? 🤷‍🤷‍',
                animate: true,
            });

            return false;
        }

        return true;
    }
}