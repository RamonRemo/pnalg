class ListAssignments {

    constructor() {
        this._assignments = [];
    }

    add(assignment) {
        this._assignments.push(assignment);
    }

    remove(id) {
        let index;

        if (id > -1) {

            this._assignments.forEach(element => {
                if (element.id == id) {
                    index = this._assignments.indexOf(element);
                }
            });

            return this._assignments.splice(index, 1);
        }
    }


    get assignments() {
        return [].concat(this._assignments);
    }
}