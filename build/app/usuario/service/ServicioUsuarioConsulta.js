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
const sql_usuario_1 = require("../repository/sql_usuario");
class ServicioUsuarioConsulta {
    static obtenerTodos(res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(sql_usuario_1.SQL_USUARIO.FIND_ALL)
                .then(misDatos => {
                res.status(200).json(misDatos.rows);
            })
                .catch(miError => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error al obtener todos los usuarios" });
            });
        });
    }
    static obtenerPorId(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(sql_usuario_1.SQL_USUARIO.FIND_BY_ID, [id])
                .then(misDatos => {
                res.status(200).json(misDatos.rows);
            })
                .catch(miError => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error al obtener el usuario por ID" });
            });
        });
    }
    static contarPorId(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(sql_usuario_1.SQL_USUARIO.HOW_MANY, [id])
                .then(misDatos => {
                res.status(200).json(misDatos.rows);
            })
                .catch(miError => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error al contar los usuarios por ID" });
            });
        });
    }
    static agregarUsuario(res, codRol, documentoUsuario, nombresUsuario, apellidosUsuario, generoUsuario, fechaNacimientoUsuario, telefonoUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(sql_usuario_1.SQL_USUARIO.ADD, [
                codRol,
                documentoUsuario,
                nombresUsuario,
                apellidosUsuario,
                generoUsuario,
                fechaNacimientoUsuario,
                telefonoUsuario
            ])
                .then(misDatos => {
                const datos = misDatos;
                res.status(200).json({ cod_usuario: datos.rows[0].cod_usuario });
            })
                .catch(miError => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error al agregar el usuario" });
            });
        });
    }
    static eliminarUsuario(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(sql_usuario_1.SQL_USUARIO.DELETE, [id])
                .then(() => {
                res.status(200).json({ respuesta: "Usuario eliminado correctamente" });
            })
                .catch(miError => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error al eliminar el usuario" });
            });
        });
    }
    static actualizarUsuario(res, codUsuario, codRol, documentoUsuario, nombresUsuario, apellidosUsuario, generoUsuario, fechaNacimientoUsuario, telefonoUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(sql_usuario_1.SQL_USUARIO.UPDATE, [
                codUsuario,
                codRol,
                documentoUsuario,
                nombresUsuario,
                apellidosUsuario,
                generoUsuario,
                fechaNacimientoUsuario,
                telefonoUsuario
            ])
                .then(() => {
                res.status(200).json({ respuesta: "Usuario actualizado correctamente" });
            })
                .catch(miError => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error al actualizar el usuario" });
            });
        });
    }
}
exports.default = ServicioUsuarioConsulta;
