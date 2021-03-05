import {directors} from "../models";

export const addDirectors = async (req, res) => {
    try{
        const results = await directors.create(req.body);
        return res.status(201).json(results);}
    catch(error){
        console.log(error);
    }}

export const updateDirector = async (req,res) => {
    const findDirector = await directors.findOne({where: {id:req.params.id}});
    if(findDirector){
        try{
            directors.update({
                name:req.body.name
            },{where: {id:req.params.id}});
            res.status(200).json({message:"actualizacion exitosa"});
        }catch(error){
            res.satatus(500).json({message:"ocurrio un error intente mas tarde"});
        }
    }else{
        res.status(400).json({message:"hubo un problema para actualizar"}); 
    }
}

export const getDirectors =  async(req, res) => {
    try {     
        //agregar al endpoint un param "limit" para limitar la cantidad.   
        let results = await directors.findAll({
            limit: req.query.limit,
        });
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }
};

export const getOneDirector=  async(req, res) => {
    try {        
        let results = await directors.findOne({where: {id:req.params.id}});
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }

}

export const eraseDirector =  async(req, res) => {
    const findDirector = await directors.findOne({where: {id:req.params.id}});
    if(findDirector){
        try{      
        directors.destroy({where: {id:req.params.id}});
        res.status(200).json({message:"actualizacion exitosa"});
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }

}
}

