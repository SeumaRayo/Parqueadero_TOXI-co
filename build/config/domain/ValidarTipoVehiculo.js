"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosTipoVehiculoActualizar = exports.datosTipoVehiculoBorrar = exports.validarCrearTipoVehiculo = void 0;
const express_validator_1 = require("express-validator");
exports.validarCrearTipoVehiculo = [
    (0, express_validator_1.body)("claseTipoVehiculo", "La clase del tipo de vehículo es requerida").notEmpty(),
    (0, express_validator_1.body)("claseTipoVehiculo", "La clase del tipo de vehículo debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
];
exports.datosTipoVehiculoBorrar = [
    (0, express_validator_1.param)("codTipoVehiculo", "Código de tipo de vehículo requerido").isInt(),
    (0, express_validator_1.param)("codTipoVehiculo", "Máximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosTipoVehiculoActualizar = [
    (0, express_validator_1.body)("codTipoVehiculo", "Código de tipo de vehículo requerido").notEmpty(),
    (0, express_validator_1.body)("codTipoVehiculo", "Código de tipo de vehículo debe ser un número").isInt(),
    (0, express_validator_1.body)("claseTipoVehiculo", "La clase del tipo de vehículo es requerida").trim().notEmpty(),
    (0, express_validator_1.body)("claseTipoVehiculo", "La clase del tipo de vehículo debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
];
