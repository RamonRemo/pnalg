class ListIf {

    constructor() {
        this._iff = [];
    }

    add(iff) {
        this._iff.push(iff);
    }

    apaga(id) {
        let index;

        if (id > -1) {

            this._iff.forEach(element => {
                if (element.id == id) {
                    index = this._iff.indexOf(element);
                }
            });

            return this._iff.splice(index, 1);
        }
    }

    get iff() {
        return [].concat(this._iff);
    }
}