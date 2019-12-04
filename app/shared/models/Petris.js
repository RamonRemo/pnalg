class Petris {

    constructor(y, clearY, height, flag, noSkipsConditionalDeviation, idx) {
        this._y = y;
        this._clearY = clearY;
        this._height = height;
        this._flag = flag;
        this._noSkipsConditionalDeviation = noSkipsConditionalDeviation;
        this._idx = idx;
    }

    get y() {
        return this._y;
    }

    get clearY() {
        return this._clearY;
    }

    get height() {
        return this._height;
    }

    get flag() {
        return this._flag;
    }

    get noSkipsConditionalDeviation() {
        return this._noSkipsConditionalDeviation;
    }

    get idx() {
        return this._idx;
    }

    set y(y) {
        this._y = y;
    }

    set clearY(clearY) {
        this._clearY = clearY;
    }

    set height(height) {
        this._height = height;
    }

    set flag(flag) {
        this._flag = flag;
    }

    set noSkipsConditionalDeviation(noSkipsConditionalDeviation) {
        this._noSkipsConditionalDeviation = noSkipsConditionalDeviation;
    }

    set idx(idx) {
        this._idx = idx;
    }

}