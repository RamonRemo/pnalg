class Se {

    constructor(var1_nome, var1_tipo, var2_nome, var2_tipo, relacionais, id) {

        this._var1_nome = var1_nome;
        this._var1_tipo = var1_tipo;
        this._var2_nome = var2_nome;
        this._var2_tipo = var2_tipo;
        this._relacionais = relacionais;
        this._id = id;
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
}