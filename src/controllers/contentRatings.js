import { content_ratings, content_types, contents } from "../models";

export const addcontent_ratings = async (req, res) => {
  try {
    const results = await content_ratings.create({
      content_type_id: req.body.content_type_id,
      name: req.body.name,
      description: req.body.description,
    });
    return res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ message: "Ocurrio un problema intente mas tarde" });
  }
};

export const updatecontent_ratings = async (req, res) => {
  const findcontent_ratings = await content_ratings.findOne({
    where: { id: req.params.id },
  });
  if (findcontent_ratings) {
    try {
      content_ratings.update(
        {
          content_type_id: req.body.content_type_id,
          name: req.body.name,
          description: req.body.description,
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

export const getcontent_ratings = async (req, res) => {
  try {
    let results = await content_ratings.findAll({
      include: [
        {
          model: content_types,
          attributes: ["name"],
        },
        { model: contents, attributes: ["title"] },
      ],
    });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const getcontent_rating = async (req, res) => {
  try {
    let results = await content_ratings.findOne({
      include: [
        {
          model: content_types,
          attributes: ["name"],
        },
        { model: contents, attributes: ["title"] },
      ],
      where: { id: req.params.id },
    });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const erasecontent_ratings = async (req, res) => {
  const findcontent_ratings = await content_ratings.findOne({
    where: { id: req.params.id },
  });
  if (findcontent_ratings) {
    try {
      content_ratings.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: "Registro eliminado." });
    } catch (error) {
      res.status(400).json({
        messsage: "Hubo un error al procesar tu petición",
      });
    }
  }
};
