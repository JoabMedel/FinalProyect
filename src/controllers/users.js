import {Users} from "../models/";
import {validateJWT} from "../middlewares/jwt"
import bcrypt from "bcryptjs";



export const getAll =  async(req, res) => {
    
 if(validateJWT(req.headers['authorization'])===true){

    try {        
        let results = await Users.findAll();
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }
 }
 else {
    res.status(400).json({
        messsage: "Hubo un error al procesar tu petición"
    }
    )
}
}