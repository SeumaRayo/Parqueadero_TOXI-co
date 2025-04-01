import { body, param } from "express-validator";

export const validarCrearTipoVehiculo = [
    body("claseTipoVehiculo", "La clase del tipo de vehículo es requerida").notEmpty(),
    body("claseTipoVehiculo", "La clase del tipo de vehículo debe tener un mínimo de 3 caracteres").isLength({min: 3}),
];

export const datosTipoVehiculoBorrar = [
    param("codTipoVehiculo", "Código de tipo de vehículo requerido").isInt(),
    param("codTipoVehiculo", "Máximo 6 caracteres").isLength({max: 6}),
];

export const datosTipoVehiculoActualizar = [
    body("codTipoVehiculo", "Código de tipo de vehículo requerido").notEmpty(),
    body("codTipoVehiculo", "Código de tipo de vehículo debe ser un número").isInt(),
    body("claseTipoVehiculo", "La clase del tipo de vehículo es requerida").trim().notEmpty(),
    body("claseTipoVehiculo", "La clase del tipo de vehículo debe tener un mínimo de 3 caracteres").isLength({min: 3}),
];
