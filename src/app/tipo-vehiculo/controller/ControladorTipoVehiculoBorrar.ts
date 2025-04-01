import { Request, Response } from "express";

import ServicioTipoVehiculoBorrar from "../service/ServicioTipoVehiculoBorrar";
import TipoVehiculo from "../model/TipoVehiculo";

class ControladorTipoVehiculoBorrar extends ServicioTipoVehiculoBorrar {
    
    public llamarBorrarTipoVehiculo(req: Request, res: Response): void {
        const codigo = Number(req.params.codTipoVehiculo);
        const objTipoVehiculo = new TipoVehiculo(codigo, "");

        ServicioTipoVehiculoBorrar.borrar(objTipoVehiculo, res);
    }
}

const controladorTipoVehiculoBorrar = new ControladorTipoVehiculoBorrar();
export default controladorTipoVehiculoBorrar; //exporta una instancia