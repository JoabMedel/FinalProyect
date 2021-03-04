import {Users} from "../models/"

export const getRole= async(id) =>{
    
try{
let role= await Users.findOne({where:{id}, include: ["Roles"]})
return(role.Roles[0].name)
}
catch(error){
    console.log(error)
}
}

export const isAdmin = (id)=>{
    return async (req , res, next)=>{
        let role = await getRole(1);
        if(role==="Admin"){
            next();
        }
        else{
            res.json({
                message:"no tiene los permisos"
            })
        }
    }
}
export const isEditor = (id)=>{
    return async (req , res, next)=>{
        let role = await getRole(1);
        if(role==="Admin"||role==="Editor"){
            next();
        }
        else{
            res.json({
                message:"no tiene los permisos"
            })
        }
    }
}
export const isUser = (id)=>{
    return async (req , res, next)=>{
        let role = await getRole(1);
        console.log(role)
        if(role==="Admin"||role==="Editor"||role==="Usuario"){
            next();
        }
        else{
            res.json({
                message:"no tiene los permisos"
            })
        }
    }
}