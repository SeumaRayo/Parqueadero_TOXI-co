import { Request, Response } from "express";

import ServicioTipoVehiculoConsulta from "../service/ServicioTipoVehiculoConsulta";

class ControladorTipoVehiculoConsulta extends ServicioTipoVehiculoConsulta {
    public obtenerTodos(req: Request, res: Response): void {
        ServicioTipoVehiculoConsulta.obtenerTodos(res);
    }
}

const controladorTipoVehiculoConsulta = new ControladorTipoVehiculoConsulta();
export default controladorTipoVehiculoConsulta; //exporta una instancia

