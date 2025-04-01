"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioTipoVehiculoActualizar_1 = __importDefault(require("../service/ServicioTipoVehiculoActualizar"));
const TipoVehiculo_1 = __importDefault(require("../model/TipoVehiculo"));
class ControladorTipoVehiculoActualizar extends ServicioTipoVehiculoActualizar_1.default {
    llamarActualizar(req, res) {
        const tipoVehiculo = new TipoVehiculo_1.default(req.body.codTipoVehiculo, req.body.claseTipoVehiculo);
        ServicioTipoVehiculoActualizar_1.default.actualizarTipoVehiculo(tipoVehiculo, res);
    }
}
const controladorTipoVehiculoActualizar = new ControladorTipoVehiculoActualizar();
exports.default = controladorTipoVehiculoActualizar;
