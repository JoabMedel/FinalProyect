import {Users} from "../models/";
import {ResetTokens} from "../models/";
import bcrypt from "bcryptjs";
import moment from "moment";

export const updateUser = async (req,res) => {
    console.log('ingresa')
    try{
        let {password,token} = req.body;
        let findToken = await ResetTokens.findOne({where: {token: token, active: true}});
        if(findToken){
            if(findToken.expirationDate>moment()){
                const pass = password;
                const encryptpass = bcrypt.hashSync(pass,10);
                password=encryptpass;
                Users.update({
                    password: password
                },
                {
                    where:
                    {
                        id:req.query.uid,
                    }
                });
                ResetTokens.update({
                    active:false
                },
                {
                    where:
                    {
                        token:req.query.tkn
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
                        token:req.query.tkn
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