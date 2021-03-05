import {content_genres} from "../models";

export const addContentGenres = async (req, res) => {
    try{
        const results = await content_genres.create(req.body);
        return res.status(201).json(results);}
    catch(error){
        console.log(error);
    }}

export const updateContentgender = async (req,res) => {
    const findContentGender = await content_genres.findOne({where: {id:req.params.id}});
    if(findContentGender){
        try{
            content_genres.update({
                genre_id:req.body.genre_id,
                content_id:req.body.content_id
            },{where: {id:req.params.id}});
            res.status(200).json({message:"actualizacion exitosa"});
        }catch(error){
            res.satatus(500).json({message:"ocurrio un error intente mas tarde"});
        }
    }else{
        res.status(400).json({message:"hubo un problema para actualizar"}); 
    }
}

export const getContentGenders =  async(req, res) => {
    try {     
        //agregar al endpoint un param "limit" para limitar la cantidad.   
        let results = await content_genres.findAll({
            limit: req.query.limit,
        });
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }
};

export const getOneContentGender=  async(req, res) => {
    try {        
        let results = await content_genres.findOne({where: {id:req.params.id}});
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }

}

export const eraseContentGender =  async(req, res) => {
    const findContentGender = await content_genres.findOne({where: {id:req.params.id}});
    if(findContentGender){
        try{      
        content_genres.destroy({where: {id:req.params.id}});
        res.status(200).json({message:"actualizacion exitosa"});
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }

}
}