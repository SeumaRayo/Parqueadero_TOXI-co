class TipoVehiculo {

    private _codTipoVehiculo: number;
    private _claseTipoVehiculo: string;

    constructor(codTipoVehiculo: number, claseTipoVehiculo: string) {
        this._codTipoVehiculo = codTipoVehiculo;
        this._claseTipoVehiculo = claseTipoVehiculo;
    }

    public get codTipoVehiculo(): number {
        return this._codTipoVehiculo;
    }

    public set codTipoVehiculo(codTipoVehiculo: number) {
        this._codTipoVehiculo = codTipoVehiculo;
    }

    public get claseTipoVehiculo(): string {
        return this._claseTipoVehiculo;
    }

    public set claseTipoVehiculo(claseTipoVehiculo: string) {
        this._claseTipoVehiculo = claseTipoVehiculo;
    }
}

export default TipoVehiculo;