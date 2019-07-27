class ListExiba {

    constructor() {
        this._exiba = [];
    }

    add(exiba) {

        this._exiba.push(exiba);
    }

    get exiba() {

        return [].concat(this._exiba);
    }
}