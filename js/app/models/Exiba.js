class Exiba {

    constructor(saida, id) {

        this._saida = saida;
        this._id = id;
        Object.freeze(this);
    }

    get saida(){

        return this._saida;
    }


    get id(){

        return this._id;
    }
}