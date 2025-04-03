import { Response } from "express";

import TipoVehiculo from "../model/TipoVehiculo";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_VEHICULO } from "../repository/sql_tipoVehiculo";

class ServicioTipoVehiculoBorrar {
    protected static async borrar(tiposVehiculo: TipoVehiculo, res: Response): Promise<any> {
        await pool
        .task(async(consulta) => {
            let caso = 1;
            let respuesta = null;
            const tipoVehiculoRev = await consulta.one(
                SQL_TIPO_VEHICULO.COUNT_TV_USADOS,
                [tiposVehiculo.codTipoVehiculo]
            );
            const tipoVehiculoExiste = await consulta.oneOrNone(
                SQL_TIPO_VEHICULO.FIND_BY_ID,
                [tiposVehiculo.codTipoVehiculo]
            );

            if(tipoVehiculoExiste && tipoVehiculoRev.cantidad == 0 && tipoVehiculoRev) {
                caso = 2;
                respuesta = await consulta.result(SQL_TIPO_VEHICULO.DELETE, [tiposVehiculo.codTipoVehiculo]);
            }

            return {caso, respuesta};
        })
        .then(({caso, respuesta}) => {
            if(caso == 2 && respuesta) {
                res.status(200).json({
                    respuesta: "Tipo de vehículo borrado exitosamente",
                    "Filas afectadas": respuesta.rowCount
                });
            }
            else {
                res.status(400).json({
                    error: "No se puede eliminar el tipo de vehiculo"
                });
            }
            
        })
        .catch((miError) => {
            console.log("Error al borrar el tipo de vehículo: ", miError);
            res.status(400).json({error: "Error al borrar el tipo de vehículo"});
        });
    }
}

export default ServicioTipoVehiculoBorrar;