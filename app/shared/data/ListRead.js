class ListRead {

    constructor() {
        this._read = [];
    }

    add(read) {
        this._read.push(read);
    }

    remove(id) {
        let index;

        if (id > -1) {

            this._read.forEach(element => {
                if (element.id == id) {
                    index = this._read.indexOf(element);
                }
            });

            return this._read.splice(index, 1);
        }
    }

    get read() {
        return [].concat(this._read);
    }
}