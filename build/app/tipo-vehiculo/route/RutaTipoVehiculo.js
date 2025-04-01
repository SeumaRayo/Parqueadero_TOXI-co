"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorTipoVehiculoConsulta_1 = __importDefault(require("../controller/ControladorTipoVehiculoConsulta"));
const ValidarTipoVehiculo_1 = require("../../../config/domain/ValidarTipoVehiculo");
const Validar_1 = __importDefault(require("../../../middleware/Validar"));
const ControladorTipoVehiculoCrear_1 = __importDefault(require("../controller/ControladorTipoVehiculoCrear"));
const ControladorTipoVehiculoBorrar_1 = __importDefault(require("../controller/ControladorTipoVehiculoBorrar"));
const ControladorTipoVehiculoActualizar_1 = __importDefault(require("../controller/ControladorTipoVehiculoActualizar"));
class RutaTipoVehiculo {
    constructor() {
        this.rutaTipoVehiculoApi = (0, express_1.Router)();
        this.rutaTipoVehiculoApi.get("/getAll", ControladorTipoVehiculoConsulta_1.default.obtenerTodos);
        this.rutaTipoVehiculoApi.post("/add", ValidarTipoVehiculo_1.validarCrearTipoVehiculo, Validar_1.default.datos, ControladorTipoVehiculoCrear_1.default.llamarCrearTipoVehiculo);
        this.rutaTipoVehiculoApi.delete("/delete/:codTipoVehiculo", ValidarTipoVehiculo_1.datosTipoVehiculoBorrar, Validar_1.default.datos, ControladorTipoVehiculoBorrar_1.default.llamarBorrarTipoVehiculo); //hacer el validar
        this.rutaTipoVehiculoApi.put("/update", ValidarTipoVehiculo_1.datosTipoVehiculoActualizar, Validar_1.default.datos, ControladorTipoVehiculoActualizar_1.default.llamarActualizar);
    }
}
const rutaTipoVehiculo = new RutaTipoVehiculo();
exports.default = rutaTipoVehiculo.rutaTipoVehiculoApi; // exporta una propiedad de una instancia
