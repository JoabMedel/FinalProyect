const { Users, UserRoles, Roles } = require("../models");
import bcryptjs from "bcryptjs";
import bcrypt from "bcryptjs";
import { generateJWT } from "../middlewares/jwt";

export const login = async (req, res) => {
  const { email, password } = req.body;
  //Solicitar el registro del usuario que tenga el email solicitado
  try {
    let results = await Users.findOne({ where: { email } });
    //Comparar la contraseña
    let validPassword = bcrypt.compareSync(password, results.password);
    if (validPassword) {
      //Generar la contraseña
      let token = generateJWT({
        id: results.id,
        firstName: results.firstName,
        lastName: results.lastName,
        email: email,
      });
      res.json({
        message: "Has iniciado sesión correctamente",
        token,
      });
    } else {
      //Enviaremos un error
      res.status(401).json({
        message: "Las credenciales son incorrectas",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Las credenciales son incorrectas",
    });
  }
};

export const signUp = async (req, res) => {
  const { email } = req.body;
  const results = await Users.findOne({ where: { email: email } });
  if (results) {
    return res.status(400).json({
      message: "400 - verificar datos",
    });
  } else {
    try {
      const pass = req.body.password;
      const encryptedPass = bcryptjs.hashSync(pass, 10); //encripto la contraseña con bcrypt
      req.body.password = encryptedPass; //reasignando la contraseña encriptada
      const results = await Users.create(req.body);
      const addRolUser = await UserRoles.create({
        userId: results.id,
        roleId: 3,
      });
      return res.status(201).json(results);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ocurrio un problema intente mas tarde" });
    }
  }
};

export const signUpPrivilegedUser = async (req, res) => {
  const { email, roleUser, emailAdmin, passwordAdmin } = req.body;
  const results = await Users.findOne({ where: { email: email } });
  if (results) {
    return res.status(400).json({
      message: "400 - verificar datos",
    });
  } else {
    try {
      const findAdminUser = await Users.findOne({
        where: { email: emailAdmin },
        include: [
          {
            model: Roles,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      let decodePasswordAdmin = bcrypt.compareSync(
        passwordAdmin,
        findAdminUser.password
      );
      if (decodePasswordAdmin) {
        const data = findAdminUser;
        if (data.Roles[0].name === "Admin") {
          const pass = req.body.password;
          const encryptedPass = bcryptjs.hashSync(pass, 10);
          req.body.password = encryptedPass;
          const results = await Users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
          });
          const addRolUser = await UserRoles.create({
            userId: results.id,
            roleId: roleUser,
          });
          return res.status(201).json(results);
        } else {
          return res.status(401).json({ message: "No estas autorizado" });
        }
      } else {
        return res.status(401).json({ message: "administrador no autorizado" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ocurrio un problema intente mas tarde" });
    }
  }
};
