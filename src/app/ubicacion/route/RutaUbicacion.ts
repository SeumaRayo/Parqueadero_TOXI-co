import { Router } from "express";

import { datosUbicacionActualizar, datosUbicacionBorrar, validarCrearUbicacion } from "../../../config/domain/ValidarUbicacion";
import validar from "../../../middleware/Validar";
import controladorUbicacionCrear from "../controller/ControladorUbicacionCrear";
import controladorUbicacionBorrar from "../controller/ControladorUbicacionBorrar";
import controladorUbicacionActualizar from "../controller/ControladorUbicacionActualizar";
import controladorUbicacionConsulta from "../controller/ControladorUbicacionConsulta";

class RutaUbicacion {
    public rutaUbicacionApi: Router;
    
    constructor() {
        this.rutaUbicacionApi = Router();

        this.rutaUbicacionApi.get("/getAll", controladorUbicacionConsulta.obtenerTodos);
        this.rutaUbicacionApi.post("/add", validarCrearUbicacion, validar.datos, controladorUbicacionCrear.llamarCrearUbicacion); //hacer el validar
        this.rutaUbicacionApi.delete("/delete/:codUbicacion", datosUbicacionBorrar, validar.datos, controladorUbicacionBorrar.llamarBorrarUbicacion); //hacer el validar      
        this.rutaUbicacionApi.put("/update", datosUbicacionActualizar, validar.datos, controladorUbicacionActualizar.llamarActualizarUbicacion);
    }
    
}

const rutaUbicacion = new RutaUbicacion();
export default rutaUbicacion.rutaUbicacionApi; // exporta una propiedad de una instancia