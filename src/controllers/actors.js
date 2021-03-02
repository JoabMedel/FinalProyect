
import {actors} from "../models/";
import {Users} from "../models/";

export const addActor = async (req, res) => {
    console.log(req.body)
    try{
        const results = await actors.create(req.body);
        return res.status(201).json(results);}

    catch(error){
        console.log(error);
    }}

export const updateActor = async (req,res) => {
    const findActor = await actors.findOne({where: {actor_id:req.params.id}});
    if(findActor){
        try{
            actors.update({
              name:req.body.name
            },{where: {actor_id:req.params.id}});
            res.status(200).json({message:"actualizacion exitosa"});
        }catch(error){
            res.satatus(500).json({message: "ocurrio un error intente mas tarde"});
        }
    }else{
        res.status(400).json({message:"hubo un problema para actualizar rol de usuario"}); 
    }
}

export const getActors =  async(req, res) => {
    try {        
        let results = await actors.findAll();
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }
};

export const getActor=  async(req, res) => {
    try {        
        let results = await actors.findOne({where: {id:req.params.id}});
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }

}

export const eraseActor=  async(req, res) => {
    const findActor = await actors.findOne({where: {actor_id:req.params.id}});
    if(findActor){
        try{      
        Actors.deleteAll({
            name:req.body.name
          },{where: {actor_id:req.params.id}});
          res.status(200).json({message:"actualizacion exitosa"});
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }

}
}