import { languages } from "../models";

export const addLanguages = async (req, res) => {
  try {
    const results = await languages.create(req.body);
    return res.status(201).json(results);
  } catch (error) {
    console.log(error);
  }
};

export const updateLanguages = async (req, res) => {
  const findLanguages = await languages.findOne({
    where: { id: req.params.id },
  });
  console.log(req.body.name);
  if (findLanguages) {
    try {
      languages.update(
        {
          name: req.body.name,
        },
        { where: { id: req.params.id } }
      );
      res.status(200).json({ message: "actualizacion exitosa" });
    } catch (error) {
      res.satatus(500).json({ message: "ocurrio un error intente mas tarde" });
    }
  } else {
    res
      .status(400)
      .json({ message: "hubo un problema para actualizar rol de usuario" });
  }
};

export const getLanguages = async (req, res) => {
  console.log("ingresa");
  try {
    let results = await languages.findAll();

    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const getLanguage = async (req, res) => {
  try {
    let results = await languages.findOne({ where: { id: req.params.id } });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const eraseLanguages = async (req, res) => {
  const findlanguages = await languages.findOne({
    where: { id: req.params.id },
  });
  if (findlanguages) {
    try {
      languages.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: "Registro eliminado." });
    } catch (error) {
      res.status(400).json({
        messsage: "Hubo un error al procesar tu petición",
      });
    }
  }
};
