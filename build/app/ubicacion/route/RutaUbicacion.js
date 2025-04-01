"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidarUbicacion_1 = require("../../../config/domain/ValidarUbicacion");
const Validar_1 = __importDefault(require("../../../middleware/Validar"));
const ControladorUbicacionCrear_1 = __importDefault(require("../controller/ControladorUbicacionCrear"));
const ControladorUbicacionBorrar_1 = __importDefault(require("../controller/ControladorUbicacionBorrar"));
const ControladorUbicacionActualizar_1 = __importDefault(require("../controller/ControladorUbicacionActualizar"));
const ControladorUbicacionConsulta_1 = __importDefault(require("../controller/ControladorUbicacionConsulta"));
class RutaUbicacion {
    constructor() {
        this.rutaUbicacionApi = (0, express_1.Router)();
        this.rutaUbicacionApi.get("/getAll", ControladorUbicacionConsulta_1.default.obtenerTodos);
        this.rutaUbicacionApi.post("/add", ValidarUbicacion_1.validarCrearUbicacion, Validar_1.default.datos, ControladorUbicacionCrear_1.default.llamarCrearUbicacion); //hacer el validar
        this.rutaUbicacionApi.delete("/delete/:codUbicacion", ValidarUbicacion_1.datosUbicacionBorrar, Validar_1.default.datos, ControladorUbicacionBorrar_1.default.llamarBorrarUbicacion); //hacer el validar      
        this.rutaUbicacionApi.put("/update", ValidarUbicacion_1.datosUbicacionActualizar, Validar_1.default.datos, ControladorUbicacionActualizar_1.default.llamarActualizarUbicacion);
    }
}
const rutaUbicacion = new RutaUbicacion();
exports.default = rutaUbicacion.rutaUbicacionApi; // exporta una propiedad de una instancia
