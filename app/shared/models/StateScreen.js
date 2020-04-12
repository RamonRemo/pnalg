class StateScreen {
    constructor(x, petri, context, command) {
        this._x = x;
        this._petri = petri;
        this._context = context;
        this._command = command;
        Object.freeze(this);
    }

    get x() {
        return this._x;
    }

    get petri() {
        return this._petri;
    }

    get context() {
        return this._context;
    }

    get command(){
        return this._command;
    }
}