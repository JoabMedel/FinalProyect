import bcrypt from "bcryptjs";
import {ResetTokens} from "../models/";
import { v4 as uuidv4 } from 'uuid';

export const resetpasword = async(req,res) => {
    const datos = req.body;
    datos.token = uuidv4();
    try{
        ResetTokens.create(datos);
        res.status(201).json(datos);
    }catch(error){
        res.status(401).json({message:error});
    }
}

