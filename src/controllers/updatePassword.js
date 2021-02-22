import {Users} from "../models/";
import {ResetTokens} from "../models/";
import bcrypt from "bcryptjs";
import moment from "moment";

export const updateUser = async (req,res) => {
    try{
        let {resetToken,password} = req.body
        let findToken = await ResetTokens.findOne({where: {token: resetToken, active: true}});
        if(findToken){
            if(findToken.expirationDate>moment()){
                const pass = password;
                const encryptpass = bcrypt.hashSync(pass,10);
                password=encryptpass;
                Users.update({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: password
                },
                {
                    where:
                    {
                        id:req.params.id
                    }
                });
                ResetTokens.update({
                    active:false
                },
                {
                    where:
                    {
                        token:resetToken
                    }
                })
               return res.status(201).json({message:"Actualizacion exitosa"});
            }else{
                ResetTokens.update({
                    active:false
                },
                {
                    where:
                    {
                        token:resetToken
                    }
                });
                res.status(401).json({message:"tiempo de actualizacion expirado"});
            }
        }else{
            return res.status(401).json({message:"token invalido"});
        }
    }catch(error){
        res.status(401).json({message:"intenta mas tarde"});
    }
}