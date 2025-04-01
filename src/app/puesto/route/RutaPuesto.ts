import { Router } from "express";
import controladorPuestoConsulta from "../controller/ControladorPuestoConsulta";
import { datosPuestoActualizar, datosPuestoBorrar, validarCrearPuesto } from "../../../config/domain/ValidarPuesto";
import validar from "../../../middleware/Validar";
import controladorPuestoCrear from "../controller/ControladorPuestoCrear";
import controladorPuestoBorrar from "../controller/ControladorPuestoBorrar";
import controladorPuestoActualizar from "../controller/ControladorPuestoActualizar";

class RutaPuesto {
    public rutaPuestoApi: Router;

    constructor() {
        this.rutaPuestoApi = Router();
    
        this.rutaPuestoApi.get("/getAll", controladorPuestoConsulta.obtenerTodos);
        this.rutaPuestoApi.post("/add", validarCrearPuesto, validar.datos, controladorPuestoCrear.crearPuesto);  
        this.rutaPuestoApi.delete("/delete/:codPuesto", datosPuestoBorrar, validar.datos, controladorPuestoBorrar.borrarPuesto);
        this.rutaPuestoApi.put("/update", datosPuestoActualizar, validar.datos, controladorPuestoActualizar.actualizarPuesto);
    }
}

const rutaPuesto = new RutaPuesto();
export default rutaPuesto.rutaPuestoApi;
