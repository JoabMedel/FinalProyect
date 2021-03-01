const {Users} = require("../models");
import bcryptjs from "bcryptjs";
import bcrypt from "bcryptjs";
import {generateJWT} from "../middlewares/jwt";

export const login = async (req, res) => {
    const {email, password} = req.body;
    //Solicitar el registro del usuario que tenga el email solicitado
    try{
        let results = await Users.findOne({where: {email}});
        console.log(email)
        //Comparar la contraseña
        let validPassword = bcrypt.compareSync(password, results.password);
        if(validPassword){
            //Generar la contraseña
            let token = generateJWT({
                id: results.id,
                firstName: results.firstName,
                lastName: results.lastName,
                email: email
            });
            
            res.json({
                message: "Has iniciado sesión correctamente",
                token
            });
        }else{
            //Enviaremos un error
            res.status(401).json({
                message: "Las credenciales son incorrectas"
            });
        }
    }catch(error){
        res.status(401).json({
            message: "Las credenciales son incorrectas"
        });
    }
}

export const signUp = async (req, res) => {
    const {email} = req.body;
    const results = await Users.findOne({where: {email: email}});
    if(results){
        return res.status(400).json({
            message: "400 - verificar datos"
        });
    }
    else{
    try{
        const pass = req.body.password;
        const encryptedPass = bcryptjs.hashSync(pass, 10); //encripto la contraseña con bcrypt
        req.body.password = encryptedPass; //reasignando la contraseña encriptada
        const results = await Users.create(req.body);
        return res.status(201).json(results);}

    catch(error){
        console.log(error);
    }}
    
}


