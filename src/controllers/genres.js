import { genres } from "../models";

export const addDGenre = async (req, res) => {
  try {
    const results = await genres.create({
      name: req.body.name,
    });
    return res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ message: "Ocurrio un problema intente mas tarde" });
  }
};

export const updateGenre = async (req, res) => {
  const findGerne = await genres.findOne({ where: { id: req.params.id } });
  if (findGerne) {
    try {
      genres.update(
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
    res.status(400).json({ message: "hubo un problema para actualizar" });
  }
};

export const getGenres = async (req, res) => {
  try {
    //agregar al endpoint un param "limit" para limitar la cantidad.
    let results = await genres.findAll({
      limit: req.query.limit,
    });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const getOneGenre = async (req, res) => {
  try {
    let results = await genres.findOne({ where: { id: req.params.id } });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const eraseGenre = async (req, res) => {
  const findGerne = await genres.findOne({ where: { id: req.params.id } });
  if (findGerne) {
    try {
      genres.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: "actualizacion exitosa" });
    } catch (error) {
      res.status(400).json({
        messsage: "Hubo un error al procesar tu petición",
      });
    }
  }
};
