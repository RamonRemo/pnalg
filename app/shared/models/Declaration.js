class Declaration {

    constructor(name, type, id, idCode) {
        this._name = name;
        this._type = type;
        this._id = id;
        this._idCode = idCode;
        Object.freeze(this);
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get id() {
        return this._id;
    }

    get idCode() {
        return this._idCode;
    }
}