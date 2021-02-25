import {Users} from "../models/";
import {validateJWT} from "../middlewares/jwt"



export const getAll =  async(req, res) => {
    try {        
        let results = await Users.findAll();
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }
};

export const getUser =  async(req, res) => {
    try {        
        let results = await Users.findOne({where: {id:req.params.id}});
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }

}