class ShowOff {

    constructor(output, id, idCode) {
        this._output = output;
        this._id = id;
        this._idCode = idCode;
        Object.freeze(this);
    }

    get output() {
        return this._output;
    }

    get id() {
        return this._id;
    }

    get idCode() {
        return this._idCode;
    }
}