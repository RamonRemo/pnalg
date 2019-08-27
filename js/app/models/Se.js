class Se {

    constructor(var1_nome, var1_tipo, var2_nome, var2_tipo, relacionais, id, ul, idCode) {

        this._var1_nome = var1_nome;
        this._var1_tipo = var1_tipo;
        this._var2_nome = var2_nome;
        this._var2_tipo = var2_tipo;
        this._relacionais = relacionais;
        this._id = id;
        this._ul = ul;
        this._idCode = idCode;
        Object.freeze(this);
    }

    get var1_nome() {

        return this._var1_nome;
    }

    get var1_tipo() {

        return this._var1_tipo;
    }

    get var2_nome() {

        return this._var2_nome;
    }

    get var2_tipo() {

        return this._var2_tipo;
    }

    get relacionais() {

        return this._relacionais;
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