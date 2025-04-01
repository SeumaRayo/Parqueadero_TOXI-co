import { Request, Response } from "express";

import ServicioTipoVehiculoActualizar from "../service/ServicioTipoVehiculoActualizar";
import TipoVehiculo from "../model/TipoVehiculo";

class ControladorTipoVehiculoActualizar extends ServicioTipoVehiculoActualizar {
    public llamarActualizar(req: Request, res: Response): void {
        const tipoVehiculo = new TipoVehiculo(req.body.codTipoVehiculo, req.body.claseTipoVehiculo);

        ServicioTipoVehiculoActualizar.actualizarTipoVehiculo(tipoVehiculo, res);
    }
}

const controladorTipoVehiculoActualizar = new ControladorTipoVehiculoActualizar();
export default controladorTipoVehiculoActualizar;
