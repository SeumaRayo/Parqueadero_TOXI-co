import { Request, Response } from "express";
import ServicioTipoVehiculoCrear from "../service/ServicioTipoVehiculoCrear";
import TipoVehiculo from "../model/TipoVehiculo";

class ControladorTipoVehiculoCrear extends ServicioTipoVehiculoCrear {
    
    public llamarCrearTipoVehiculo(req: Request, res: Response): void {
        const objTemp = new TipoVehiculo(0, "");

        objTemp.claseTipoVehiculo = req.body.claseTipoVehiculo;
        ServicioTipoVehiculoCrear.crearTipoVehiculo(objTemp, res);
    }
}

const controladorTipoVehiculoCrear = new ControladorTipoVehiculoCrear();
export default controladorTipoVehiculoCrear; //exporta una instancia