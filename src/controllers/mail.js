import sendEmail from "../utils/nodemailer"

export const sendMail = (req, res) => {
    try{
        sendEmail();
        res.json({
            message: "El correo ha sido enviado satisfactoriamente"
        });
    }catch(error){
        console.log(error);
    }
};