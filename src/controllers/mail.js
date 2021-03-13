import sendEmail from "../utils/nodemailer";

export const sendMail = (req, res) => {
  try {
    sendEmail();
    res.json({
      message: "El correo ha sido enviado satisfactoriamente",
    });
  } catch (error) {
    res.status(500).json({message:"Ocurrio un problema intente mas tarde"});
  }
};
