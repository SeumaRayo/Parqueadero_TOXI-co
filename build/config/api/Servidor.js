"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const RutaRol_1 = __importDefault(require("../../app/rol/route/RutaRol"));
const dotenv_1 = __importDefault(require("dotenv"));
const RutaTipoVehiculo_1 = __importDefault(require("../../app/tipo-vehiculo/route/RutaTipoVehiculo"));
const RutaUbicacion_1 = __importDefault(require("../../app/ubicacion/route/RutaUbicacion"));
const RutaParqueadero_1 = __importDefault(require("../../app/parqueadero/route/RutaParqueadero"));
const RutaPuesto_1 = __importDefault(require("../../app/puesto/route/RutaPuesto"));
dotenv_1.default.config();
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.set("PORT", 3123);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100Mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use("/api/rol", RutaRol_1.default);
        this.app.use("/api/tipo-vehiculo", RutaTipoVehiculo_1.default);
        this.app.use("/api/ubicacion", RutaUbicacion_1.default);
        this.app.use("/api/parqueadero", RutaParqueadero_1.default);
        this.app.use("/api/puesto", RutaPuesto_1.default);
    }
    start() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Servidor corriendo en el puerto: ", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
