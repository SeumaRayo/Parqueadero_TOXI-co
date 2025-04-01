import { Response } from "express";

import TipoVehiculo from "../model/TipoVehiculo";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_VEHICULO } from "../repository/sql_tipoVehiculo";

class ServicioTipoVehiculoCrear {
    
    protected static async crearTipoVehiculo(tipoVehiculo: TipoVehiculo, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let objGrabado: any;

            const tiposVehiculo = await consulta.one(SQL_TIPO_VEHICULO.HOW_MANY, [tipoVehiculo.claseTipoVehiculo]);

            if (tiposVehiculo.cantidad == 0) {
                //Crear tipo de vehículo.
                caso = 2;
                objGrabado = await consulta.one(SQL_TIPO_VEHICULO.ADD, [tipoVehiculo.claseTipoVehiculo]);
            }

            return { caso, objGrabado };
        })
        .then(({ caso, objGrabado}) => {
            switch (caso) {
                case 1:
                    res.status(400).json({error: "El tipo de vehículo ya existe"});
                    break;
                default:
                    res.status(200).json({mensaje: "Tipo de vehículo creado exitosamente", objGrabado});
                    break;
            }
        })
        .catch((miError) => {
            console.log("Error al crear un tipo de vehículo: ", miError);
            res.status(400).json({error: "Error al crear un tipo de vehículo"});
        });
    }
}

export default ServicioTipoVehiculoCrear;