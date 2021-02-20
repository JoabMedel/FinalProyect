import jwt from "jsonwebtoken";


export const generateJWT = (user) => {
    let token = jwt.sign(user, process.env.SECRET_KEY, {
        algorithm: "HS384",
        expiresIn: "1hr"
    });
    return token;
}


export const verifyUsersId = async (req, res) => {
    let bearerToken = req.header('authorization')
    const token = bearerToken.split(' ')[1]
    console.log(token)
    if(await validateJWT(token)===true){
        let idNum=Number(req.params.id)
        console.log(idNum)
        const results = await Users.findOne({where: {id:idNum},atributtes:"lastName"});
        console.log(typeof req.params.id)
        return res.json(results);
    }else{
        return res.status(401).json({
            message:"token no valido"
        })
        }
}
