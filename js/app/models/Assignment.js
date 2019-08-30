class Assignment {

    constructor(name, type, value, id, idCode) {
        this._name = name;
        this._type = type;
        this._value = value;
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

    get value() {
        return this._value;
    }

    get id() {
        return this._id;
    }

    get idCode() {
        return this._idCode;
    }
}