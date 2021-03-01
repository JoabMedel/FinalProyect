const {Actors} = require("../models");


export const addActor = async (req, res) => {
    try{
        const results = await Actors.create(req.body);
        return res.status(201).json(results);}

    catch(error){
        console.log(error);
    }}

export const updateActor = async (req,res) => {
    const findActor = await Actors.findOne({where: {actor_id:req.params.id}});
    if(findActor){
        try{
            Actors.update({
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
    