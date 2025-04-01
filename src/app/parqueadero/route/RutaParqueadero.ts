import { Router } from "express";
import instanciaControladorParqueaderoConsulta from "../controller/ControladorParqueaderoConsulta";
import controladorParqueaderoCrear from "../controller/ControladorParqueaderoCrear";
import controladorParqueaderoBorrar from "../controller/ControladorParqueaderoBorrar";
import controladorParqueaderoActualizar from "../controller/ControladorParqueaderoActualizar";
import validar from "../../../middleware/Validar";
import { datosParqueaderoActualizar, datosParqueaderoBorrar, validarCrearParqueadero } from "../../../config/domain/ValidarParqueadero";

class RutaParqueadero {
    public rutaParqueaderoApi: Router;

    constructor() {
        this.rutaParqueaderoApi = Router();

        this.rutaParqueaderoApi.get("/getAll", instanciaControladorParqueaderoConsulta.obtenerTodos);
        this.rutaParqueaderoApi.post("/add", validarCrearParqueadero, validar.datos, controladorParqueaderoCrear.crearParqueadero);
        this.rutaParqueaderoApi.delete("/delete/:codParqueadero", datosParqueaderoBorrar, validar.datos, controladorParqueaderoBorrar.borrarParqueadero); 
        this.rutaParqueaderoApi.put("/update", datosParqueaderoActualizar, validar.datos, controladorParqueaderoActualizar.actualizarParqueadero);
    }

}

const rutaParqueadero = new RutaParqueadero();
export default rutaParqueadero.rutaParqueaderoApi;

