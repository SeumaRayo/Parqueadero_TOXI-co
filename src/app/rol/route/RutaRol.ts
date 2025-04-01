import { Router } from "express";
import controladorRolConsulta from "../controller/ControladorRolConsulta";
import controladorRolCrear from "../controller/ControladorRolCrear";
import validar from "../../../middleware/Validar";
import { datosRolActualizar, datosRolBorrar, validarCrearRol } from "../../../config/domain/ValidarRol";
import controladorRolBorrar from "../controller/ControladorRolBorrar";
import controladorRolActualizar from "../controller/ControladorRolActualizar";

class RutaRol {
    public rutaRolApi: Router;

    constructor() {
        this.rutaRolApi = Router();
        
        this.rutaRolApi.get("/getAll", controladorRolConsulta.obtenerTodos);
        this.rutaRolApi.post("/add", validarCrearRol, validar.datos, controladorRolCrear.llamarCrearRol);
        this.rutaRolApi.delete("/delete/:codRol",datosRolBorrar, validar.datos, controladorRolBorrar.llamarBorrarRol); //hacer el validar
        this.rutaRolApi.put("/update", datosRolActualizar, validar.datos, controladorRolActualizar.llamarActualizar);
    }
}

const rutaRol = new RutaRol();
export default rutaRol.rutaRolApi; // exporta una propiedad de una instancia