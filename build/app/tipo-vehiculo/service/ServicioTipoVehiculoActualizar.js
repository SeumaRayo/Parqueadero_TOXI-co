"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = __importDefault(require("../../../config/connection/dbConnection"));
const sql_tipoVehiculo_1 = require("../repository/sql_tipoVehiculo");
class ServicioTipoVehiculoActualizar {
    static actualizarTipoVehiculo(tipoVehiculo, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let objActualizado;
                const tiposVehiculo = yield consulta.one(sql_tipoVehiculo_1.SQL_TIPO_VEHICULO.HOW_MANY, [tipoVehiculo.claseTipoVehiculo]);
                if (tiposVehiculo.cantidad == 0) {
                    caso = 2;
                    objActualizado = yield consulta.result(sql_tipoVehiculo_1.SQL_TIPO_VEHICULO.UPDATE, [tipoVehiculo.claseTipoVehiculo, tipoVehiculo.codTipoVehiculo]);
                }
                return { caso, objActualizado };
            }))
                .then(({ caso, objActualizado }) => {
                switch (caso) {
                    case 1:
                        console.log("El tipo de vehículo ya existe");
                        res.status(400).json({ error: "El tipo de vehículo ya existe" });
                        break;
                    default:
                        res.status(200).json({
                            mensaje: "Tipo de vehículo actualizado exitosamente",
                            detalle: objActualizado.rowCount
                        });
                        break;
                }
            })
                .catch((miError) => {
                console.log("Error al actualizar el tipo de vehículo: ", miError);
                res.status(400).json({ error: "Error al actualizar el tipo de vehículo" });
            });
        });
    }
}
exports.default = ServicioTipoVehiculoActualizar; //exporta una clase
