import {episode_lists,actors,content_actors} from "../models"


export const addepisode_list = async (req, res) => {
    console.log(req.body)
    try{
        const results = await episode_lists.create(req.body);
        return res.status(201).json(results);}

    catch(error){
        console.log(error);
    }}

export const updateepisode_list= async (req,res) => {
    const findepisode_list = await episode_lists.findOne({where: {id:req.params.id}});
    console.log(req.body)
    if(findepisode_list){
        try{
            episode_lists.update({
                season_num:req.body.season_num,
                episode_name:req.body.episode_name,
                content_id:req.body.content_id,
                release_date:req.body.release_date,
                episode_rating:req.body.episode_rating,
                episode_num:req.body.episode_num,
                description:req.body.description,
                last_updated:req.body.last_updated,
                episode_imbd_link:req.body.episode_imbd_link,
                imdb_score_votes:req.bodyimdb_score_votes,

            },{where: {id:req.params.id}});
            res.status(200).json({message:"actualizacion exitosa"});
        }catch(error){
            res.satatus(500).json({message: "ocurrio un error intente mas tarde"});
        }
    }else{
        res.status(400).json({message:"hubo un problema para actualizar rol de usuario"}); 
    }
}

export const getepisode_lists =  async(req, res) => {
    console.log('ingresa')
    try {        
        let results = await episode_lists.findAll();
        
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }
};

export const getepisode_list=  async(req, res) => {
    try {        
        let results = await episode_lists.findOne({where: {id:req.params.id}});
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }

}

export const eraseepisode_list=  async(req, res) => {
    const findepisode_list = await episode_lists.findOne({where: {id:req.params.id}});
    if(findepisode_list){
        try{      
        episode_lists.destroy({where: {id:req.params.id}});
          res.status(200).json({message:"Registro eliminado."});
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }

}
}

