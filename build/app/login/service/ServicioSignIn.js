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
const sql_acceso_1 = require("../repository/sql_acceso");
const Ingreso_1 = __importDefault(require("../model/Ingreso"));
const sql_ingreso_1 = require("../repository/sql_ingreso");
class ServicioSignIn {
    static signIn(acceso, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let respuesta = null;
                const accesoRev = yield consulta.oneOrNone(sql_acceso_1.SQL_LOGIN.FIND_BY_CORREO, [acceso.correoAcceso]);
                if (accesoRev && accesoRev.claveAcceso === acceso.claveAcceso) {
                    caso = 2;
                    const fechaActual = new Date();
                    const isoString = fechaActual.toISOString(); // '2024-04-01T14:30:00.000Z'
                    const [fecha, hora] = isoString.split("T"); // Separa fecha y hora
                    const horaLimpia = hora.slice(0, 8); // Elimina los milisegundos y la 'Z'
                    const ingresoNuevo = new Ingreso_1.default(0, accesoRev.codUsuario, fecha, horaLimpia);
                    //Insert a ingresos
                    consulta.one(sql_ingreso_1.SQL_INGRESO.ADD, [accesoRev.codUsuario, ingresoNuevo.fechaIngreso, ingresoNuevo.horaIngreso]);
                    respuesta = yield consulta.one(sql_acceso_1.SQL_LOGIN.FIND_BY_USER, [accesoRev.codUsuario]);
                }
                return { caso, respuesta };
            }))
                .then(({ caso, respuesta }) => {
                switch (caso) {
                    case 1:
                        res.status(401).json({ error: "Correo o contraseña incorrectos" });
                        break;
                    default:
                        res.status(200).json({
                            mensaje: "Inicio de sesión exitoso",
                            data: respuesta
                        });
                        break;
                }
            })
                .catch((miError) => {
                console.log("Error al iniciar sesión: ", miError);
                res.status(401).json({ error: "Error al iniciar sesión" });
            });
        });
    }
}
exports.default = ServicioSignIn;
