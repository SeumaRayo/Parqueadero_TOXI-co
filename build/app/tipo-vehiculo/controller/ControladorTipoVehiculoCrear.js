"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioTipoVehiculoCrear_1 = __importDefault(require("../service/ServicioTipoVehiculoCrear"));
const TipoVehiculo_1 = __importDefault(require("../model/TipoVehiculo"));
class ControladorTipoVehiculoCrear extends ServicioTipoVehiculoCrear_1.default {
    llamarCrearTipoVehiculo(req, res) {
        const objTemp = new TipoVehiculo_1.default(0, "");
        objTemp.claseTipoVehiculo = req.body.claseTipoVehiculo;
        ServicioTipoVehiculoCrear_1.default.crearTipoVehiculo(objTemp, res);
    }
}
const controladorTipoVehiculoCrear = new ControladorTipoVehiculoCrear();
exports.default = controladorTipoVehiculoCrear; //exporta una instancia
