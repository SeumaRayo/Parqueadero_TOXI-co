import { Response } from "express";

import TipoVehiculo from "../model/TipoVehiculo";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_VEHICULO } from "../repository/sql_tipoVehiculo";

class ServicioTipoVehiculoActualizar {
    protected static async actualizarTipoVehiculo(tipoVehiculo: TipoVehiculo, res: Response): Promise<any> {
        await pool
        .task(async(consulta) => {
            let caso = 1;
            let objActualizado: any;

            const tiposVehiculo = await consulta.one(SQL_TIPO_VEHICULO.HOW_MANY, [tipoVehiculo.claseTipoVehiculo]);

            if(tiposVehiculo.cantidad == 0){
                caso = 2;
                objActualizado = await consulta.result(SQL_TIPO_VEHICULO.UPDATE, [tipoVehiculo.claseTipoVehiculo, tipoVehiculo.codTipoVehiculo]);
            }

            return {caso, objActualizado};
        })
        .then(({caso, objActualizado}) => {
            switch(caso){
                case 1:
                    console.log("El tipo de vehículo ya existe");
                    res.status(400).json({error: "El tipo de vehículo ya existe"});
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
            res.status(400).json({error: "Error al actualizar el tipo de vehículo"});
        });
    }
}

export default ServicioTipoVehiculoActualizar; //exporta una clase