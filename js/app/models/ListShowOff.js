class ListShowOff {

    constructor() {
        this._showOff = [];
    }

    add(showOff) {
        this._showOff.push(showOff);
    }

    remove(id) {
        let index;

        if (id > -1) {

            this._showOff.forEach(element => {
                if (element.id == id) {
                    index = this._showOff.indexOf(element);
                }
            });

            return this._showOff.splice(index, 1);
        }
    }

    get showOff() {
        return [].concat(this._showOff);
    }
}