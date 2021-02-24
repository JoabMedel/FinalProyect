import bcrypt from "bcryptjs";
import {ResetTokens} from "../models/";
import { v4 as uuidv4 } from 'uuid';
import {Users} from "../models/";
import moment from "moment";
import sendEmail from "../utils/nodemailer";
import { url } from "../templates/lost_password";

export const resetpasword = async(req,res) => {
    const findUser = await Users.findOne({where: {email: req.body.email}});
    let token=0
    if(findUser){
        const validPassword = bcrypt.compareSync(req.body.password, findUser.password);
        if(validPassword){
            req.body.token = uuidv4();
            req.body.active = true;
            req.body.expirationDate = moment().add(5,"minutes");
            req.body.userId = findUser.id;
            let tokens =({
                token:req.body.token,
                expirationDate:req.body.expirationDate,
                userId:req.body.userId,
                active:req.body.active
            });
            let sendToken=await createToken(tokens)
            let tokenuuid=sendToken.dataValues.token
            try{
                sendEmail(findUser.email,tokenuuid,findUser.id)
                res.status(201).json({message: "token enviado correctamente"});
            }catch{
                res.status(401).json({message: "intente mas tarde"});
            }
        }else{
            return res.status(401).json({message:"contrasena incorrecta"});
        }
    }else{
        res.status(401).json({message:"correo invalido"});
    }
}

export const createToken = async(tokenBody) => {
   let token= ResetTokens.create({
        token:tokenBody.token,
        expirationDate:tokenBody.expirationDate,
        userId:tokenBody.userId,
        active:tokenBody.active
    });
    return token
}