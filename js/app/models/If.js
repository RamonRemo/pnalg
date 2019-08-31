class If {

    constructor(var1_name, var1_type, var2_name, var2_type, conditional, id, ul, idCode) {
        this._var1_name = var1_name;
        this._var1_type = var1_type;
        this._var2_name = var2_name;
        this._var2_type = var2_type;
        this._conditional = conditional;
        this._id = id;
        this._ul = ul;
        this._idCode = idCode;
        Object.freeze(this);
    }

    get var1_name() {
        return this._var1_name;
    }

    get var1_type() {
        return this._var1_type;
    }

    get var2_name() {
        return this._var2_name;
    }

    get var2_type() {
        return this._var2_type;
    }

    get conditional() {
        return this._conditional;
    }

    get id() {
        return this._id;
    }

    get ul() {
        return this._ul;
    }

    get idCode() {
        return this._idCode;
    }
}