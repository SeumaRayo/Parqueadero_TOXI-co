import express from "express";
import cors from "cors";
import morgan from "morgan";
import rutaRolApi from "../../app/rol/route/RutaRol";
import dotenv from "dotenv";
import rutaTipoVehiculoApi from "../../app/tipo-vehiculo/route/RutaTipoVehiculo";
import rutaUbicacionApi from "../../app/ubicacion/route/RutaUbicacion";
import rutaParqueaderoApi from "../../app/parqueadero/route/RutaParqueadero";
import rutaPuestoApi from "../../app/puesto/route/RutaPuesto";

dotenv.config();

class Servidor {

    public app: express.Application;

    constructor() {
        this.app = express();

        this.app.set("PORT", 3123);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({limit: "100Mb"}));
        this.app.use(express.urlencoded({extended: true}));

        this.app.use("/api/rol", rutaRolApi);
        this.app.use("/api/tipo-vehiculo", rutaTipoVehiculoApi);
        this.app.use("/api/ubicacion", rutaUbicacionApi);
        this.app.use("/api/parqueadero", rutaParqueaderoApi);
        this.app.use("/api/puesto", rutaPuestoApi);
    }

    public start(): void {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Servidor corriendo en el puerto: ", this.app.get("PORT"));
        });
    }
}

export default Servidor;