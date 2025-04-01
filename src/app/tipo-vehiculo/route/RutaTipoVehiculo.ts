import { Router } from "express";
import controladorTipoVehiculoConsulta from "../controller/ControladorTipoVehiculoConsulta";
import { datosTipoVehiculoActualizar, datosTipoVehiculoBorrar, validarCrearTipoVehiculo } from "../../../config/domain/ValidarTipoVehiculo";
import validar from "../../../middleware/Validar";
import controladorTipoVehiculoCrear from "../controller/ControladorTipoVehiculoCrear";
import controladorTipoVehiculoBorrar from "../controller/ControladorTipoVehiculoBorrar";
import controladorTipoVehiculoActualizar from "../controller/ControladorTipoVehiculoActualizar";

class RutaTipoVehiculo {
    public rutaTipoVehiculoApi: Router;

    constructor() {
        this.rutaTipoVehiculoApi = Router();
        
        this.rutaTipoVehiculoApi.get("/getAll", controladorTipoVehiculoConsulta.obtenerTodos);
        this.rutaTipoVehiculoApi.post("/add", validarCrearTipoVehiculo, validar.datos, controladorTipoVehiculoCrear.llamarCrearTipoVehiculo);
        this.rutaTipoVehiculoApi.delete("/delete/:codTipoVehiculo",datosTipoVehiculoBorrar, validar.datos, controladorTipoVehiculoBorrar.llamarBorrarTipoVehiculo); //hacer el validar
        this.rutaTipoVehiculoApi.put("/update", datosTipoVehiculoActualizar, validar.datos, controladorTipoVehiculoActualizar.llamarActualizar);
    }
}

const rutaTipoVehiculo = new RutaTipoVehiculo();
export default rutaTipoVehiculo.rutaTipoVehiculoApi; // exporta una propiedad de una instancia