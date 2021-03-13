import {Users} from "../models/"

export const getRole = async(id) => {
    try{
        let role= await Users.findOne({where:{id:id}, include: ["Roles"]})
        return(role.Roles[0].name)
    }
    catch(error){
        console.log(error)
    }       
}

export const isAdmin = ()=>{
    return async (req , res, next)=>{
        let role = await getRole(req.headers.uid);
        if(role==="Admin"){
            next();
        }
        else{
            res.status(401)
            .json({
                message:"no tiene los permisos"
            })
        }
    }
}
export const isEditor = () => {
    return async (req , res, next)=>{
        let role = await getRole(req.headers.uid);
        if(role==="Admin"||role==="Editor"){
            next();
        }
        else{
            res.status(401)
            json({
                message:"no tiene los permisos"
            })
        }
    }
}
export const isUser = ()=>{
    return async (req , res, next)=>{
        let role = await getRole(req.headers.uid);
        if(role==="Admin"||role==="Editor"||role==="User"){
            next();
        }
        else{
            res.status(401)
            .json({
                message:"no tiene los permisos"
            })
        }
    }
}