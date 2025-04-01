"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TipoVehiculo {
    constructor(codTipoVehiculo, claseTipoVehiculo) {
        this._codTipoVehiculo = codTipoVehiculo;
        this._claseTipoVehiculo = claseTipoVehiculo;
    }
    get codTipoVehiculo() {
        return this._codTipoVehiculo;
    }
    set codTipoVehiculo(codTipoVehiculo) {
        this._codTipoVehiculo = codTipoVehiculo;
    }
    get claseTipoVehiculo() {
        return this._claseTipoVehiculo;
    }
    set claseTipoVehiculo(claseTipoVehiculo) {
        this._claseTipoVehiculo = claseTipoVehiculo;
    }
}
exports.default = TipoVehiculo;
