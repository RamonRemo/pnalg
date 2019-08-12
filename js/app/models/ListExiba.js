class ListExiba {

    constructor() {
        this._exiba = [];
    }

    add(exiba) {

        this._exiba.push(exiba);
    }

    apaga(id) {
        
        let index;

        if (id > -1) {

            this._exiba.forEach(element => {

                if (element.id == id) {

                    index = this._exiba.indexOf(element);
                }
            });

            return this._exiba.splice(index, 1);
        }
    }

    get exiba() {

        return [].concat(this._exiba);
    }
}