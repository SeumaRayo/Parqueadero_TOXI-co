import { Response } from "express";

import TipoVehiculo from "../model/TipoVehiculo";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_VEHICULO } from "../repository/sql_tipoVehiculo";

class ServicioTipoVehiculoBorrar {
    protected static async borrar(tiposVehiculo: TipoVehiculo, res: Response): Promise<any> {
        await pool
        .task(async(consulta) => {
            return pool.result(SQL_TIPO_VEHICULO.DELETE, [tiposVehiculo.codTipoVehiculo]);
        })
        .then((respuesta) => {
            res.status(200).json({
                respuesta: "Tipo de vehículo borrado exitosamente",
                "Filas afectadas": respuesta.rowCount
            });
        })
        .catch((miError) => {
            console.log("Error al borrar el tipo de vehículo: ", miError);
            res.status(400).json({error: "Error al borrar el tipo de vehículo"});
        });
    }
}

export default ServicioTipoVehiculoBorrar;