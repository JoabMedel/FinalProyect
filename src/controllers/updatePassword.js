import {Users} from "../models/";
import {ResetTokens} from "../models/";
import bcrypt from "bcryptjs";

export const updateUser = async (req,res) => {
    try{
        let {resetToken,password} = req.body
        let findToken = await ResetTokens.findOne({where: {token: resetToken}});
        if(findToken){
            const pass = password;
            const encryptpass = bcrypt.hashSync(pass,10);
            password=encryptpass;
            Users.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: password,
                resetToken: resetToken
            },
            {
                where:
                {
                    id:req.params.id
                }
            });
           return res.status(201).json(req.body);
        }else{
            return res.status(401).json({message:"token incorrecto"});
        }
    }catch(error){
        res.status(401).json({message:error});
    }
}
