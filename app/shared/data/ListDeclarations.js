class ListDeclarations {

    constructor() {
        this._declaration = [];
    }

    add(declaration) {
        this._declaration.push(declaration);
    }

    remove(id) {
        let index;

        if (id > -1) {

            this._declaration.forEach(element => {
                if (element.id == id) {
                    index = this._declaration.indexOf(element);
                }
            });

            return this._declaration.splice(index, 1);
        }
    }

    get declaration() {
        return [].concat(this._declaration);
    }
}