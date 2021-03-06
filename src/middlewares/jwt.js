import jwt from "jsonwebtoken";

export const generateJWT = (user) => {
    let token = jwt.sign(user, process.env.SECRET_KEY, {
        algorithm: "HS384",
        expiresIn: "1hr"
    });
    return token;
}


export const validateJWT =(req, res) => {
    let bearerToken = req.headers.authorization
    const token = bearerToken.split(' ')[1]
    
    if(token){
        try{
        const decode = jwt.verify(token,process.env.SECRET_KEY)
        return decode
        }
        catch(error){
            console.error();
            return false
        }
    }else{
        return false
        }
   }
