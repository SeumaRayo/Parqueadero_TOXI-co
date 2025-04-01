import dontenv from 'dotenv';
import pgPromise from 'pg-promise';
import { optionsPG } from './optionsPG';

dontenv.config({path: "variables.env"});

const portDB = Number(5432);
const databaseDB = String("db_ingsoftparking");
const userDB = String("postgres");
const passwordDB = String("bakipro22");
const hostDB = String("localhost");

const pgp = pgPromise(optionsPG);
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

export default pool;
