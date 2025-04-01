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
class ServicioTipoVehiculoBorrar {
    static borrar(tiposVehiculo, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return dbConnection_1.default.result(sql_tipoVehiculo_1.SQL_TIPO_VEHICULO.DELETE, [tiposVehiculo.codTipoVehiculo]);
            }))
                .then((respuesta) => {
                res.status(200).json({
                    respuesta: "Tipo de vehículo borrado exitosamente",
                    "Filas afectadas": respuesta.rowCount
                });
            })
                .catch((miError) => {
                console.log("Error al borrar el tipo de vehículo: ", miError);
                res.status(400).json({ error: "Error al borrar el tipo de vehículo" });
            });
        });
    }
}
exports.default = ServicioTipoVehiculoBorrar;
