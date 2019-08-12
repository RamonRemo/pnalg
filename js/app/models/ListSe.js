class ListSe {

    constructor() {
        this._se = [];
    }

    add(se) {

        this._se.push(se);
    }

    apaga(id) {
        
        let index;

        if (id > -1) {

            this._se.forEach(element => {

                if (element.id == id) {

                    index = this._se.indexOf(element);
                }
            });

            return this._se.splice(index, 1);
        }
    }


    get se() {

        return [].concat(this._se);
    }
}