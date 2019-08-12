class ListLeia {

    constructor() {
        this._leia = [];
    }

    add(leia) {

        this._leia.push(leia);
    }

    apaga(id) {
        
        let index;

        if (id > -1) {

            this._leia.forEach(element => {

                if (element.id == id) {

                    index = this._leia.indexOf(element);
                }
            });

            return this._leia.splice(index, 1);
        }
    }


    get leia() {

        return [].concat(this._leia);
    }
}