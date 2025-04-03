import { Router } from "express";
import controladorSignIn from "../controller/ControladorSignIn";
import { validarLogin } from "../../../config/domain/ValidarLogin";
import validar from "../../../middleware/Validar";

class RutaLogin {
    public rutaLoginApi: Router;

    constructor() {
        this.rutaLoginApi = Router();

        this.rutaLoginApi.post("/sign-in", validarLogin, validar.datos, controladorSignIn.llamarSignIn);
    }
}

const rutaLogin = new RutaLogin();
export default rutaLogin.rutaLoginApi;
