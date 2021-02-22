import bcrypt from "bcryptjs";
import {ResetTokens} from "../models/";
import { v4 as uuidv4 } from 'uuid';
import {Users} from "../models/";
import moment from "moment";

export const resetpasword = async(req,res) => {
    const findUser = await Users.findOne({where: {email: req.body.email}});
    if(findUser){
        const validPassword = bcrypt.compareSync(req.body.password, findUser.password);
        if(validPassword){
            req.body.token = uuidv4();
            req.body.active = true;
            req.body.expirationDate = moment().add(5,"minutes");
            req.body.userId = findUser.id;
            try{
                ResetTokens.create({
                    token:req.body.token,
                    expirationDate:req.body.expirationDate,
                    userId:req.body.userId,
                    active:req.body.active
                });
                res.status(201).json({message: "token enviado correctamente"});
            }catch{
                res.status(401).josn({message: "intente mas tarde"});
            }
        }else{
            return res.status(401).json({message:"contrasena incorrecta"});
        }
    }else{
        res.status(401).json({message:"correo invalido"});
    }
}

