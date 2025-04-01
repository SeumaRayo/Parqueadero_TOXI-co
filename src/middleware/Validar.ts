import { NextFunction } from "express";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

class Validar {

    public datos(req: Request, res: Response, next: NextFunction): void {
        const arregloErrores = validationResult(req);

        if(arregloErrores.isEmpty()) {
            next();
        }
        else {
            res.status(400).json({errores: arregloErrores.array()});
        }
        
    }
}
    
const validar = new Validar();
export default validar;
