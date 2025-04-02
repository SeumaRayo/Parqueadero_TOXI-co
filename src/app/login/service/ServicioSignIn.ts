import { Response } from "express";
import Acceso from "../model/Acceso";
import pool from "../../../config/connection/dbConnection";
import { SQL_LOGIN } from "../repository/sql_acceso";
import Ingreso from "../model/Ingreso";


class ServicioSignIn {
    protected static async signIn(acceso: Acceso, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let respuesta = null;
            
            const accesoRev = await consulta.one(SQL_LOGIN.FIND_BY_CORREO, [acceso.correoAcceso]);
            
            if(accesoRev && accesoRev.claveAcceso == acceso.claveAcceso){
                caso = 2;
                
                const fechaActual = new Date();
                const isoString = fechaActual.toISOString(); // '2024-04-01T14:30:00.000Z'

                const [fecha, hora] = isoString.split("T"); // Separa fecha y hora
                const horaLimpia = hora.slice(0, 8); // Elimina los milisegundos y la 'Z'

                const ingresoNuevo = new Ingreso(0, accesoRev.cod_usuario, fecha, horaLimpia);
                //Insert a ingresos

                respuesta = await consulta.one(SQL_LOGIN.FIND_BY_USER, [accesoRev.cod_usuario]);
            }

            return { caso, respuesta };
        })
        .then(({ caso, respuesta }) => {
            switch (caso) {
                case 1:
                    res.status(401).json({error: "Correo o contraseña incorrectos"});
                    break;
                default:
                    res.status(200).json({mensaje: "Inicio de sesión exitoso", respuesta});
                    break;
            }
        })
        .catch((miError) => {
            console.log("Error al iniciar sesión: ", miError);
            res.status(401).json({error: "Error al iniciar sesión"});
        });

    }
}

export default ServicioSignIn;