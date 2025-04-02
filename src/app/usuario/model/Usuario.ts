class Usuario {
    private _codUsuario: number;
    private _codRol: number;
    private _documentoUsuario: string;
    private _nombresUsuario: string;
    private _apellidosUsuario: string;
    private _generoUsuario: number;
    private _fechaNacimientoUsuario: Date;
    private _telefonoUsuario: string;

    constructor(
        codUsuario: number,
        codRol: number,
        documentoUsuario: string,
        nombresUsuario: string,
        apellidosUsuario: string,
        generoUsuario: number,
        fechaNacimientoUsuario: Date,
        telefonoUsuario: string
    ) {
        this._codUsuario = codUsuario;
        this._codRol = codRol;
        this._documentoUsuario = documentoUsuario;
        this._nombresUsuario = nombresUsuario;
        this._apellidosUsuario = apellidosUsuario;
        this._generoUsuario = generoUsuario;
        this._fechaNacimientoUsuario = fechaNacimientoUsuario;
        this._telefonoUsuario = telefonoUsuario;
    }

    // Getters y Setters
    public get CodUsuario(): number {
        return this._codUsuario;
    }

    public set CodUsuario(codUsuario: number) {
        this._codUsuario = codUsuario;
    }

    public get CodRol(): number {
        return this._codRol;
    }

    public set CodRol(codRol: number) {
        this._codRol = codRol;
    }

    public get DocumentoUsuario(): string {
        return this._documentoUsuario;
    }

    public set DocumentoUsuario(documentoUsuario: string) {
        this._documentoUsuario = documentoUsuario;
    }

    public get NombresUsuario(): string {
        return this._nombresUsuario;
    }

    public set NombresUsuario(nombresUsuario: string) {
        this._nombresUsuario = nombresUsuario;
    }

    public get ApellidosUsuario(): string {
        return this._apellidosUsuario;
    }

    public set ApellidosUsuario(apellidosUsuario: string) {
        this._apellidosUsuario = apellidosUsuario;
    }

    public get GeneroUsuario(): number {
        return this._generoUsuario;
    }

    public set GeneroUsuario(generoUsuario: number) {
        this._generoUsuario = generoUsuario;
    }

    public get FechaNacimientoUsuario(): Date {
        return this._fechaNacimientoUsuario;
    }

    public set FechaNacimientoUsuario(fechaNacimientoUsuario: Date) {
        this._fechaNacimientoUsuario = fechaNacimientoUsuario;
    }

    public get TelefonoUsuario(): string {
        return this._telefonoUsuario;
    }

    public set TelefonoUsuario(telefonoUsuario: string) {
        this._telefonoUsuario = telefonoUsuario;
    }
}

export default Usuario;