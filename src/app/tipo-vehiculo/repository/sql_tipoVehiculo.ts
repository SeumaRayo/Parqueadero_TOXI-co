export const SQL_TIPO_VEHICULO = {
    FIND_ALL: "SELECT t.cod_tipo_vehiculo, t.clase_tipo_vehiculo \
    FROM tipos_vehiculos t \
    ORDER BY t.cod_tipo_vehiculo",

    FIND_BY_ID: "SELECT t.cod_tipo_vehiculo, t.clase_tipo_vehiculo \
    FROM tipos_vehiculos t \
    WHERE cod_tipo_vehiculo = $1",

    HOW_MANY: "SELECT COUNT(t.cod_tipo_vehiculo) as Cantidad \
    FROM tipos_vehiculos t \
    WHERE t.clase_tipo_vehiculo = $1",

    ADD: "INSERT INTO tipos_vehiculos (clase_tipo_vehiculo) \
    VALUES ($1) RETURNING cod_tipo_vehiculo",

    DELETE: "DELETE FROM tipos_vehiculos \
    WHERE cod_tipo_vehiculo = $1",

    UPDATE: "UPDATE tipos_vehiculos \
    SET clase_tipo_vehiculo = $1 \
    WHERE cod_tipo_vehiculo = $2"
};