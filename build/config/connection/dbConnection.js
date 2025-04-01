"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_promise_1 = __importDefault(require("pg-promise"));
const optionsPG_1 = require("./optionsPG");
dotenv_1.default.config({ path: "variables.env" });
const portDB = Number(5432);
const databaseDB = String("db_ingsoftparking");
const userDB = String("postgres");
const passwordDB = String("bakipro22");
const hostDB = String("localhost");
const pgp = (0, pg_promise_1.default)(optionsPG_1.optionsPG);
const pool = pgp({
    user: userDB,
    password: passwordDB,
    host: hostDB,
    port: portDB,
    database: databaseDB
});
pool.connect()
    .then((miConn) => {
    console.log("Conexión exitosa a la base de datos: " + databaseDB);
    miConn.done();
})
    .catch((miError) => {
    console.log("Error al conectarse a la base de datos: ", miError);
});
exports.default = pool;
