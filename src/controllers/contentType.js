import {content_types} from "../models"

export const addContentType = async (req, res) => {
    try{
        const results = await content_types.create(req.body);
        return res.status(201).json(results);}
    catch(error){
        console.log(error);
    }}

export const updateContenType = async (req,res) => {
    const findContentType = await content_types.findOne({where: {id:req.params.id}});
    if(findContentType){
        try{
            content_types.update({
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

export const getContentTypes =  async(req, res) => {
    try {     
        //agregar al endpoint un param "limit" para limitar la cantidad.   
        let results = await content_types.findAll({
            limit: req.query.limit,
        });
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }
};

export const getOneContentType=  async(req, res) => {
    try {        
        let results = await content_types.findOne({where: {id:req.params.id}});
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }

}

export const eraseContentType =  async(req, res) => {
    const findContentType = await content_types.findOne({where: {id:req.params.id}});
    if(findContentType){
        try{      
        content_types.destroy({where: {id:req.params.id}});
        res.status(200).json({message:"actualizacion exitosa"});
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }

}
}