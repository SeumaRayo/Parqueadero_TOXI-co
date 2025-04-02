import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_USUARIO } from "../repository/sql_usuario";

class ServicioUsuarioConsulta {

    protected static async obtenerTodos(res: Response): Promise<any> {
        await pool
            .result(SQL_USUARIO.FIND_ALL)
            .then(misDatos => {
                res.status(200).json(misDatos.rows);
            })
            .catch(miError => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error al obtener todos los usuarios" });
            });
    }

    protected static async obtenerPorId(res: Response, id: number): Promise<any> {
        await pool
            .result(SQL_USUARIO.FIND_BY_ID, [id])
            .then(misDatos => {
                res.status(200).json(misDatos.rows);
            })
            .catch(miError => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error al obtener el usuario por ID" });
            });
    }

    protected static async contarPorId(res: Response, id: number): Promise<any> {
        await pool
            .result(SQL_USUARIO.HOW_MANY, [id])
            .then(misDatos => {
                res.status(200).json(misDatos.rows);
            })
            .catch(miError => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error al contar los usuarios por ID" });
            });
    }

    protected static async agregarUsuario(
        res: Response,
        codRol: number,
        documentoUsuario: string,
        nombresUsuario: string,
        apellidosUsuario: string,
        generoUsuario: number,
        fechaNacimientoUsuario: Date,
        telefonoUsuario: string
    ): Promise<any> {
        await pool
            .result(SQL_USUARIO.ADD, [
                codRol,
                documentoUsuario,
                nombresUsuario,
                apellidosUsuario,
                generoUsuario,
                fechaNacimientoUsuario,
                telefonoUsuario
            ])
            .then(misDatos => {
                const datos = misDatos as { rows: { cod_usuario: number }[] };
                res.status(200).json({ cod_usuario: datos.rows[0].cod_usuario });
            })
            .catch(miError => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error al agregar el usuario" });
            });
    }

    protected static async eliminarUsuario(res: Response, id: number): Promise<any> {
        await pool
            .result(SQL_USUARIO.DELETE, [id])
            .then(() => {
                res.status(200).json({ respuesta: "Usuario eliminado correctamente" });
            })
            .catch(miError => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error al eliminar el usuario" });
            });
    }

    protected static async actualizarUsuario(
        res: Response,
        codUsuario: number,
        codRol: number,
        documentoUsuario: string,
        nombresUsuario: string,
        apellidosUsuario: string,
        generoUsuario: number,
        fechaNacimientoUsuario: Date,
        telefonoUsuario: string
    ): Promise<any> {
        await pool
            .result(SQL_USUARIO.UPDATE, [
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
    }
}

export default ServicioUsuarioConsulta;
