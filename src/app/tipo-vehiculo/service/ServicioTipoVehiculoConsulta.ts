import { Response } from "express";

import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_VEHICULO } from "../repository/sql_tipoVehiculo";


class ServicioTipoVehiculoConsulta {
    
    protected static async obtenerTodos(res: Response): Promise<any> {
        await pool
        .result(SQL_TIPO_VEHICULO.FIND_ALL)
        .then((misDatos) => {
            res.status(200).json(misDatos.rows);
        })
        .catch(( miError ) => {
            console.log("Error al obtener todos los tipos de vehículo: ", miError);
            res.status(400).json({error: "Error al obtener todos los tipos de vehículo"});
        });
    }
}

export default ServicioTipoVehiculoConsulta; //exporta una clase