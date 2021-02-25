const {Roles, UserRoles} = require("../models");


export const addRole = async (req, res) => {
    try{
        const results = await Roles.create(req.body);
        return res.status(201).json(results);}

    catch(error){
        console.log(error);
    }}

export const addRoleUser = async (req, res) => {
    console.log('ingresa')
    console.log(req.params.roleId)
    const userRole={
        userId:req.body.userId,
        roleId:req.params.roleId
    }
    try{
        const results = await UserRoles.create(userRole);
        return res.status(201).json(results);}
    
    catch(error){
        console.log(error);
    }}

export const updateRole = async (req,res) => {
    const findRole = await Roles.findOne({where: {id:req.params.id}});
    if(findRole){
        try{
            Roles.update({
                name:req.body.name
            },{where: {id:req.params.id}});
            res.status(200).json({message:"actualizacion exitosa"});
        }catch(error){
            res.satatus(500).json({message: "ocurrio un error intente mas tarde"});
        }
    }else{
        res.status(400).json({message:"hubo un problema para actualizar rol"});
    }
}

export const updateRoleUser = async (req,res) => {
    const findUserRol = await UserRoles.findOne({where: {id:req.params.id}});
    if(findUserRol){
        try{
            UserRoles.update({
                userId:req.body.userId,
                roleId:req.body.roleId
            },{where: {id:req.params.id}});
            res.status(200).json({message:"actualizacion exitosa"});
        }catch(error){
            res.satatus(500).json({message: "ocurrio un error intente mas tarde"});
        }
    }else{
        res.status(400).json({message:"hubo un problema para actualizar rol de usuario"}); 
    }
}
    